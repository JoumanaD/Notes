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


---

## ☁️ Deployment on Choreo

This project can be deployed easily using **[Choreo](https://wso2.com/choreo/)** — an integration platform as a service (iPaaS) that simplifies deployment pipelines for full-stack apps.

### 🌐 Backend Deployment (Django API)

1. Push your `backend/` folder to a separate GitHub repository (or a monorepo is fine too).
2. Go to [Choreo Console](https://console.choreo.dev/).
3. Create a new **Component → REST API**.
4. Connect to your GitHub repo and select the `backend/` folder.
5. Set environment variables (e.g., `DEBUG`, `SECRET_KEY`, `ALLOWED_HOSTS`) via the UI.
6. Deploy the component.

### 🌐 Frontend Deployment (React + Vite)

1. Push the `frontend/` folder to GitHub.
2. In Choreo, create a **Component → Web Application**.
3. Select the `frontend/` directory as the build context.
4. Set `npm run build` as the build command.
5. Set `dist/` as the output directory.
6. Choreo will host your app and provide a public URL.

### ✅ Benefits of Using Choreo

- GitHub integration with CI/CD
- Auto-scaling and HTTPS
- Environment variable management
- Built-in monitoring and observability

📚 Learn more: [https://wso2.com/choreo/docs](https://wso2.com/choreo/docs)

---

## 🖼️ Screenshots

### 🔐 Login Page & Notes Page

<p align="center">
  <img src="https://github.com/JoumanaD/Notes/blob/main/frontend/src/assets/login.png" alt="Login Screen" width="30%" style="margin-right:10px;" />
  <img src="https://github.com/JoumanaD/Notes/blob/main/frontend/src/assets/notes.png" alt="Notes Screen" width="60%" />
</p>

---
