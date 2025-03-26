# TaskMaster - Full-Stack Task Management Application

![TaskMaster UI Preview](./screenshots/dashboard.png)

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [API Documentation](#api-documentation)
5. [Testing Guide](#testing-guide)
6. [UI Walkthrough](#ui-walkthrough)
7. [Troubleshooting](#troubleshooting)

## Features
- Create, read, update, and delete tasks
- Mark tasks as complete/incomplete
- Responsive design (works on mobile/desktop)
- Persistent data storage (JSON file)
- RESTful API backend

## Tech Stack
| Component       | Technology       |
|----------------|-----------------|
| Frontend       | React 18, CSS3  |
| Backend        | Node.js, Express|
| Data Storage   | JSON (file)     |
| API Testing    | Postman, curl   |

## Installation

### 1. Backend Setup
```bash
# Clone repository
git clone https://github.com/SSwanshi/TaskMaster.git
cd taskmaster/server

# Install dependencies
npm install

# Start server (runs on port 5000)
node server.js