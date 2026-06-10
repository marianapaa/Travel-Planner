# Travel-Planner
Travel Planner is an interactive web application for discovering and organizing travel destinations. Developed by a team of Erasmus+ students as a final project for the "Problem Solving" course.
# Travel Planner

Travel Planner is an interactive web application for discovering and organizing travel destinations. It was developed as a final project for the **Problem Solving** course by Erasmus+ students.

## 1. Project Overview

The aim of this project is to build a simple, useful, and user-friendly travel planning application. The application allows users to search for attractions and places in a selected city, view useful information about these places, and create their own personal trip list.

The project was developed as a frontend-only web application using **HTML**, **CSS**, and **JavaScript**. It uses public APIs to fetch real place data and focuses on core problem-solving concepts such as data fetching, filtering, sorting, local storage, and user interaction.

## 2. Problem Statement

When people travel to a new city, they often need to search across different websites to find attractions, restaurants, parks, entertainment places, and useful locations. This can be time-consuming and unorganized.

This project solves that problem by providing one simple interface where users can search for a city, view nearby attractions and places, filter and sort the results, save selected places into a personal trip list, and keep the trip list saved even after refreshing the page.

## 3. Main Features

* Search for attractions and places by city name
* Display a list of results with place name, category, address, and distance
* Add places to a personal trip list
* Remove places from the trip list
* Save the trip list persistently using LocalStorage
* Sort the trip list by name or category
* Filter search results by category
* Sort search results by distance
* Add custom places manually through a form
* Display place details in a modal window
* Show a Google Maps link for selected places
* Display selected places on an embedded Leaflet map
* Show toast notifications for user feedback
* Cache recent search results in LocalStorage
* Include basic unit tests for important functions

## 4. Technologies Used

* **HTML5**: Used for the structure and content of the web page
* **CSS3**: Used for styling, layout, cards, buttons, modal, and responsive design
* **JavaScript**: Used for application logic, API calls, filtering, sorting, and LocalStorage
* **Fetch API**: Used to request data from external APIs
* **LocalStorage**: Used to save the trip list and cached search results
* **Geoapify Places API**: Used to fetch attractions and places
* **OpenStreetMap / Nominatim**: Used for city geocoding
* **Leaflet.js**: Used to display an interactive embedded map
* **Wikipedia API**: Used to fetch additional descriptions and images when available

## 5. Project Structure

```text
Travel-Planner/
│
├── index.html          # Main page structure
├── style.css           # Styling and layout
├── app.js              # Main JavaScript logic
├── config.example.js   # Example API key configuration file
├── config.js           # Local API key file, not uploaded to GitHub
├── .gitignore          # Prevents sensitive files from being uploaded
└── README.md           # Project documentation and report
```

## 6. How to Run the Project

To run the project locally:

1. Download or clone the repository.
2. Open the project folder.
3. Copy `config.example.js`.
4. Rename the copied file to `config.js`.
5. Open `config.js`.
6. Replace the placeholder with your own Geoapify API key:

```javascript
const GEOAPIFY_API_KEY = "YOUR_GEOAPIFY_API_KEY_HERE";
```

7. Make sure `config.js` is in the same folder as `index.html` and `app.js`.
8. Open `index.html` in a browser or use Live Server in VS Code.
9. Type a city name such as `Krakow`, `Warsaw`, `Paris`, or `Istanbul`.
10. Click the **Search** button.

No backend server is required because the project runs completely in the browser.

## 7. API Key Information

The real API key is not included in the GitHub repository for security reasons. API keys are sensitive information and should not be shared publicly.

For this reason, the project uses a separate local file called `config.js`. This file stores the API key only on the user's own computer. The repository includes `config.example.js` to show the required format.

The `index.html` file loads `config.js` before `app.js`, so the application can access the API key when it runs locally.

## 8. How the Application Works

The application follows this process:

1. The user enters a city name in the search bar.
2. The application uses Nominatim to find the latitude and longitude of the city.
3. These coordinates are sent to the Geoapify Places API.
4. Geoapify returns nearby places such as attractions, restaurants, parks, and entertainment locations.
5. The results are displayed as cards in the Results section.
6. The user can filter results by category or sort them by distance.
7. The user can add selected places to the personal trip list.
8. The trip list is saved in LocalStorage.
9. The user can remove places or sort the trip list by name or category.
10. The user can open place details in a modal window with a map and location link.

## 9. Design Decisions

The interface was designed to be simple and easy to understand. The page is divided into two main sections: the **Results panel** and the **My Trip List panel**. This two-column layout helps users search and organize their travel plan at the same time.

The design uses a clean blue color palette, rounded cards, and simple buttons to make the application visually clear. Toast notifications were added to provide instant feedback when users add, remove, or duplicate a place.

A modal window was used for place details so that users can view more information without leaving the main page.

## 10. LocalStorage and Caching

LocalStorage is used in two important ways.

First, when a user adds a place to the trip list, the application saves it in LocalStorage. This means the list remains available even if the browser is refreshed or reopened.

Second, the application stores recent search results in LocalStorage. If the same city is searched again, the application can load cached results instead of sending a new API request. This improves performance and helps reduce unnecessary API usage.

## 11. Filtering and Sorting

The application includes filtering and sorting functions to improve usability.

Users can filter results by category: all categories, tourism and sights, food and restaurants, or entertainment. Users can also sort results by distance, so the nearest places appear first.

The personal trip list can be sorted by name or category. These features make the travel planning process more organized and efficient.

## 12. Optional Features Implemented

In addition to the mandatory requirements, the project includes several optional extensions:

* Custom place form with input validation
* Detailed modal view
* Google Maps location link
* Embedded Leaflet map
* Category filtering
* Distance sorting
* LocalStorage caching
* Toast notifications
* Basic unit tests

## 13. Testing

The project includes basic unit tests for important functions. The tests can be run in the browser console.

The tests check whether duplicate places are prevented in the trip list, whether the trip list can be sorted alphabetically by name, and whether places can be sorted by distance.

These tests help verify that the main logic of the application works correctly.

## 14. Challenges and Solutions

One challenge was working with external API data. Some places returned by the API may not include full information such as name, address, image, or description. To solve this, fallback values were added, such as “Unnamed place” or “No detailed address provided.”

Another challenge was protecting the API key. The solution was to use a separate `config.js` file for local use and provide a `config.example.js` file for the repository.

A third challenge was making the application useful and easy to understand. Filtering, sorting, modal details, map integration, and toast notifications were added to improve the user experience.

## 15. Conclusion

Travel Planner meets the main requirements of the Problem Solving project. It allows users to search for travel places using a public API, view a clear list of results, add and remove places from a personal trip list, and save the list persistently using LocalStorage.

The project also includes several optional improvements such as custom place creation, category filtering, distance sorting, search result caching, detailed place view, map integration, and basic unit tests.

Overall, the application demonstrates practical use of HTML, CSS, JavaScript, public APIs, LocalStorage, filtering, sorting, and frontend problem-solving techniques.
::: 
