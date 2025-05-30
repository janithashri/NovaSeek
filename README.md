# 🚀 NovaSeek — Space Launch Backend System

**NovaSeek** is a Node.js + Express backend system that simulates a space launch program. It integrates **Kepler’s exoplanet dataset** to identify habitable planets and allows users to schedule, track, and abort space missions in real-time.

> 🛰️ Designed for scalability, modularity, and production-readiness — with a ReactJS frontend and MongoDB persistence.

---

## 🧩 Key Features

- 🌌 **Planet Discovery Engine**  
  Parses Kepler’s NASA dataset to filter habitable planets using scientific criteria.

- 🛰️ **Launch Scheduling System**  
  Built secure `GET`, `POST`, and `DELETE` API endpoints to manage upcoming and historical launches.

- 🗂️ **Clean Code Architecture**  
  Organized using `models`, `controllers`, and `routes` for scalability and clarity.

- 🌐 **Frontend Integration**  
  Integrated with a ReactJS frontend using RESTful APIs.

- 📜 **Request Logging**  
  Integrated **Morgan** middleware to log and monitor API requests.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Middleware:** Morgan  
- **Data Source:** Kepler Exoplanet Dataset (NASA)  
- **Frontend (Integrated):** ReactJS  

---

## 📂 Folder Structure

```bash
NovaSeek/
├── controllers/
│   └── launchesController.js
├── models/
│   └── launchModel.js
│   └── planetModel.js
├── routes/
│   └── launchRoutes.js
│   └── planetRoutes.js
├── services/
│   └── keplerDataParser.js
├── public/
├── logs/
├── app.js
├── server.js
└── README.md


---

🧠 What I Learned

Building NovaSeek was a hands-on deep dive into backend architecture and real-world data processing. Here's what I learned:

✅ How to structure a clean, modular backend using MVC design pattern.

🌐 How to integrate a React frontend with RESTful Node.js APIs.

🛰️ How to work with real scientific datasets (NASA's Kepler) and turn raw CSV data into usable models.

🧪 Built robust API endpoints and used middleware like Morgan for request tracking and debugging.

🔁 Gained experience in asynchronous operations, request validation, and error handling.



---

🚀 Getting Started

Clone the repo and run it locally:

git clone https://github.com/your-username/novaseek-backend
cd novaseek-backend
npm install
npm start

The server runs at http://localhost:8000 by default.


---

🔗 Project Link

🌍 NovaSeek Backend on GitHub


---

📮 Let's Connect

Feel free to explore, fork, or contribute!
📧 [your.email@example.com]
🌐 [your-portfolio.dev] | 💼 [LinkedIn]

---

Let me know if you want this in a downloadable file or want to create a matching frontend README too.

