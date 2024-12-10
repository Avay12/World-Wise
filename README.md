# WorldWise

WorldWise is a modern React application that provides users with detailed information about countries around the world. It leverages RESTful APIs to fetch real-time data and offers an engaging, user-friendly interface to explore geographical, political, and economic information about any country.

## Features

- **Search and Filter Countries:** Search for a specific country by name or filter by region.
- **Country Details:** View comprehensive information about a selected country, including:
  - Population
  - Capital
  - Region
  - Subregion
  - Languages
  - Currencies
  - Timezones
- **Interactive Map:** Visualize the country's location on an interactive map.
- **Dark Mode:** Toggle between light and dark themes for better usability.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend:** React, React Router, Context API
- **Styling:** CSS/SCSS (or Tailwind CSS if applicable)
- **API:** REST Countries API (https://restcountries.com)
- **Map Integration:** Leaflet.js or Google Maps API (if interactive maps are implemented)
- **State Management:** Context API or Redux (depending on complexity)

## Installation

Follow these steps to set up and run the WorldWise application locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/worldwise.git
   cd worldwise
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000/`.

## Folder Structure

```plaintext
worldwise/
├── public/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── context/        # Context API for state management
│   ├── hooks/         # Custom Hooks
│   ├── App.js          # Root component
│   └── index.js        # Application entry point
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

## Available Scripts

- `npm start`: Runs the app in development mode.
- `npm build`: Builds the app for production.
- `npm test`: Launches the test runner.
- `npm lint`: Runs linting checks.

## API Integration

WorldWise uses the [REST Countries API](https://restcountries.com) to fetch real-time country data. Ensure the API is accessible and update any endpoints in the application if the API structure changes.

Example endpoint:

```plaintext
https://restcountries.com/v3.1/all
```

## Acknowledgements

- [REST Countries API](https://restcountries.com) for providing country data.
- Open-source libraries and tools used in the project.
- The React community for guidance and support.

---

Happy Exploring with WorldWise! 🌍
