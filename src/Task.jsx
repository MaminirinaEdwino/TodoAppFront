import { BiTrash } from "react-icons/bi";
import { FcOk } from "react-icons/fc";
import { ImHourGlass } from "react-icons/im";

/* eslint-disable react/prop-types */
export default function Task({ task, setTask }) {
    const recupTask = async () => {
        await fetch("http://127.0.0.1:8000/api/tasks")
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setTask(response["hydra:member"]);
            });
    };
    const id = task.id;
    const deleteTask = async () => {
        await fetch("http://127.0.0.1:8000/api/tasks/" + id, {
            method: "DELETE"
        })
        recupTask();
    };

    // const pacthTask = async (e) => {
    //     e.preventDefault();
    //     let form = new FormData(e.target);
    //     let body = {
    //         name: form.get("taskName"),
    //         description: form.get("taskDescription"),
    //         state: false,
    //     };
    //     await fetch("http://127.0.0.1:8000/api/tasks/" + id, {
    //         method: "PATCH",
    //         headers: {
    //             "content-type": "application/merge-patch+json",
    //         },
    //         body: JSON.stringify(body),
    //     })
    //         .then((res) => res.json())
    //         .then((res) => {
    //             console.log(res);
    //         });
    //     document.getElementById("taskName").value = "";
    //     document.getElementById("taskDescription").value = "";
    //     recupTask();
    // };

    const pacthTaskState = async () => {
        await fetch("http://127.0.0.1:8000/api/tasks/" + id, {
            method: "PATCH",
            headers: {
                "content-type": "application/merge-patch+json",
            },
            body: JSON.stringify({
                state: true,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            });
        recupTask();
    };

    return (
        <article>
            <div className={"name " + (task.priority == 1  ? "couleur1" : '') + (task.priority == 2 ? "couleur2" : '') + (task.priority == 3 ? "couleur3" : '')}>{task.name}
                <div className="btn">
                    {task.state == true ? <FcOk title="The task is done" /> : <ImHourGlass title="On going task" />}
                    {task.state == false && <button title="Finish the task" onClick={pacthTaskState}>
                        <FcOk />
                    </button>}
                    <button title="Delete task" onClick={deleteTask}>
                        <BiTrash />
                    </button>
                    {/* <button onClick={pacthTask}>edit</button> */}
                </div>
            </div>
            <div className="description">{task.description}</div>
            
        </article>
    );
}
