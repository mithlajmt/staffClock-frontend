import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.css']
})
export class TablelistComponent {

  @Input() tableData: any[] = [];
  @Input() keyID:any;
  @Output() clickData: EventEmitter<any> = new EventEmitter<any>();
  tableHead: string[] = []; // Specify type as string array
  

  ngOnInit(): void {
    console.log(this.keyID);
    console.log(this.tableData);
    
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.tableHead = Object.keys(this.tableData[0]);
    console.log(this.tableData);
}

onRowClick(keyID:any){
  console.log(keyID);
  
  this.clickData.emit(keyID)
}
}
