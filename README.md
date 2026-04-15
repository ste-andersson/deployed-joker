# Security in the BackEnd

## A. Scenario

> And you should display a picture of a dog! Or a Cat! That would make the joke even funnier!

The addition of a login —plus authorship of jokes— has made the Joker app super popular at the office, and now the requests for new features won't stop.

> What about a leader-board? Most jokes posted and best average score?

Every deployment of the app takes hours due to testing, configuration and just general busy work involved in making sure all the updates get uploaded properly to saltCloud.io

It's well time to automate the whole thing.

## B. What you will be working on

It's time to move into the land of CI/CD, continuous integration and continuous deployment. We will setup automatic testing and deployment of both the front-end and the back-end using github actions. 

Our front-end will be deployed on GitHub pages and back-end with Fly.io

## C. A word of warning!

We are deploying today, that means that you now have to be mindful about any potential secrets you risk having exposed. Anything deployed to the front-end **WILL** be exposed, and any secret file deployed to GitHub have the potential to be visible to the world. A classic misstake is to include your database connection string.

Make sure that everything that is a secret is only referenced as an environmental variable in the code itself, and if you have any secret files that they are added in the .gitignore

NEVER hard code in secrets in your code! Even if you remove it later, malicious parties can always look back at your commit history to see your code at at previous version.

In Spring, we can include configurations inside a secret file without needing to commit it via the line `spring.config.import: optional:secret.yml` in your application.yml  
[In Vite](https://vitejs.dev/guide/env-and-mode.html#env-files), you can user `.env.local` files to make sure it's not included

## D. Lab instructions

Make sure you have both your Front-End and your Back-End in the same project on GitHub. Each in ther own folder.

### Step 1

We will start by deploying our front-end to GitHub Pages.

1. Add a base test suite to your React page that can run via `vitest`
  - No need for anything fancy, just something that will run and verify that the page loads
1. Create a GitHub Action worlflow file that will test, build and deploy you app to GitHub Pages
  - Make sure the action only runs when front-end folder is updated, in the main branch
  - If you have anything in a `.env.local` file, you are going to have to add that as a secret on GitHub
1. Branch out, add a feature, do a Pull Request and make sure that the pipeline works!

Remember that you are no longer on httl://localhost/ anymore! So any app (e.g your Authentication Provider) that references it needs to be updated!

### Step 2

Now it's time to deploy the Back-End. This involves a lot more steps, so buckle up!

1. Setup a basic test suit to make sure that you app works before build
1. Head over to https://fly.io/ and make an account. They have a free tier which is great for deploying basic projects with
1. Create [a basic Dockerfile](https://spring.io/guides/topicals/spring-boot-docker/#_a_basic_dockerfile) that can run as a build command to generate a containerized version of our app for deployed
1. Create a GitHub Action workflow file that will test, build and deploy you app to fly.io! 
  - Make sure the action only runs when front-end folder is updated, in the main branch
  - This will involve the steps:
    - Adding Java
    - Building your Java project
    - Building your docker container
    - Adding flyctl
    - And finally, deploying to fly.io
1. Branch out, add a feature, do a Pull Request and make sure that the pipeline works!

Remember that anything local (e.g. a local PostgreSQL sever) will be unreachable, and that you will have to find alternatives for productions deployment! An in-memory database if fine for a demo like this.

## E. Extra
If you have extra time, just keep on adding features! Maybe [add caching](https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows) to your build process to speed things up?

## F. Useful information

- You cannot guess these things, be liberal when it comes to reading guides!

---

Good luck and have fun!
