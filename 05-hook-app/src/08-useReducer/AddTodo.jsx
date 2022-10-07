import { useState } from "react"
import { useForm } from "../hooks"
export const AddTodo = ({ onCreateTodo }) => {

    const { formState, onInputChange, onResetForm } = useForm({ description:'' });
    
    const { description } = formState;

    const onSubmit = ( event ) => {
        event.preventDefault();

        if( description.length <= 1 ) return;

        const newTodo = {
            id:new Date().getTime(),
            description,
            done:false,
        }
        onCreateTodo({ todo:newTodo });
        onResetForm();
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-3"
            >Agregar
            </button>
        </form>
    )
}
