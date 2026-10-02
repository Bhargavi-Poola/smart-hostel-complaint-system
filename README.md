# Smart Hostel Complaint & Maintenance System

## 1. Project Overview

The **Smart Hostel Complaint & Maintenance System** is a web-based complaint management system designed for hostel students.

Instead of reporting problems verbally to the warden or writing complaints in a register, students can submit complaints digitally. The complaint is assigned to the concerned maintenance staff and the student can track the complaint status.

### Complaint Flow

```text
Student
   ↓
Raise Complaint
   ↓
Complaint ID Generated
   ↓
Warden Reviews
   ↓
Assign Maintenance Staff
   ↓
Staff Works on Complaint
   ↓
In Progress
   ↓
Resolved
   ↓
Student Tracks Status
```

---

## 2. Main Features

* Student login using Roll Number and Password
* Roll Number validation
* Raise hostel complaints online
* Select complaint category
* Enter room number
* Add problem description
* Upload complaint photo
* Automatic Complaint ID generation
* Boys Hostel and Girls Hostel management
* Separate Boys Warden login
* Separate Girls Warden login
* Maintenance Staff login
* Staff assignment by warden
* Complaint status tracking
* Status updates:

  * Submitted
  * Assigned
  * In Progress
  * Resolved
* Complaint history
* Hostel Admin / Chief Warden dashboard
* Overall monitoring of Boys and Girls Hostels
* SQLite database
* Password hashing
* Responsive Bootstrap interface

---

## 3. User Roles

### Student

Students can:

* Login using Roll Number and Password
* Raise complaints
* Upload photos
* View Complaint ID
* Track complaint status
* View complaint history

### Boys Warden

The Boys Warden can:

* View Boys Hostel complaints
* Check complaint details
* Assign Boys maintenance staff
* Monitor complaint status

### Girls Warden

The Girls Warden can:

* View Girls Hostel complaints
* Check complaint details
* Assign Girls maintenance staff
* Monitor complaint status

### Maintenance Staff

Maintenance staff can:

* View complaints assigned to them
* Check problem details
* Start maintenance work
* Change status to In Progress
* Change status to Resolved
* Add work/update notes

### Hostel Admin / Chief Warden

The Hostel Admin can:

* Monitor Boys Hostel
* Monitor Girls Hostel
* View all complaints
* View wardens
* View maintenance staff
* Monitor overall complaint status

---

## 4. Complaint Categories

The system supports the following categories:

* Electrical
* Plumbing
* Cleaning
* Wi-Fi/Network
* General Maintenance

Example:

```text
Category: Electrical
Room: B-204
Problem: Fan is not working
Photo: fan.jpg
```

---

## 5. Roll Number Validation

Student Roll Number must:

* Contain letters and numbers
* Have minimum 5 characters
* Have maximum 15 characters
* Not contain special characters

### Valid Examples

```text
24CSE1001
SRGEC2024
A12345
24A81A0501
```

### Invalid Examples

```text
123456
ABCDE
24CSE@01
ABCDEFGHIJKLMNOP
```

Validation pattern:

```text
^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{5,15}$
```

---

## 6. Project Structure

```text
Smart_Hostel_Complaint_System/
│
├── app.py
├── database.db
├── requirements.txt
├── README.md
│
├── static/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   └── uploads/
│       └── complaint_photos/
│
└── templates/
    │
    ├── base.html
    ├── index.html
    ├── login.html
    │
    ├── student/
    │   ├── dashboard.html
    │   ├── raise_complaint.html
    │   ├── my_complaints.html
    │   ├── complaint_details.html
    │   └── profile.html
    │
    ├── warden/
    │   ├── dashboard.html
    │   ├── complaints.html
    │   └── complaint_details.html
    │
    ├── staff/
    │   ├── dashboard.html
    │   └── complaint_details.html
    │
    └── admin/
        ├── dashboard.html
        ├── complaints.html
        ├── wardens.html
        └── staff.html
```

---

## 7. Technologies Used

### Frontend

* HTML5
* CSS3
* Bootstrap
* JavaScript

### Backend

