# TriviaWizard v4

Live Link: [TriviaWizard v4](https://trivia-wizard-four.herokuapp.com/)

TriviaWizard is a single-page application powered with the React.js frontend framework and Node.js/Express/MongoDB for backend data management. TriviaWizard is a trivia app that provides fun questions to answer from an assortment of different categories.
This project makes use of the Qriusity API which provides thousands of trivia questions and answers, so check out the project and try out some trivia!

## Implementation Details

### Authorization

The Passport.js library is used to handle authentication. The Local strategy
is used to receive a username and password for verification. The authentication
also creates permissions, so users cannot access certain pages without being logged in.

### Model Structure

There are two models -- Users and HighScores. The two models are loosely coupled
since I decided the creation of a new high score did not have to strictly be associated
with the User model -- because this app uses Passport.js to ensure unique usernames, a username
helps ensure unique high score data.

User Model
```javascript
let userSchema = new mongoose.Schema({
  username: String,
  password: String,
  highscore: {
    type: Number,
    default: 0
  }
});
```

HighScore Model
```javascript
let highscoreSchema = new mongoose.Schema({
  score: Number,
  username: String,
  owner: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HighScore"
    }
  }
});
```

### Create React App + Node.js

The frontend of this project was deployed using the Create React App module provided
by Facebook. Because Create React App is built with its own frontend server, a proxy was used
in the client-side package.json to route requests to the server.

### Other Key Technologies Used

- Qriusity API: Free API that provides thousands of trivia questions and answers
- Redux Persist: Library to help redux store maintain state after page refresh
- Redux Thunk: Library to assist with asynchronous actions communicating with reducers
- Axios: Library for making asynchronous requests to backend API
- jQuery: Javascript library for manipulating the DOM easier

Thank you for reading!
