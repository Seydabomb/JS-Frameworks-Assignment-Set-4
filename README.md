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

## Section 26

## Section 27
