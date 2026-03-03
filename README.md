# Project Management

A simple project management tool to help teams organize, track, and deliver projects efficiently.
It still need lot of work.

## Features

- Task creation and assignment
- Project timelines and milestones
- Progress tracking
- Team collaboration tools
- Notifications and reminders

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/easemyProject.git
    ```
2. Install dependencies:
    ```bash
    cd easemyProject
    npm install
    ```
3. Create a `.env` file in the project root with:
    ```bash
    MONGO_URI=<your_mongodb_connection_string>
    PORT=3000
    CORS_ORIGIN=http://localhost:5173
    ```

## Usage

Start the server:

```bash
npm start
```

API base URL: `http://localhost:3000`  
Health check: `http://localhost:3000/api/v1/healthCheck`

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

## License

This project is licensed under the MIT License.
