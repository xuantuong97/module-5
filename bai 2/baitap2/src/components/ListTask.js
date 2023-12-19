import React, { useState } from 'react';

const TaskList = () => {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState('');

    const handleChange = (event) => {
        setTask(event.target.value);
    }

    const handleAddTask = () => {
        if (task.trim() !== "") {
            setTaskList([...taskList, task]);
            setTask("");
        } else {
            alert("Not allow empty");
        }
    }

    return (
        <div>
            <h1>Task List</h1>
            <input type="text" value={task} onChange={handleChange} />
            <button onClick={handleAddTask}>Add</button>
            <table>
                <tbody>
                <tr>
                    <td>STT</td>
                    <td>Task</td>
                </tr>
                {taskList.map((task, index) => (
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{task}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );
};

export default TaskList;
