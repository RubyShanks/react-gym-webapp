# Swoley Fit
**Check out the live site**: [https://s-swolify-webapp.netlify.app/](https://s-swolify-webapp.netlify.app/)

Swoley Fit is a fitness application built with React and Tailwind CSS. It allows users to generate and track workout routines based on their fitness goals and muscle groups.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Utils](#utils)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/swoley-fit.git
    ```
2. Navigate to the project directory:
    ```sh
    cd swoley-fit
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Components

### `App.jsx`

The main component that initializes the state and renders the `Hero`, `Generator`, and `Workout` components.

### `Generator.jsx`

Handles the generation of workout routines based on user input. It uses the `useState` hook to manage state and includes functions like `toggleModal` and `updateMuscles`.

### `ExcerciseCard.jsx`

Displays individual exercise details including name, type, muscle groups, and description. It uses the `useState` hook to manage the number of sets completed.

### `Workout.jsx`

Renders a list of `ExcerciseCard` components based on the generated workout routine.

## Utils

### `functions.js`

Contains utility functions such as `generateWorkout`, `shuffleArray`, and `exercisesFlattener`.

## Contributing

1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature-branch
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
