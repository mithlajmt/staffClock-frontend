import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfirmboxService } from '../services/confirmbox.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  dialogData: any;
  isVisible!: boolean;
  private dialogDataSubscription!: Subscription;
  private isVisibleSubscription!: Subscription;

  constructor(private confirmboxService: ConfirmboxService) {}

  ngOnInit() {
    this.dialogDataSubscription = this.confirmboxService.dialogData$.subscribe(data => {
      this.dialogData = data;
    });

    this.isVisibleSubscription = this.confirmboxService.isVisible$.subscribe(isVisible => {
      this.isVisible = isVisible;
    });
  }

  onCancelClick() {
    this.cancel.emit();
    this.confirmboxService.closeDialog();
  }

  onConfirmClick() {
    this.confirm.emit();
    this.confirmboxService.closeDialog();
  }

  ngOnDestroy() {
    if (this.dialogDataSubscription) {
      this.dialogDataSubscription.unsubscribe();
    }
    if (this.isVisibleSubscription) {
      this.isVisibleSubscription.unsubscribe();
    }
  }
}
