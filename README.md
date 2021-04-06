# Akrod Movie Database App

Find your next movie or create your watchlist with this App.

- This application will help users find their next movie to watch by showing helpful information
- Resource needed for the project is movie api, examples include Imdb, MovieDB etc.

## How to run locally?

Use the proper node version. node@15.6.0

```
$ nvm use
```

1. Run **Backend**

```
$ cd backend-sls/
$ yarn
```

- Isntall Dynamodb locally as in-memory database, and start it

```
$ yarn db:init
$ yarn db:start
```

- Run AWS Lambda on your local.

```
$ sls offline
```

2. Run **Frontend**

```
$ cd frontend-re
$ yarn
$ yarn start
```

## What was done?

1. All User Stories.
2. Bonus features

- Search movie by title
- Create watchlist with different name.

3. Technical Bonus

- Global State management tool: Redux-saga.
- Used AWS Lambda, DynamoDB.
- Used serverless framework to manage AWS Lambda and DynamoDB.

## What could be done?

1. Unit test for frontend, Integration test for backend - (Lack of time).
2. Docker & Pipeline for production deployment - (Didn't feel it to be required because this is a test project).
3. UI Fully Responsive - (lack of time).

## User Stories

- [ ] User can see a paginated list of popular movies ordered by release date (from latest to oldest). Movie details can be only **title**, **duration**, **rating** and **release date** (only for ordering purposes).

  - See sample prototype:
    <img src="./movie_app_sketch.png" alt="Welcome screen" />

- [ ] User can add any movie to the default watchlist

## Bonus features

- [ ] User can search a movie by its title :fire: or user can type in an autocomplete any word of a movie (e.g. "Die Hard", "Live and let Die") :fire::fire::fire:
- [ ] User can create different watchlists (with different titles)

## Technical requirements

- There should be both frontend (React or React Native) and backend code (preferably NodeJS, C# or Python)
- Feel free to use an in-memory database to store the watchlist

## Technical bonus

- Use of structured state management libs in the frontend (like Redux, Zustand, XState etc.)
- If can use any AWS service (like AWS Lambda, DynamoDB, Aurora etc), it would be awesome
- If you manage to write tests
- If you manage to automate the creation of AWS resources (with tools like terraform, CDK, serverless framework, etc.), then you are a **HERO**

## How to proceed

- For those applying for a React Native position, the frontend should be built using React Native. By the same token, for those applying for a ReactJS position, the frontend should be built using react.
- Just fork this repo and send us a pull request :wink:

## Useful links and resources

- [MovieDB Api](https://developers.themoviedb.org/3)

## Example projects

[Movie Browser App by Nataliia Pylypenko](https://api-cinema-10d15.firebaseapp.com/)
