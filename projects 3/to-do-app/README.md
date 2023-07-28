### Todo App

Todo App is a simple and efficient task management application built with React. It allows users to add, update, and remove tasks, as well as track their completion status. The app utilizes local storage to persist tasks, ensuring that the data remains accessible even after closing the application.

## Features

- Add a Task: Users can enter their tasks and add them to the TaskTracker app. The app validates that each task contains 50 words or fewer before adding it to the list.

- Update Task Status: Users can easily update the status of a task between "Pending" and "Completed." This feature helps users keep track of their progress and accomplishments.

- Remove Task: Users can remove a task from the list if it is no longer needed or has been completed.

## How to Use

1. Add a Task:
   - Enter your task in the input field.
   - Click the "Add" button or press Enter to add the task to the list.
   - Tasks are automatically saved to local storage for persistence.

2. Update Task Status:
   - Each task in the list displays its status, which is initially set to "Pending."
   - To update the status of a task, click the "Update Status" button beside the task.
   - The status will toggle between "Pending" and "Completed" with each click.

3. Remove a Task:
   - To remove a task from the list, click the "Remove" button beside the task.
   - The task will be removed from the list and local storage.

## Data Persistence

The TaskTracker app utilizes local storage to store and retrieve tasks, ensuring that the data remains accessible even after closing the application.

## Limitations

- The TaskTracker app uses local storage, which has a limited storage capacity in web browsers (usually around 5-10 MB). If the local storage limit is exceeded, the app may not function as expected.
- The app does not offer user authentication or account creation. It is designed for personal use or within a limited group of users sharing the same device/browser.


