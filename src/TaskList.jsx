import Task from "./Task";

/* eslint-disable react/prop-types */
export default function TaskList({ task, setTask }) {
    const handleToggle = (id, id1, id2) => { 
        let div = document.getElementById(id)
        let div1 = document.getElementById(id1)
        let div2 = document.getElementById(id2)
        if (div.style.display == 'none') {
            div.style.display = 'block'
            div1.style.display = 'none'
            div2.style.display = 'none'
        }
    };
    return (
        <div className="taskList">
            <div className="divButton">
                <h2 onClick={() => {
                    handleToggle("ongoing", "finished", "all")
                }}>Ongoing</h2>
                <h2 onClick={() => {
                    handleToggle("finished", "ongoing", "all")
                }}>Finished</h2>
                <h2 onClick={() => {
                    handleToggle("all", "finished", "ongoing")
                }}>All</h2>
            </div>
            <div id="ongoing" style={{ display: 'block' }}>
                {task.map(
                    (taske, i) =>
                        taske.state == false && (
                            <Task key={i} task={taske} setTask={setTask} />
                        )
                )}
            </div>
            
            <div id="finished" style={{ display: 'none' }}>
                {task.map(
                    (taske, i) =>
                        taske.state == true && (
                            <Task key={i} task={taske} setTask={setTask} />
                        )
                )}
            </div>
            
            <div id="all" style={{ display: 'none' }}>
                {task.map((taske, i) => (
                    <Task key={i} task={taske} setTask={setTask} />
                ))}
            </div>
        </div>
    );
}
