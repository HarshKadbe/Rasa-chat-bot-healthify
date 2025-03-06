# 🤖 Healthify - Your Personal Health Assistant 🩺

**Healthify** is an AI-driven chatbot designed to assist users with their daily medical queries using the Rasa framework. It leverages machine learning to provide accurate and timely responses, making healthcare information more accessible. 🌐

## 📌 Features

- **Interactive Conversations**: Engages users in natural language dialogues. 🗣️
- **Medical Query Resolution**: Addresses common medical questions with data-driven responses. 💬
- **Integration with WebMD**: Trained on datasets sourced from WebMD for reliable information. 🏥
- **Telegram Accessibility**: Easily accessible via Telegram for instant assistance. 📱

## 🏗️ Project Structure

```
Rasa-chat-bot-healthify/
│── bot/                    # Core chatbot logic
│── healthify/              # Django project files
│── projects/               # Additional project resources
│── static/                 # Static assets (images, CSS, etc.)
│── .gitignore              # Git ignore file
│── db.sqlite3              # SQLite database file
│── manage.py               # Django management script
│── requirements.txt        # Python dependencies
│── sheet.csv               # Dataset for training
```

## ⚡ Tech Stack

- **Python**: Core programming language. 🐍
- **Rasa**: Framework for building conversational AI. 🤖
- **Django**: Web framework for integrating chatbot services. 🌐
- **SQLite**: Lightweight database for storing data. 🗄️
- **JavaScript**: Enhances interactivity on the frontend. ✨

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/HarshKadbe/Rasa-chat-bot-healthify.git
cd Rasa-chat-bot-healthify
```

### 2️⃣ Create a Virtual Environment & Install Dependencies

```bash
python -m venv venv
source venv/bin/activate   # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
```

### 3️⃣ Apply Migrations & Run the Server

```bash
python manage.py migrate
python manage.py runserver
```

### 4️⃣ Access the Application

Open your browser and navigate to:

👉 **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)**

## 🔧 Training the Chatbot

To train the Rasa chatbot with the provided dataset:

```bash
cd bot
rasa train
```

## 🛡️ Security Implementation

- **User Authentication**: Ensures secure access to chatbot features. 🔒
- **Data Validation**: Validates user inputs to prevent malicious entries. 🛡️

## 🏗️ Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. 👥

## 📜 License

This project is licensed under the MIT License. 📄


