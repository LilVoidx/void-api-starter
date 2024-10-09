
---

# VOID Express.js Starter ⚡️

Welcome to the **VOID Express.js Starter** project! This boilerplate provides a clean and scalable setup to start building **Node.js** APIs using **Express.js**, **PostgreSQL** with a focus on best practices, error handling, and developer experience.

---

## 🚀 Getting Started

To get started, simply run the following command in your terminal:

```bash
npx void-expressjs-setup my-project-name
```

This command will:

1. Clone the repository.
2. Install all dependencies.
3. Set up the basic project structure for you to start coding right away!

---

## ✨ Features

- **Express.js**: A fast and minimalist web framework.
- **PostgreSQL**: Integrated with a basic CRUD setup using `pg` and `async/await`.
- **Winston Logger**: For advanced logging with timestamps and error handling.
- **Environment Configuration**: Easily manage your environment variables using `.env`.
- **CORS & Helmet**: Basic security and CORS setup.

### 📦 Dependencies

- `cors` – Enable CORS for your API.
- `dotenv` – Manage environment variables.
- `express` – Minimalist web framework.
- `helmet` – Security middleware for Express.
- `morgan` – HTTP request logger.
- `pg` – PostgreSQL client for Node.js.
- `winston` – Logger for structured logging.

### 🛠️ Dev Dependencies

- `eslint` – Linting JavaScript code.
- `eslint-config-airbnb-base` – Airbnb's style guide base rules.
- `eslint-plugin-import` – Linting support for ES6+ import/export syntax.
- `jest` – Testing framework.
- `nodemon` – Auto-restart server on changes.
- `supertest` – Testing HTTP APIs. 

---

## 🛠️ Project Structure

An overview of the project structure:

```bash
.
├── src
│   ├── config
│   │   ├── env.config.js        # Environment configuration
│   │   ├── db.config.js         # PostgreSQL connection
│   ├── controllers
│   │   └── user.controller.js   # User API controllers
│   ├── middlewares
│   │   └── error.middleware.js  # Error handling middleware
│   ├── services
│   │   └── user.service.js      # User service for business logic
│   ├── utils
│   │   └── logger.util.js       # Winston logger setup
│   ├── routes
│   │   └── user.route.js        # API routes for users
│   └── app.js                   # Main app setup
├── test                         # Test folder
│   └── app.test.js              # Test file for the app
├── .env.example                 # Example environment variables
├── .eslintrc.js                 # ESLint configuration
├── .gitignore                   # Git ignored files
├── README.md                    # Project documentation
├── index.js                     # Entry point for the app
├── package.json                 # Project metadata
├── package-lock.json            # Automatically generated for exact dependency tree

```

---

## 🖥️ Setup and Installation

1. **Clone the repository** manually:
    ```bash
    git clone https://github.com/LilVoidx/void-api-starter.git
    cd void-api-starter
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Environment Variables**:
    Copy the `.env.example` file and rename it to `.env`. Fill in the required environment variables:
   ```bash
   NODE_ENV=development

   PORT=5000
   SECRET=secret
   CLIENT_URL=http://localhost:2000
   SERVER_URL=http://localhost:5000

   DB_USER=user
   DB_HOST=localhost
   DB_NAME=database-name
   DB_PASSWORD=password
   DB_PORT=5432
   DB_URL=postgresql://user:password@localhost:5432/database-name
   ```

4. **Run the application**:
    ```bash
    npm start
    ```

---

## 📋 API Endpoints

### User Routes

| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| GET    | `/api/users`        | Get all users            |
| GET    | `/api/users/:id`    | Get user by ID           |
| POST   | `/api/users`        | Create a new user        |
| PUT    | `/api/users/:id`    | Update an existing user  |
| DELETE | `/api/users/:id`    | Delete a user            |

---

## 🔧 Development

- **Run the server**: `npm start`

  ```bash
    npm start
    ```

- **Run the server using nodemon (during development)**: 

  ```bash
    npm run dev
    ```
    
- **Run tests**:

  ```bash
     npm test
    ```
    
- **Lint your code**:

  ```bash
     npm run lint
    ```
    

---

## 📚 Further Improvements

- Adding user authentication (JWT or OAuth).
- Adding validation middleware
- Setup continuous integration with GitHub Actions.

---

## 🤝 Contributing

Feel free to fork this repository, create a new branch, and submit a pull request. I appreciate any contributions that improve the project!

---

## 🛡️ License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## 🧑‍💻 Author

- **Void** – [GitHub](https://github.com/LilVoidx)

---

Thank you for using **VOID Express Starter**! Let's build something amazing together. 🌟
