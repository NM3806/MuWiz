# Muwiz 🎥

**Muwiz** is a movie web app inspired by Disney+, designed to provide users with an immersive experience in exploring trending movies, genres, and detailed visuals. The application leverages The Movie Database (TMDB) API for real-time movie data and is built using React with Tailwind CSS for a responsive and modern design.

![image](https://github.com/user-attachments/assets/521b8a04-fe64-4125-a819-cd41c52292d3)


[**Live Demo**](https://muwiz.netlify.app) *Use VPN in case components do not load*

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [License](#license)

## Features

- 🌟 **Trending Movies**: Real-time updates of the most popular films.
- 🎬 **Genre Browsing**: Easily explore movies categorized by genre.
- 🎥 **Interactive Movie Cards**: Engaging movie cards displaying titles and posters.
- 💻 **Responsive Design**: Seamlessly adapts to various screen sizes.
- ⏩ **Smooth Scrolling**: Horizontal navigation for a fluid user experience.
- 🎦 **Production Houses Previews**: Hover effects showcasing video snippets from top production companies like Disney and Marvel.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **API**: TMDB (The Movie Database) API
- **Icons**: React Icons
- **Deployment**: Netlify

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/muwiz.git
   ```

2. Navigate to the project directory:
   ```bash
   cd muwiz
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

Access the app at `http://localhost:3000`.

## Environment Variables

Create a `.env` file in the root of your project and add your TMDB API key:

```bash
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

Obtain your API key by registering on [TMDB's API section](https://developers.themoviedb.org/3/getting-started/introduction).

## Usage

Explore the following features after launching the app:
- Scroll through the trending movies on the homepage.
- Browse by genres with horizontal scroll sections.
- View video previews from production houses on hover.
- Navigate between movie cards using the left/right arrows.

## API Integration

Muwiz effectively utilizes the TMDB API for:
- **Trending Movies**: Displayed prominently in a slider.
- **Genre-specific Movies**: Categorized data for easier browsing.
- **Movie Details**: Comprehensive information including titles, posters, and backdrops.

API calls are managed via Axios in the `GlobalAPI.js` service file, ensuring efficient data handling.

## Deployment

The application is deployed on **Netlify**. Check out the live version at [muwiz.netlify.app](https://muwiz.netlify.app).

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
