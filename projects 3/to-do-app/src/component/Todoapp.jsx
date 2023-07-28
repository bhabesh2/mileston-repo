  import React, { useState, useEffect } from 'react';

  export default function TodoInput() {
    const [Task, SetTask] = useState('');
    const [TaskList, SetTaskList] = useState([]);

    useEffect(() => {
      const existingTasks = JSON.parse(localStorage.getItem('All-tasks')) || [];
      SetTaskList(existingTasks);
    }, []);

    const handleTaskInput = (event) => {
      SetTask(event.target.value);
    };

    const handleAddTask = () => {
      if (Task.trim() !== '') {
        const wordCount = Task.trim().split(' ').length;
        if (wordCount <= 50) {
          const newTask = {
            Date: Date.now(),
            text: Task,
            status: 'Pending'
          };

          const existingTasks = JSON.parse(localStorage.getItem('All-tasks')) || [];
          const updatedTasks = [...existingTasks, newTask];

          localStorage.setItem('All-tasks', JSON.stringify(updatedTasks));

          SetTask('');
          document.dispatchEvent(new Event('tasksUpdated'));
          SetTaskList(updatedTasks);
        } else {
          alert('Please enter 50 words or fewer.');
        }
      }
    };

    const handleRemove = (taskDate) => {
      const updatedTaskList = TaskList.filter((task) => task.Date !== taskDate);
      localStorage.setItem('All-tasks', JSON.stringify(updatedTaskList));
      SetTaskList(updatedTaskList);
    };

    const handleUpdateStatus = (taskDate) => {
      const updatedTaskList = TaskList.map((task) => {
        if (task.Date === taskDate) {
          task.status = task.status === 'Pending' ? 'Completed' : 'Pending';
        }
        return task;
      });

      localStorage.setItem('All-tasks', JSON.stringify(updatedTaskList));
      SetTaskList(updatedTaskList);
    };

    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleAddTask();
      }
    };

    return (
      <section>
        <h1>Todo App</h1>
        <div className="container">
          <div className="inside-container">
            <input
              type="text"
              id="input"
              placeholder="Enter your task..."
              value={Task}
              onChange={handleTaskInput}
              onKeyPress={handleKeyPress}
            />
            <button id="add-btn" onClick={handleAddTask}>
              Add
            </button>
          </div>
        </div>

        <div className="task-grid">
          {TaskList.map((task, index) => (
            <div className="task-box" key={task.Date}>
              <div id="task">
                {index + 1}. {task.text}
              </div>
              <div id="status">Status: {task.status}</div>
              <div className="buttons">
                <button
                  className="update-btn"
                  onClick={() => handleUpdateStatus(task.Date)}
                >
                  Update Status
                </button>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(task.Date)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }