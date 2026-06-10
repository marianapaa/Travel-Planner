# Travel Planner

Travel Planner is an interactive web application for discovering and organizing travel destinations. It was developed as a final project for the **Problem Solving** course.

## Short Project Description

The application allows users to search for attractions and places in a selected city, view basic information about them, and add selected places to a personal trip list. The trip list is saved in the browser using LocalStorage, so the selected places remain available after refreshing the page.

The project is built as a frontend-only application using **HTML**, **CSS**, and **JavaScript**. It uses public APIs for city search, place search, and map display.

## Main Features

- Search for attractions and places by city name
- Display results with place name, category, address, and distance
- Add places to a personal trip list
- Remove places from the trip list
- Save the trip list using LocalStorage
- Sort the trip list by name or category
- Filter results by category
- Sort results by distance
- Add custom places manually
- Open place details in a modal window
- Show selected places on a Leaflet/OpenStreetMap map
- Use LocalStorage cache for recent searches

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- LocalStorage
- Geoapify Places API
- OpenStreetMap / Nominatim
- Leaflet.js
- Wikipedia API

## Project Structure

```text
Travel-Planner/
├── index.html
├── style.css
├── app.js
├── config.example.js
├── .gitignore
├── README.md
└── REPORT.md
```

## API Key Setup

This project uses the Geoapify Places API. The real API key is not included in the GitHub repository for security reasons.

To run the project locally:

1. Copy `config.example.js`.
2. Rename the copied file to `config.js`.
3. Open `config.js`.
4. Replace the placeholder with your own Geoapify API key:

```javascript
const GEOAPIFY_API_KEY = "YOUR_GEOAPIFY_API_KEY_HERE";
```

5. Make sure `config.js` is in the same folder as `index.html` and `app.js`.
6. Do not upload `config.js` to GitHub.

## How to Run the Project

1. Download or clone the repository.
2. Open the project folder.
3. Create the local `config.js` file as explained above.
4. Open `index.html` in a web browser.

Recommended option:

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

Then search for a city such as `Krakow`, `Warsaw`, `Paris`, `Istanbul`, or `London`.

## Notes

- The application runs locally without a backend.
- `config.js` should not be uploaded to GitHub because it contains the real API key.
- `config.example.js` is included to show how the API key file should be created.
- More detailed explanations about design decisions, testing, and challenges are included in `REPORT.md`.
