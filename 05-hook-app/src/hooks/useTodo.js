import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = (initialState = []) => {
        
    const [ todos, dispatch] = useReducer( todoReducer, initialState, init);
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])
    
    
    const handleCreateTodo = ({ todo }) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }
    
    const handleDeleteTodo = ( { todo }) => {
        const action = {
            type:'[TODO] Remove Todo',
            payload:todo
        }
        dispatch(action);
    }
    
    const handleToggleTodo = ( { todo } ) => {
        const action = {
            type:'[TODO] Toggle Todo',
            payload:todo,
        }
        dispatch(action);
    }


    return {
        todos,
        totalTodos: todos.length,
        pendingTodos: todos.filter( todo=> !todo.done ).length,
        handleCreateTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}