


export default function TableElement({ 
    todos, 
    toggleTodoStatus,
}) {

    return todos.map((todo) => {
        return (
            <tr key={todo._id} className={todo.isCompleted ? "todo is-completed" : "todo"}>
                <td>{todo.text}</td>
                <td>{todo.isCompleted ? "Complete" : "Not Completed"}</td>
                <td className="todo-action">
                    <button className="btn todo-btn" onClick={() => toggleTodoStatus(todo._id)}>Change status</button>
                </td>
            </tr>
        );
    });
}
