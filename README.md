

---

# Attendance System 

## Project Overview

This project is an advanced attendance system designed to streamline employee attendance tracking with active notifications. The system provides role-based access for Admins and Employees, each with tailored dashboards and functionalities. The implementation leverages modern technologies such as Node.js, Express.js, angular. MongoDB, Redis, and Socket.io to ensure scalability and real-time communication.

## Features

### Employee Dashboard
- **Check In/Out:**
  - Intuitive button for employees to start and end their workday.
- **Time Tracker:**
  - Real-time stopwatch that runs continuously, displaying the total elapsed work time.
- **Break Management:**
  - Break button to mark breaks without stopping the main timer, ensuring accurate work time records.
  - Separate storage for break data.
- **Reminders:**
  - Notification system to remind employees of check-in and check-out timings based on predefined shift schedules.
- **Leave Management:**
  - Leave request form that sends a request to the admin for approval.
- **Attendance History:**
  - Detailed attendance history table showing daily time spent and leave details with click-to-preview functionality.

### Admin Dashboard
- **Admin Privileges:**
  - Access to all employee functionalities.
- **Employee Management:**
  - Comprehensive view of all employee data and attendance records.
  - Quick status overview to see if an employee is checked in, checked out, on break, or on leave.
- **User Administration:**
  - Ability to add, block, or remove employees.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** angular
- **Database:** MongoDB
- **Notifications:** Socket.io
- **JWT Storage:** Redis
- **Scheduler:** NodeCron

## Installation Instructions

### Prerequisites

- Node.js (>= 14.x.x)
- MongoDB
- Redis
- Git

### Steps

1. **Clone the Repository**
   ```bash
   frontend :  https://github.com/mithlajmt/staffClock-frontend.git
   backend :  https://github.com/mithlajmt/staffClock-backend.git
   socket : https://github.com/mithlajmt/staffClock-socket.git
   cd attendance-system
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   - Create a `.env` file in the root directory and add the following environment variables:
PORT,
MONGODB_URL,
JWT_SECRET_KEY =,
GOOGLE_APP_PASS =,
GMAIL_ADDRESS =,

     ```

4. **Run the Backend Server**
   ```bash
   npm start
   ```

5. **Build and Run the Frontend**
   - Navigate to the `client` directory:
     ```bash
     cd client
     npm install
     npm run build
     ```

6. **Start Socket Server**
   ```bash
   node socketServer.js
   ```

#





For any questions or further assistance, please reach out at [mithlajmatta@gmail.com].

---

Thank you for reviewing my project. I look forward to your feedback!

