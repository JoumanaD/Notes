# 📝 Notes

**Notes** is a full-stack web application that allows users to log in, create, edit, and manage personal notes. Built with a Django backend and a React + Vite frontend, the app provides a clean, modern user interface and a RESTful API.

## 📁 Project Structure

Notes/

├── backend/ # Django REST API

├── frontend/ # React + Vite client

└── README.md # Documentation

## 🚀 Features

- 🔐 User login with secure authentication
- 📝 Create, edit, delete notes
- ⚡ Fast frontend powered by React and Vite
- 🔗 REST API using Django and Django REST Framework
- 📱 Responsive UI

## 🧠 Getting Started

These instructions will get the project up and running on your local machine.

## 🔙 Backend Setup (Django)

1. **Activate Virtual Environment**

```bash
source env/bin/activate
```

2. **Install Dependencies**

```bash
pip install -r requirements.txt
```
3. **Apply Migrations**

```bash
python manage.py makemigrations
python manage.py migrate
```

4. **Run the Server**

```bash
python manage.py runserver
```

Django will start on [http://127.0.0.1:8000](http://127.0.0.1:8000) 

---


## 🔙 Frontend Setup (React + Vite)
1. **Use Node.js Version 20**

If using NVM:

```bash
nvm use 20
```


2. **Install Dependencies**

```bash
npm install
```


3. **Run the Development Server**

```bash
npm run dev
```

The frontend will be available at: [http://localhost:5173](http://localhost:5173)

---

## 🖼️ Screenshots

### 🔐 Login Page

<p align="center">
  <img src="https://github.com/JoumanaD/Notes/blob/main/frontend/src/assets/login.png" alt="Login Screen" width="30%" style="margin-right:10px;" />
  <img src="https://github.com/JoumanaD/Notes/blob/main/frontend/src/assets/notes.png" alt="Notes Screen" width="60%" />
</p>

---
