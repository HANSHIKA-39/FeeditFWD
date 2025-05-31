# 🍽️ FeeditFWD - A Food Donation Coordination Platform
FeeditFWD is a full-stack web application that connects **food donors**, **volunteers**, and **NGOs** to reduce food wastage and deliver surplus food to the needy. It provides real-time donation tracking, coordination features, and a role-based interface for different users.

## 🧩 Problem Statement
Every day, huge quantities of food are wasted while many people go to bed hungry. There's a lack of structured communication between those willing to donate excess food and the people who can help deliver it to the needy. Manual processes lead to delays and lack of transparency.

## 🔍 Approach & Solution
FeeditFWD solves this problem through:
- A web platform where **donors** can list surplus food.
- **Volunteers** (independent or NGO-affiliated) can pick up donations.
- **NGOs** can track and manage volunteers and food deliveries.
- Real-time updates on food delivery status.
- A transparent system for all involved parties.

## ✨ Features
- 👤 Donor Dashboard
  - Donate food via a form
  - Track donations and delivery status

- 🤝 Volunteer Dashboard *(to be added)*
  - View available pickups
  - Accept and complete deliveries

- 🏢 NGO View *(optional for expansion)*
  - Manage associated volunteers
  - Overview of food donations and logistics

- 🔒 Authentication
  - Role-based access for donors and volunteers

- 📊 Status Updates
  - Available → Picked-Up → Delivered

- 📍 Location-based listings (optional in future)

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Frontend**: EJS with EjsMate templating
- **Database**: MongoDB with Mongoose
- **Styling**: Custom CSS (in `/public/css`)
- **Session & Auth**: Express-session, Passport.js (optional)
- **Environment**: dotenv
- **Utilities**: ExpressError, wrapAsync

### 📦 Prerequisites
- Node.js and npm
- MongoDB (local or cloud via MongoDB Atlas)

### 🛠️ Setup
1. **Clone the repository**
```bash
git clone https://github.com/yourusername/feeditfwd.git
cd feeditfwd
npm run dev
