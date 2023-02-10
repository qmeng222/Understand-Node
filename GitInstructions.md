## Adding a local repository to GitHub using Git

1. Create a new repository on GitHub.com:
   To avoid errors, do not initialize the new repository with README, license, or gitignore files. You can add these files after your project has been pushed to GitHub.
2. Open Terminal, and change the current working directory to your local project.
3. Use the init command to initialize the local directory as a Git repository.
   By default, the initial branch is called main:
   ```
   git init
   ```
   or you can set the name of the default branch using -b:
   ```
   git init -b master
   ```
4. Stage and commit the files:
   ```
   git add .
   git commit -m "first commit"
   ```
5. copy the remote repository URL (at the top of your repository on GitHub.com's Quick Setup page)
6. in Terminal, add the URL for the remote repository where your local repository will be pushed:
   ```
   git remote add origin <REMOTE_URL>   # sets the new remote
   git remote -v                        # verifies the new remote URL
   ```
7. push the changes in your local repository to GitHub.com:
   ```
   git push -u origin master
   ```
