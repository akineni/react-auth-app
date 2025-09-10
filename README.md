# 🔐 React + Vite + Supabase Auth Starter

A production-ready authentication starter kit built with **React (Vite)** and **Supabase**.  
It includes **email/password authentication**, **OAuth (Google, GitHub, etc.)**, **password reset flows**, and **protected routes** out of the box.  

This project is designed with **scalability**, **developer experience**, and **security** in mind — so you can focus on building features instead of boilerplate.

---

## ✨ Features

- ⚡️ **React + Vite** — Fast dev server & optimized builds.
- 🔑 **Supabase Auth** — Email/password, OAuth providers, and password recovery.
- 🔄 **Session Persistence** — Auto-refresh tokens & secure session management.
- 🔐 **Protected & Public Routes** — Role-based navigation with layouts.
- 📬 **Forgot/Reset Password** — Full password recovery flow.
- 🌐 **OAuth Support** — Sign in with Google, GitHub, etc.
- 🎨 **Toast Notifications** — Real-time feedback for all auth actions.
- ♻️ **SOLID-Friendly Context API** — Clean separation of concerns for authentication state.
- 🚀 **Ready to Deploy** — Works with Netlify, Vercel, or your hosting of choice.

---

## 📂 Project Structure

```
src/
 ├── components/         # Layouts, UI components
 ├── context/            # AuthProvider (manages session & flows)
 ├── hooks/              # Custom hooks (useDocumentTitle)
 ├── lib/                # Supabase client
 ├── pages/              # Routes (login, signup, dashboard, etc.)
 ├── schemas/            # Zod validation schemas
 ├── services/           # Auth services (signup, login, reset, change password)
 ├── App.jsx             # Main routes
 └── main.jsx            # Entry point
```

---

## ⚙️ Setup & Installation

### 1. Clone Repo
```bash
git clone https://github.com/akineni/react-auth-app.git
cd react-auth-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Supabase
Create a **Supabase project** at [supabase.com](https://supabase.com).  
Copy your **API URL** and **Anon Key**, then create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run Development Server
```bash
npm run dev
```

App will be available at [http://localhost:5173](http://localhost:5173)

---

## 🔐 Auth Flows Covered

1. **Signup** → Email/password with validation.
2. **Login** → Email/password or OAuth.
3. **Forgot Password** → Sends recovery link to email.
4. **Reset Password** → Secure form for creating a new password.
5. **Session Persistence** → Auto-refresh via Supabase client.
6. **Protected Routes** → Dashboard only accessible to authenticated users.
7. **Logout** → Cleanly destroys session and redirects.

---

## 🚀 Deployment

This app works great with [Vercel](https://vercel.com), [Netlify](https://netlify.com), or any static hosting.  
Just make sure to set your environment variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) in your hosting provider.

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Supabase](https://supabase.com/) (Auth + DB)
- [React Router](https://reactrouter.com/) (Routing & layouts)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) (Form validation)
- [React Toastify](https://fkhadra.github.io/react-toastify/) (Notifications)

---

## 🌟 Why This Starter?

Most Supabase + React examples cover only the basics.  
This starter **boasts advanced real-world flows** like password recovery, OAuth, session persistence, and clean SOLID-inspired architecture — so you don’t need to reinvent the wheel.

---

## 📜 License

MIT — free to use and modify. Give it a ⭐ if you like it!
