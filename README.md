# Task Management Application

A modern, lightweight task management application built with Preact and Encore. This application allows users to create, update, and manage their tasks with a clean and intuitive interface.

## Features

- Create new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Clean and responsive UI
- Real-time task management
- Persistent storage with SQLite

## Tech Stack

### Frontend

- [Preact](https://preactjs.com/) - Fast 3kB alternative to React
- [Pico CSS](https://picocss.com/) - Minimal CSS framework for semantic HTML
- TypeScript - For type-safe development

### Backend

- [Encore](https://encore.dev/) - Backend framework for TypeScript
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- SQLite - Lightweight, file-based database

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Encore CLI

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd task-management-app
```

2. Install frontend dependencies:

```bash
cd frontend
npm install
```

3. Install backend dependencies:

```bash
cd ../backend
npm install
```

4. Set up the database:

```bash
npx prisma migrate dev
```

### Running the Application

1. Start the backend server:

```bash
cd backend
encore run
```

2. Start the frontend development server:

```bash
cd frontend
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
task-management-app/
├── frontend/              # Preact frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── context/       # State management
│   │   ├── pages/         # Application pages
│   │   └── style.css      # Global styles
│   └── package.json
│
└── backend/               # Encore backend application
    ├── hello/            # API endpoints
    ├── prisma/           # Database schema and migrations
    └── package.json
```

## API Endpoints

- `GET /tasks` - Get all tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Preact](https://preactjs.com/) for the lightweight frontend framework
- [Pico CSS](https://picocss.com/) for the minimal CSS framework
- [Encore](https://encore.dev/) for the backend framework
- [Prisma](https://www.prisma.io/) for the database ORM
