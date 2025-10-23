# Dawat-Munch
Here is an attractive, comprehensive README.md file for your GitHub project, complete with badges, image snapshots, and setup instructions.

-----

# Dawat Munch - Grab a Bite, Anytime\! 🍽️

"Dawat Munch" is a full-stack web application for a modern restaurant. It provides a complete and interactive online presence, featuring a **bilingual (English/Hindi) interface**, secure **user authentication**, online **table reservations**, and a detailed **customer feedback** system. This project is built with a **Node.js/Express** backend and a **SQLite** database.

## 📸 Project Snapshots

| Homepage | Fast Food Page ("EatU") |
| :---: | :---: |
| ![image alt](https://github.com/jaypatil0815/Dawat-Munch/blob/d28dbe5eabbf8fa33886409c61fa890c0211d0d2/homedawat.png) | ![image alt](https://github.com/jaypatil0815/Dawat-Munch/blob/63fac3c4f24583ef61c1ad7f8e5fed913c4354cc/fastfood.png) |

| Login & Signup | Reservation & Feedback |
| :---: | :---: |
| ![image alt](https://github.com/jaypatil0815/Dawat-Munch/blob/63fac3c4f24583ef61c1ad7f8e5fed913c4354cc/logindawat.png) | ![image alt](https://github.com/jaypatil0815/Dawat-Munch/blob/63fac3c4f24583ef61c1ad7f8e5fed913c4354cc/reservationdawat.png) |
| ![image alt](https://github.com/jaypatil0815/Dawat-Munch/blob/63fac3c4f24583ef61c1ad7f8e5fed913c4354cc/signupdawat.png) | ![image alt](https://github.com/jaypatil0815/Dawat-Munch/blob/63fac3c4f24583ef61c1ad7f8e5fed913c4354cc/feedbackdawat.png) |


## ✨ Key Features

  * **Full User Authentication:** Secure user signup and login system with `bcrypt` password hashing.
  * **Bilingual (i18n) Support:** Complete English and Hindi translations across the entire site, with user preference saved in `localStorage`.
  * **Online Table Reservations:** A sleek, modern form for customers to book a table online. Data is saved directly to the database.
  * **Interactive Feedback System:** A detailed feedback form with a 5-star rating system and multi-select category "chips" for structured insights.
  * **Contact Form:** A "Send a Message" form for customer inquiries.
  * **Dual Brand UI:** Separate, distinct landing pages for the main "Dawat Restaurant" and the "EatU" fast-food brand.
  * **Modern "Glassmorphism" Design:** A clean, modern UI for all forms, using `backdrop-filter` for a blurred, semi-transparent effect.

## 🚀 Tech Stack

### Frontend

  * **HTML5**
  * **CSS3** (Custom properties, Flexbox, Glassmorphism)
  * **JavaScript (ES6+)** (Fetch API, DOM Manipulation, localStorage)

### Backend

  * **Node.js** (Runtime)
  * **Express.js** (Web Framework, Routing)
  * **`bcrypt`** (Password Hashing)
  * **`cors`** (Cross-Origin Resource Sharing)
  * **`body-parser`** (Request Parsing)

### Database

  * **SQLite3** (Database)
  * **`sqlite3`** (Node.js Driver)

## 🔧 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You must have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  **Clone the repo**

    ```sh
    git clone https://github.com/your-username/dawat-munch.git
    ```

2.  **Navigate to the project directory**

    ```sh
    cd dawat-munch
    ```

3.  **Install NPM packages**
    This will install all the backend dependencies like `express`, `sqlite3`, `bcrypt`, and `cors`.

    ```sh
    npm install
    ```

4.  **Run the server**
    The server will automatically create the `restaurant.db` file and its tables on the first run, as defined in `database.js`.

    ```sh
    node server.js
    ```

    Your server will be running at `http://localhost:3000`.

5.  **Open the application**
    Open `index.html` in your browser to start using the application. All forms will now be connected to your local server.

## 🔌 API Endpoints

All endpoints are hosted at `http://localhost:3000`.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/signup` | Registers a new user in the `users` table. |
| `POST` | `/login` | Authenticates an existing user against the `users` table. |
| `POST` | `/api/feedback` | Submits the customer feedback form to the `feedback` table. |
| `POST` | `/api/reservation`| Submits the table reservation form to the `reservations` table. |
| `POST` | `/api/contact` | Submits the user contact message to the `contacts` table. |





