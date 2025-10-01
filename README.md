# Project Management System

A simple **Project Management Web Application** built with **React** (frontend) and **Django** (backend).  
It allows users to **create, update, and track projects** in an organized and efficient way.

---

## Features
- Create, edit, and delete projects
- Track project status
- Clean and user-friendly interface
- Built with REST API for smooth frontend-backend interaction

---

## Tech Stack
- **Frontend:** React, Axios, Vite
- **Backend:** Django, Django REST Framework
- **Database:** SQLite

---

## Installation

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv env
   env\Scripts\activate      # Windows
   source env/bin/activate   # macOS/Linux
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run migrations:
   ```bash
   python manage.py migrate
   ```
5. Start the server:
   ```bash
   python manage.py runserver
   ```

### Frontend
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser at `http://localhost:5173`

---

## Usage
- Create, edit, and delete projects via the frontend interface  
- Data is stored in SQLite and managed via Django REST API

---

## License
This project is for **personal and educational purposes**.

