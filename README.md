# React Frontend for Social Media Clone

This repository showcases the frontend of a robust social media clone application. Utilizing modern web technologies like React.js and Material-UI, the platform provides a seamless and responsive user experience across various devices. This frontend is specifically designed to interact and integrate seamlessly with the backend part of the platform, ensuring a cohesive and dynamic user experience from end to end.

![Cover Photo](./ReadmeImages/cover.png)

## 🌟 Features:

1. **Responsive UI**:

   - A modern interface optimized for all devices, crafted with React.js and enhanced with Material-UI components.

2. **Post Interactions**:

   - Users can create, edit, delete, search, and view posts in real-time.
   - Multi-file upload allows for simultaneous image and video sharing.
   - Integrated HLS (HTTP Live Streaming) for adaptive video playback. Ensuring high-quality video streaming that adjusts according to the user's network conditions.

3. **Liking and Commenting**:

   - Real-time liking and commenting with live feedback to all users.

4. **Advanced File Uploading**:

   - Supports chunked file uploading. If interrupted, users can resume their uploads without starting over.
   - Uses IndexedDB for temporary local storage, ensuring that even large media uploads are smooth and resilient.

5. **Real-time Notifications**:
   - Instant notifications on user interactions, such as when a post is liked or commented on.

## 🛠 Technology Stack:

- **React.js**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework for a responsive and modern design.
- **Yarn**: Used for package management and task running.
- **IndexedDB**: A low-level API for client-side storage of significant amounts of structured data.

## 🔧 Getting Started:

1. **Prerequisites**:

   - Ensure Node.js and Yarn are installed.

2. **Setup & Installation**:

   ```bash
   # Clone the repository
   git clone <repository-url>

   # Navigate into the project directory
   cd <project-directory-name>

   # Install dependencies using Yarn
   yarn install

   # Start the development server
   yarn start
   ```

3. **Access**:
   - The application should be live at `http://localhost:3000`.
