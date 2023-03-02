import { useEffect, useState } from "react";
import TableElement from "./TableElement";
import Spinner from "./Spinner";

export default function Table() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/todos`)
            .then((res) => res.json())
            .then((data) => {
                setTodos(Object.values(data));
            });
    }, []);


    const toggleTodoStatus = (id) => {
        setTodos((state) =>
            state.map((todo) =>
                todo._id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        );
    };


    return (
        <main className="main">
            <section className="todo-list-container">
                <h1>Todo List</h1>

                <div className="add-btn-container">
                    <button className="btn">+ Add new Todo</button>
                </div>

                <div className="table-wrapper">
                    {/* <Spinner/> */}

                    <table className="table">
                        <thead>
                            <tr>
                                <th className="table-header-task">Task</th>
                                <th className="table-header-status">Status</th>
                                <th className="table-header-action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableElement todos={todos} toggleTodoStatus={toggleTodoStatus} />
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}
