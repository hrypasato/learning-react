import { TodosList } from "./TodosList";
import { AddTodo } from "./AddTodo";
import { useTodo } from "../hooks";



export const TodoApp = () => {
    const {todos, totalTodos, pendingTodos, handleCreateTodo, handleDeleteTodo, handleToggleTodo } = useTodo()
    return (
        <>
            <h1>TodoApp: { totalTodos }, <small>pendientes: {pendingTodos}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodosList 
                        todos={todos} 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <AddTodo onCreateTodo={ handleCreateTodo }/>
                </div>
            </div>

        </>
    );
}
