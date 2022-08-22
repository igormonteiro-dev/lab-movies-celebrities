![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Movies and celebrities

## Introduction

As a summary of our CRUD journey, we will work on creating the app for movies and celebrities.
The goal of this exercise is to practice _CRUD_ on at least one of the models (building the full CRUD for the _movie model_ is mandatory) and _documents relationships_ (between the two models).
So let's see what are some user stories related to the _celebrity_ model:

- The user should be able to:

**1. Add new celebrities**\
**2. See the list of celebrities**

In the second part of the application, when you already have a couple of celebrities in your database, let's figure out what we will do regarding _movie_ model. As we said, we will have a full CRUD on this model, which means the user can:

**3. Add new movies**\
**4. See the list of all movies**\
**5. See the details of a specific movie, including its cast of celebrities**\
**6. Update existing movies**\
**7. Delete movies**

Now that we know the overview of the app, let's proceed to creating it.

_Hint_: Although this lab might seem as overly guided, it is the first time you are creating a full-stack app on your own so we wanted to make sure all steps are covered and you can come back to this lab's solution as a reference at any point later.

Let's go!

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

- Create Pull Request so your TAs can check up your work.

## Instructions

### Iteration 0 | Initialize the project

After forking and cloning the project, you will have to add an `.env` file and add in it the following line:

```
PORT=3000
```

And you have to install all the dependencies:

```bash
$ npm install
```

Run the app and you are ready to start 🚀

## Iteration #1: Setting the folders/files structure

In order to have everything organized, we will first create a couple of folders and files.

- **Routes**: In our `routes` folder, let's create separate files for our **celebrities** and **movies**. The naming is up to you, but we will use the following: `routes/celebrities.routes.js` and `routes/movies.routes.js`. You can add below starter router code to both of them and remember to link these two new files to either `app.js` or `routes/index.js` so your server has access to them.

```js
// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

module.exports = router;
```

Obviously, naming is the matter of preference so we used very descriptive names for routes.

## Iteration #2: The `Celebrity` model

Our first step is to create the `Celebrity` model and add some celebrities in our database.

The `Celebrity` model should have:

- `name` - String (like _Tom Cruise, Beyonce, Daffy Duck,_ etc.)
- `occupation` - String (what the celebrity does, why they are famous. For example _actor, singer, comedian_, or you can put _unknown_ if your celebrity is someone like Kim Kardashian)
- `catchPhrase` - String (every celebrity needs a good catch phrase. Well maybe not all of them have one in real life, but all of _our_ celebrities will have a catch phrase. This can be pretty much anything.)

Go ahead and locate the `Celebrity.model.js` model file in the `models` folder. Using schema, create the `Celebrity` model with the above mentioned properties. _Don't forget to export the model._ 2. In the `Celebrity.model.js` model file:

## Iteration #3: Adding New Celebrities

Now that we have defined _Celebrity_ model, let's make it so the user can **add new celebrities to the database**.

| Route           | HTTP Verb | Description                                                                                   |
| --------------- | --------- | --------------------------------------------------------------------------------------------- |
| `/celebrities/` | POST      | Send the data from the form to this route to create the celebrity and save it to the database |

### Steps we will follow in this iteration:

1. Create the `/celebrities` POST route in `routes/celebrities.routes.js`.
2. In that route we have to **create** an instance of the `Celebrity` model (don't forget, we should get all the info from the form through _req.body_)
   - If there is an error, return `400 BAD REQUEST` with an error message
   - If there is no error, return `201 CREATED` with the created celebrity
3. In Postman:
   - Test test test!

## Iteration #4: Listing Our Celebrities

Now, when we've got some celebrities in the database, we can start working with them in our Express app. Let's **send a list of all the celebrities**.

Here's the route we will be using:

| Route          | HTTP Verb | Description            |
| -------------- | --------- | ---------------------- |
| `/celebrities` | GET       | Return all celebrities |

### Steps we will follow in this iteration:

1. Create the `/celebrities` GET route in `routes/celebrities.routes.js`.
2. In the route:
   - Use `find()` method on the `Celebrity` model to retrieve all the celebrities
   - If everything is okay, send the array of celebrities as JSON
   - If there's an error, catch it and send a `500 INTERNAL SERVER ERROR` response
3. In Postman:
   - Test test test!

**Celebrities - Done! At least for now.** 😉

## Iteration #5: The `movie` model

Now when we've started all this good work, let's keep up strong and build all the routes for the _Movie_ model. But first, let's create the _Movie_ model.

The `Movie` model should have:

- `title` - String
- `genre` - String
- `plot` - String
- `cast` - Array of object IDs referencing the _Celebrity_ model (basically, the array of celebrities' IDs)

### Steps we will follow in this iteration:

Go back and review what you did to create the `Celebrity` model. You'll need to create a file for the model, and in that file, you'll need to create a schema for the model as well. Don't forget, you have to export the `Movie` model.

## Iteration #6: Adding New Movies

Okay, the next step is to make it so the user can **add new movies to the database**.

| Route      | HTTP Verb | Description                                                                  |
| ---------- | --------- | ---------------------------------------------------------------------------- |
| `/movies/` | POST      | Send form data to this route to create the movie and save it to the database |

### Steps we will follow in this iteration:

Review how you did this for the `Celebrity` model.

1. Create a new route for creating a movie
2. In your post route, create an object with all the info you just received from the form. (Remember, `req.body`)
3. Use this object to create a new movie in the database and return the created movie in a JSON response
4. In Postman, test it!
   - For fields like `cast`, remember that the information that should be transmitted to the server is the `_id` for the cast member, because we will store this identifier as the value of the `cast` field in the database.

## Iteration #7: Listing Our Movies

Now that we've got some movies in the database, let's make a route which responds with a list of all our movies.

Here's the route we will be using:

| Route     | HTTP Verb | Description       |
| --------- | --------- | ----------------- |
| `/movies` | GET       | Return all movies |

### Steps we will follow in this iteration:

Go back and review how you did this for the `celebrities`. You'll need to:

1. Create a GET route that will return all the movies
2. Use a database query to retrieve all the movies from your database and send the array as JSON
3. In postman, test it!

## Iteration #8: The Movie Details Endpoint

We've got a list of all movies that includes each of their _titles_, but what if we want more details?

From our `GET /movies` tests, users of our API will receive movie ids.
Let's add another route at `GET /movies/:id` to get all the information about that movie.

Here's the route we will be using:

| Route         | HTTP Verb | Description             |
| ------------- | --------- | ----------------------- |
| `/movies/:id` | GET       | Return a specific movie |

### Steps we will follow in this iteration:

1. We need the `/:id` part to change dynamically.
   - Create a new request in Postman that calls `/movies/:id`.
   - Notice how we get an `id` variable that we can fill.
   - Replace `:id` with a real movie id
2. Create the `/movies/:id` GET route in `routes/movies.routes.js`.
3. In the route:
   - On the `Movie` model call `findOne()` or `findById()` method to retrieve the details of a specific movie by its `id`
     - Don't forget you have `cast` as the array of celebrity `id`s, and we need to `populate()` in order to get the full data about the celebrities 🎯
   - If everything is fine (_.then()_), send a JSON response which includes the variable with the movie's details
   - If there's an error, catch it.
4. Run your postman request.

## Iteration #9: Deleting Movies

Now that we have a list of movies endpoint, a single movie endpoint, and a create movies endpoint, we only have 2 features left to implement: _editing_ movies and _deleting_ them. Since deleting is simpler, let's start with that.

| Route          | HTTP Verb | Description             |
| -------------- | --------- | ----------------------- |
| `/movies/:id/` | DELETE    | Delete a specific movie |

### Steps we will follow in this iteration:

1. Create the `/movies/:id/` DELETE route in your `routes/movies.routes.js` file
2. In the route:
   - Use the `Movie` model's `findByIdAndRemove()` method to delete the specific movie by its `id`.
   - If everything is good (`.then()`), send a `204 NO CONTENT` response
   - If there's an error, catch it

## Iteration #10: Editing Movies

Final piece of our CRUD puzzle: **editing existing movies**.

Here are the routes we will be using:

| Route          | HTTP Verb | Description                                                    |
| -------------- | --------- | -------------------------------------------------------------- |
| `/movies/:id/` | PATCH     | Send movie data to this route to update the movie with that id |

### Steps we will follow in this iteration:

1. Create `/movies/:id` POST route in the `routes/movies.routes.js` file
2. In that route:
   - Create an object with movie's model keys. Its values should come from the submitted data (`req.body`)
   - Now you can apply different methods - `update()` or `findByIdAndUpdate()` to find the movie and send the updated values to the database.
   - If there is no error, return a 200 OK with the updated movie.

And we are done! Now all `movies` CRUD features are implemented with a relationship between `movies` and `celebrities`. As a **BONUS**, feel free to also add details, edit and delete for the `celebrities`.

## Bonus for Celebrity model

- See the details of a specific celebrity
- Update existing celebrities
- Delete celebrities

That's it! 🏆

**Happy Coding!** :heart:
