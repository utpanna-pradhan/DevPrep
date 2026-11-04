1. What is Git?
Answer:

Git is a distributed version control system used to track changes in source code.

It allows developers to maintain code history, work on different features, collaborate with other developers, and restore previous versions when needed.

Example: If I accidentally break my React application, I can use Git to review previous changes and restore the working code.
2. What is the difference between Git and GitHub?
Answer:

Git is a version control tool that tracks code changes locally.

GitHub is an online platform that hosts Git repositories and helps developers collaborate.
Git	GitHub
Version control system	Online code hosting platform
Works locally	Works online
Tracks code changes	Stores repositories and supports collaboration
Uses commands like git commit	Supports pull requests and code reviews

Interview example: I use Git to track my code changes and GitHub to store my projects and collaborate with other developers.
3. What is a repository?
Answer:

A repository, or repo, is a place where a project's files and their version history are stored.

A Git repository contains the project files along with a hidden .git directory that stores Git's history and configuration.

There are two common types:
- Local repository: Stored on my computer.
- Remote repository: Hosted on platforms like GitHub.
git init


This command initializes a Git repository in the current directory.
4. What is a commit?
Answer:

A commit is a snapshot of the changes made to a project at a particular point in time.

It allows developers to track changes and return to earlier versions.
git add .
git commit -m "Add responsive navbar"


Here, git add stages the changes, and git commit saves them in Git's history.

A good commit message should clearly explain what was changed.
5. What is a branch?
Answer:

A branch is a separate line of development that allows developers to work on features or bug fixes without affecting the main code.

For example, I can create a branch to develop a new navbar.
git branch feature/navbar
git switch feature/navbar


Or create and switch to a branch in one command:
git switch -c feature/navbar


After completing the feature, I can merge it into the main branch.
6. What is a merge conflict?
Answer:

A merge conflict happens when Git cannot automatically combine changes from different branches.

This commonly happens when two developers modify the same lines of a file.

Git requires the developer to manually decide which changes should be kept.

Example: Two developers edit the same React component. One changes the button text, while the other changes the button structure. Git may need help combining those changes.
7. What is the difference between git pull and git fetch?
Answer:

Both commands retrieve changes from a remote repository, but they behave differently.
git fetch	git pull
Downloads remote changes	Downloads and integrates remote changes
Does not change the current branch's files	Updates the current branch
Safer for reviewing changes first	Useful for updating local work

git fetch origin


Downloads remote updates without integrating them into the current branch.
git pull origin main


Downloads and integrates changes from the remote main branch.

Interview tip: git pull is generally equivalent to git fetch followed by an integration step, usually a merge or rebase depending on configuration.
8. What is the difference between git merge and git rebase?
Answer:

Both commands integrate changes from one branch into another.
- git merge combines branches and preserves their existing history.
- git rebase moves or replays commits onto another base, creating a more linear history.
Example:
git switch main
git merge feature/navbar


This merges the feature branch into main.

With rebase:
git switch feature/navbar
git rebase main


This replays the feature branch's commits on top of the latest main.

Important: Avoid rebasing commits that other developers are already using because rebase rewrites commit history.
9. How do you resolve merge conflicts?
Answer:

First, I identify the conflicting files using Git.

Then I open the files and review the conflicting sections.

Git may show conflict markers like these:
<<<<<<< HEAD
<button>Submit</button>
=======
<button>Continue</button>
>>>>>>> feature/navbar


I decide which changes should be kept, remove the conflict markers, and test the code.

Finally, I stage the resolved files and complete the merge.
git add .
git commit -m "Resolve merge conflict"


If the conflict occurred during a rebase, I would continue with:
git rebase --continue


10. How do you push code to GitHub?
Answer:

I first create a local Git repository, stage my changes, and commit them.

Then I connect the local repository to GitHub and push the code.
git init
git add .
git commit -m "Initial commit"

git branch -M main
git remote add origin https://github.com/username/repository.git

git push -u origin main


Here:
- git remote add origin connects the local repository to GitHub.
- git push uploads committed changes.
- -u sets the upstream branch for future pushes.
For an existing project, I usually use:
git add .
git commit -m "Update website UI"
git push


11. What is a pull request?
Answer:

A pull request, or PR, is a request to merge changes from one branch into another.

It allows developers to review code, discuss changes, suggest improvements, and approve the code before merging.

Example: I create a feature/navbar branch, complete the navbar, push it to GitHub, and create a pull request to merge it into main.

A pull request helps maintain code quality and makes team collaboration easier.
12. What is .gitignore?
Answer:

.gitignore is a file that tells Git which files and directories should be ignored and not tracked.

It is commonly used to exclude dependencies, build files, environment variables, and temporary files.

Example:
node_modules/
.env
dist/
.next/
.DS_Store


For a React project:
- node_modules/: Dependencies.
- .env: Environment variables and potentially sensitive values.
- dist/: Generated build output.
- .next/: Next.js generated files.
Important: .gitignore does not automatically stop tracking files that Git already tracks. Those files must be removed from the index separately.