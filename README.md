# Mini-Project: Facespace!

## Goal

A brand new social media website called Facespace!

---

## Setup

This repository contains a frontend and a backend folder. This means that each folder is a complete environment (`package.json`, `/node_modules`). They are completely independent. You cannot reference code from one environment in the other environment.

Generally speaking, the frontend will query the backend via calls to the server endpoints.

---

### The Frontend

1. Open a terminal in VS Code
2. Type `cd frontend`
3. Type `yarn install`

Use `yarn dev:frontend` to start the frontend dev environment.

### The Backend

1. Open _another_ terminal in VS Code
2. Type `cd backend`
3. Type `yarn install`

Use `yarn dev:backend` to start the backend dev environment.

---

## File Structure

```
├── _screenshots
├── backend
    ├── data
    |   └── users.js (where our data is stored)
    ├── node_modules (where all external dependencies are saved)
    |   ├── ...
    |   └── ...
    ├── handlers.js (functions that are called by the endpoints)
    ├── package.json (where we keep a record of the app setup)
    ├── server.js
    ├── utils.js (utility functions used by the BE)
    └── yarn.lock ("locks" the dependency versions)
├── frontend
    ├── public
    ├── src
    ├── node_modules (where all external dependencies are saved)
    |   ├── ...
    |   └── ...
    ├── package.json (where we keep a record of the app setup)
    └── yarn.lock ("locks" the dependency versions)
├── .gitignore
├── .prettierrc
└── README.md (this file)
```

---

## About the Data

There is a file `backend/data/users.js` that contains an array of `user`s. Each user looks like this.

```js
{
  id: '1008',
  name: 'Fletcher',
  friends: ['1006', '1007', '1009'], // array of the ids of user's friends
  avatarUrl: '/images/profile-pics/000003.jpg',
},
```

---

## The Mini-Project

Even though this is a **workshop**, it is described as a _mini-project_ because it does not come with all of the guidance and step-by-step help that is usually provided in a workshop.

We do provide you with a lot of stuff from the start but it will require becoming familiar with the code.

---

## The Backend (server)

The server is mostly done. It is functional and will reliably provide your FE with the `req`uested data as long as the the requests are made in a way that the server expects.

For more information on querying the server and what responses from the server will look like, read the [API_doc](backend/API_doc.md).

---

## The Design

The design is provided in the screenshots below and the theme colors and basic variables are added as CSS variables in `frontend/src/components/GlobalStyles.js`

```css
:root {
  --primary-color: #cc5500;
  --accent-bg-color: rgba(204, 85, 0, 0.1);
  --page-horizontal-padding: 20px;
  --header-height: 50px;
  --max-content-width: 1200px;
  --heading-font-family: "Teko", sans-serif;
}
```

You can use these variables in any of your styled-components by calling `var()` and passing it the name of the variable, like so:

```css
h1 {
  color: var(--primary-color);
}
```

## The Frontend

The entire build of the FE is up to you. 

## Screenshots

### Homepage

<img src="./_screenshots/homepage_3.png" />

---

### The Profile Page

<img src="./_screenshots/profile_3.png" />

The friends on the profile page should:
- Be clickable and take you to each person's profile.
- Have their pictures loaded correctly. 
    - **HINT: The `Promise.all()` method might help here (you can find it in exercise 4 of the promises workshop).**

---

### The Sign in page

<img src="./_screenshots/signin_2.png" />

The sign in page needs to:
- Show an error if the username is not valid.
- Store the logged in user in `sessionStorage` if the login was successful.
- Redirect to the homepage if the login was successful.

---

### No Sign in for you!

If someone is already signed in, they should not be able to see the sign in page. Prevent this from happening by redirecting them to the home page if they try to navigate to the sign in page.

Make use of the information in `sessionStorage` to detect if the user is signed in or not.

> **HINT: You'll want to make your state persistant! 😉**

---

### A link to the sign in page in the header

We should have a link to the sign in page in the header.

<img src="./_screenshots/signin_button.png" />

When the user is signed in, the "sign in" link should be replaced by a greeting and the user's name.

<img src="./_screenshots/signin_signedin.png" />

While you're in the header, it would be good to turn the title into a link to the homepage.

---

### Faces on the homepage

- Faces on the homepage should link to that person's profile page.
- Let's also add a little UX tweak on hover. Give the image some sort of effect on hover.

<img src="./_screenshots/home-links.gif" />

---

### My Friends!

When a user is signed in and looking at the homepage, it would be great if there were some visual indication as to who their friends are in the grid of faces. My example is a ribbon on the image, but feel free to do whatever you like.

<img src="./_screenshots/homepage_4.png" />

---

### Stretch Goals

Here are some other features that you could add to the app.

- Pick a theme! Switch it up with characters from a show, book, or game! 
- The orange is kind of gross.
- Users can sign out.
- User can add/remove friends. _This should update the friends array of both users. Being friends is reciprocal._
- If a user adds a friend, they are not automatically added. The other user needs to accept this first. _It would be useful to create a new array of `pendingFriends` in the user object._
- A sign up page... that does exactly what you would expect.
- What else can you think of?
