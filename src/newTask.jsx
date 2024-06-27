/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa6";

export default function NewTask({addNewTask}) {
    
    return <form id="NewTask" onSubmit={addNewTask} name="formulaire">
        <h2>Add Task</h2>
        <label htmlFor="taskName">Task Name</label>
        <input type="text" id="taskName" name="taskName" placeholder="task name"/>
        <label htmlFor="taskDescription">Task Description</label>
        <textarea name="taskDescription" id="taskDescription" placeholder="description"></textarea>
        <button className="addbtn"><FaPlus/> </button>
    </form>
}