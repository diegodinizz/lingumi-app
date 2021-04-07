## Lingumi Take Home Task

https://github.com/diegodinizz/lingumi-app

The Lingumi Take Home Task is an application built with React, Redux, and Styled Components. The aim of this task is to create a web or mobile app for retrieving and displaying video tutorial information to a user. The solution should:

- Upon load, the app downloads a list of available video tutorials, by performing a GET request to the following URL (which returns JSON data).
- The app has a way for the user to refresh the video tutorials to view the most up to date information.
- The app allows the user to perform the following actions: `getTopRatedTutorialsForTags` and `searchForTutorials`.
- The methods `getTopRatedTutorialsForTags` and `searchForTutorials` are covered with tests (for example - unit or integration tests).
- The user interface should be clear and easily navigable for the end-user (don't worry about making it look beautiful).

<img width="1680" alt="Screenshot 2021-04-07 at 01 25 17" src="https://user-images.githubusercontent.com/47988806/113794190-e5436600-9741-11eb-8777-77e592427e6e.png">

## Installation

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

#### Installation:

`npm install`

#### Start Server:

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Framework used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), [Redux](https://github.com/reduxjs/react-redux), and [Styled Components](https://github.com/styled-components/styled-components). 

## API Reference

GET - [Lingumi JSON data](https://lingumi-take-home-test-server.herokuapp.com/videoTutorials).

## Reflection

This was a week-long project built as a short technical exercise. Project goal included is to create a React application that will consume data from the JSON file provided.

Originally I wanted to build an application that allowed users to retrieve and displaying video tutorial information to a user. I started this process by using the `create-react-app` boilerplate, then adding `Redux` to manage the state flow in the App, and `styled-components` to write actual CSS code to style the components.

One of the main challenges I ran into was to pull the information from the JSON file. This leads me to spend a few hours planning a better way to display the information coming from the JSON file. Due to project time constraints, I had to decide a simplified design to demonstrate a better visualisation of the pieces of information that I had available.

At the end of the day, the technologies implemented in this project are React, Redux and Styled Components. I choose to use as fewer frameworks as possible to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration with more time, I would like to implement a more detail visualisation of the videos, type safety method and unit tests.
