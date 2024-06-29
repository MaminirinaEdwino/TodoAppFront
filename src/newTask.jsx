/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa6";

export default function NewTask({addNewTask}) {
    
    return <form id="NewTask" onSubmit={addNewTask} name="formulaire">
        <label htmlFor="addTaskSwitch" id="labelSwitch">Add Task</label>
        <input type="checkbox" name="" id="addTaskSwitch"/>
        <label htmlFor="taskName">Task Name</label>
        <input type="text" id="taskName" name="taskName" placeholder="task name" />
        <label htmlFor="taskPriority">Priority</label>
        <select name="taskPriority" id="taskPriority">
            <option value="1"> Low </option>
            <option value="2"> Middle </option>
            <option value="3"> High </option>
        </select>
        <label htmlFor="taskDescription">Task Description</label>
        <textarea name="taskDescription" id="taskDescription" placeholder="description"></textarea>
        <button className="addbtn"><FaPlus/> </button>
    </form>
}