* Python
* Flask

### Database

* SQLite

### Security

* Werkzeug Password Hashing

---

## 8. Database Tables

### Users

Stores login and role information.

```text
users
-------------------------
id
roll_number
username
password
name
role
hostel_type
```

### Staff

Stores maintenance staff information.

```text
staff
-------------------------
id
user_id
name
phone
department
hostel_type
```

### Complaints

Stores complaint information.

```text
complaints
-------------------------
id
complaint_id
student_id
hostel_type
room_number
category
description
photo
status
assigned_staff_id
created_at
resolved_at
```

### Complaint Updates

Stores complaint status history.

```text
complaint_updates
-------------------------
id
complaint_id
status
note
updated_by
updated_at
```

---

## 9. Installation

### Step 1 — Install Python

Install Python 3.10 or later.

Check Python:

```bash
python --version
```

---

### Step 2 — Open Project Folder

Open the project folder in VS Code.

Open the terminal:

```text
Terminal → New Terminal
```

---

### Step 3 — Install Dependencies

Run:

```bash
pip install -r requirements.txt
```

---

### Step 4 — Run the Application

Run:

```bash
python app.py
```

You should see:

```text
Running on http://127.0.0.1:5000
```

Open the browser and visit:

```text
http://127.0.0.1:5000
```

---

## 10. Demo Login Accounts

### Student

```text
Roll Number:
24CSE1001

Password:
student123
```

### Boys Warden

```text
Username:
boyswarden

Password:
boys123
```

### Girls Warden

```text
Username:
girlswarden

Password:
girls123
```

### Hostel Admin / Chief Warden

```text
Username:
admin

Password:
admin123
```

### Boys Maintenance Staff

```text
Username:
boys_electrical

Password:
staff123
```

### Girls Maintenance Staff

```text
Username:
girls_plumber

Password:
staff123
```

---

## 11. How the System Works

### Step 1 — Student Login

Student enters:

```text
Roll Number
Password
```

The system verifies the credentials.

---

### Step 2 — Raise Complaint

Student enters:

```text
Room Number
Complaint Category
Problem Description
Photo
```

After submission, the system generates a unique Complaint ID.

Example:

```text
SHC-20260927-A45F21
```

---

### Step 3 — Warden Checks Complaint

The respective warden receives the complaint.

```text
Boys Student
     ↓
Boys Warden

Girls Student
     ↓
Girls Warden
```

---

### Step 4 — Assign Staff

The warden selects the appropriate maintenance staff.

Example:

```text
Electrical Problem
        ↓
Electrical Staff
```

The complaint status becomes:

```text
Assigned
```

---

### Step 5 — Staff Works

The maintenance staff opens the assigned complaint and starts working.

Status:

```text
In Progress
```

---

### Step 6 — Problem Resolved

After fixing the problem, staff changes the status to:

```text
Resolved
```

---

### Step 7 — Student Tracks

The student can see the complete status history.

```text
Submitted
     ↓
Assigned
     ↓
In Progress
     ↓
Resolved
```

---

## 12. Advantages

* Reduces verbal complaint handling
* Avoids paper-based complaint registers
* Provides a centralized complaint record
* Makes staff assignment easier
* Provides transparent complaint tracking
* Reduces repeated follow-up
* Maintains complaint history
* Helps wardens monitor maintenance
* Helps admin monitor both hostels

---

## 13. Future Scope

Possible future improvements include:

* Email notifications
* SMS notifications
* WhatsApp notifications
* Complaint priority levels
* Maintenance cost tracking
* Staff performance reports
* Analytics dashboard
* Search and filter options
* Mobile application
* QR code based room identification
* Automatic escalation for delayed complaints

---

## 14. Project Objective

The main objective is to provide a **simple, organized and transparent digital platform** for managing hostel complaints and maintenance activities.

The system connects:

```text
Students
    ↓
Wardens
    ↓
Maintenance Staff
    ↓
Hostel Administration
```

This creates a structured complaint management process from reporting to resolution.

---

## 15. License

This project is developed for **academic and educational purposes** as a Community Service Project.
