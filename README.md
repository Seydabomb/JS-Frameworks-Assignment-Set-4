# JS-Frameworks-Assignment-Set-4

Sections 20-27

## Section 20

- Shopping cart with Redux where you send the cart to the backend and retrieve data from the backend
  - CORS is blocking my access so I cannot actually make this app work.
    - Could try with Heroku but you have to include your credit card information.

## Section 21

"Events" app

### Part 1

- Working on routing using the routing dom
  - Creating our own error screen if a page DNE
  - Creating dynamic path using ":"
  - Using Relative Pathing
  - Using Index Routes
  - Creating a Root layout with children routes

### Part 2

- Working on routing using the routing dom
  - Pulling from the backend (in 'Events.js' and 'App.js')
  - Creating Error.js page to handle errors
  - Outputting errors on the event form
  - Adding a newsletter signup
    - using the "useFetcher" function
    - using 'await'
    - using 'defer' for data fetching
    - using loaders and actions

## Section 22

In this "Events" app, I am working on

- Authentication
  - Implementing user authentication.
    - Using query parameters to change the link. Refer to 'AuthForm.js' in Components.
    - Someone not logged-in cannot try to reach routes they cannot access.
  - Adding authentication persistence
    - The UI is updated based on existence of a token.
  - Auto-logout functionality.

## Section 23

Very Basic Website just to practice deploying it

- I deployed it using netlify as a host
- Deployment Process
  - Lazy Loading

## Section 24

"React Events" website

### TanStack Query

- useQuery() to find data from the backend
- useMutation(): Sends request to the backend whenever we tell it to, so when we mention mutate we are sending the info to the backend
- isError, error to handle errors which are default props.
- Deleting events, adding events, editing events, and updating events.
  - Optimistic updating: updating instantly. You do this with onMutate() property which is triggered as soon as mutate() is triggered.

## Section 25

Using Next.js for a fullstack app.

### first-next-js-app

Learning the basics of Next.js

### foodies

The "foodies" app where you can browse meals and join the foodies community.

- image slideshow
- main-header is using "Link" and "Image"
- 'use client' in image-slideshow.js & nav-link.js
- 'usePathName()' from next.js to grab the active path from the url in nav-link.js
- using SQlite3 as a database which created the "meals.db" file and we accessed that information in Lib -> 'meals.js'
- loading page
  - Or alternatively, using 'Suspense' from react which lets you manage states and show fallback content 'fetching meals...'
- Including a "choose file" for an image picker in the meals -> share -> page.js
  - Including an image preview to the picker
- using slugify and xss packages in lib -> meals.js
- adding metadata to update the title of the website (browser tab name)
  - Refer to meals -> page.js & meals -> \[mealSlug\] -> page.js

### nextjs-essentials-pages-router

A very basic, white-screen app for practicing.

- creating pages
  - creating a dynamic page
- navigating between the pages

### nextjs-meetups

React Meetups app

- pre-rendering data using getStaticProps() in the pages -> index.js
- using MONGO DB for the backend database
  - connecting to it using api -> new-meetup.js & and .env file
- adding in metadata like a title and description to the different pages

## Section 26

Working on animations

### CSS Transitions and Animations

- Adjusting the modal
- Adjusting the "View Details" arrow

### Framer Motion

Playground with a cube where a user can input an X, Y, and Rotate to initiate a custom animation

### Framer Motion In-Depth

Same project as CSS Transitions & CSS Animations except using Framer Motion

## Section 27
