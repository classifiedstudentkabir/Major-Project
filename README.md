# Major-Project
Building a Major Project with a team on a Civil Contractor website.

---

### How to clone this into your device editor app 
- i am using Visual studio and cloning using terminal 

1.  **Open VS Code and the Terminal:**
    * Close any open files.
    * Click the "View" menu, then select "Terminal."

2.  **Clone the Repository:**
    * In the terminal, run the following command to download the project:
        ```bash
        git clone https://github.com/classifiedstudentkabir/Major-Project.git
        ```

3.  **Navigate to the Project Folder:**
    * Use the `cd` command to enter the project directory:
        ```bash
        cd Major-Project
        ```
    * type ``` ls ``` to check where is your clone is saved

4.  **Check Your Branch:**
    * Run `git status` to see your current branch. You should be on the `main` branch.
        ```bash
        git status
        ```

---

### Staying Up-to-Date with the Team

If a teammate has uploaded new files after you cloned the repository, you need to pull the latest changes to your local machine.

1.  **Pull the Latest Changes:**
    * From within the `Major-Project` directory, run this command to download and merge new files from the remote repository:
        ```bash
        git pull origin main
        ```

---

### Uploading Your Changes

When you have made changes (like adding a new folder or file) and want to upload them to the shared GitHub repository, you will use these commands.

1.  **Add Your Changes:**
    * Stage all your new or modified files for a commit:
        ```bash
        git add .
        ```

2.  **Commit Your Changes:**
    * Create a new commit with a descriptive message:
        ```bash
        git commit -m "Your descriptive message here"
        ```

3.  **Push Your Changes:**
    * Upload your committed changes to the `main` branch on GitHub:
        ```bash
        git push origin main
        ```

---

### Set Your Git Identity (First-Time Setup)

> ⚠️ You only need to do this the very first time you use Git on your computer.

If you haven't configured your Git identity before, run these commands in your terminal. This tells Git who you are for all future commits.

```bash
git config --global user.name "Your Full Name"
git config --global user.email "your_github_email@example.com"
```
