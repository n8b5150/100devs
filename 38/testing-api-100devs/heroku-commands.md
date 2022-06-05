heroku login -i
heroku create simple-rap-api
echo "web: node server.js" > Procfile
git init
git branch -m master main
heroku git:remote -a repository_name
git add . 
git commit -m "changes"
git push heroku main

-----------------
Install the Heroku CLI
Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login
Create a new Git repository
Initialize a git repository in a new or existing directory

$ cd my-project/
$ git init
$ heroku git:remote -a testing-api-100devs

Deploy your application
Commit your code to the repository and deploy it to Heroku using Git.
$ git add .
$ git commit -am "make it better"
$ git push heroku master

You can now change your main deploy branch from "master" to "main" for both manual and automatic deploys, please follow the instructions here.
Existing Git repository
For existing repositories, simply add the heroku remote

$ heroku git:remote -a testing-api-100devs