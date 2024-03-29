export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between mt-6">
        <span 
          className={ `align-self-center ${ todo.done ? 'text-decoration-line-through' : '' }` }
          onClick={ () => onToggleTodo( { todo } ) }
        >{ todo.description }</span>
        <button 
          className="btn btn-danger"
          onClick={ () => onDeleteTodo({ todo }) }
        >Borrar
        </button>
    </li>
  )
}
