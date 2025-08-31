# Visa Status Lite Demo

A simple demo web app to check **Visa Status** and **Application Status**.  
Only admin can upload data. Users can check their information using **Passport Number** + **Reference Number**.

---

## 🚀 Demo Login

- **Admin Login:**  
  - Username: `admin`  
  - Password: `12345`

- **Sample User Data (for /status page):**  
  - Passport: `A1234567`  
  - Reference: `REF001`

---

## 📂 Features
- Admin panel (`/admin`) with login
- Upload users via CSV/Excel (in full version)
- Auto-generate Reference Numbers (in full version)
- Users can check their Visa/Application status (`/status`)
- Users **cannot edit/delete** data

---

## ▶️ Deploy with Vercel

Click below to deploy instantly:

[![Deploy with Vercel](https://vercel.com/button)](
  https://vercel.com/new/clone?repository-url=https://github.com/visacheckstatus/visa-status-lite-demo
)

---

## ⚙️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
http://localhost:3000
