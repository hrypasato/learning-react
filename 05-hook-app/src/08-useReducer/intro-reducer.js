const initialState = [{
    id:1,
    todo:'Recolectar la piedra del Alma',
    done:false,
}];


const todoReducer = ( state = initialState, action = {} )  => {
    if( action.type === '[TODO] add todo'){
        return [ ...state, action.payload ];
    }
    return state;
}

let todos = todoReducer();

console.log('Lista de todos');
console.log(todos);



const newTodo = {
    id:2,
    todo:'Recolectar la piedra del poder',
    done:false
};

const addTodoAction = {
    type:'[TODO] add todo',
    payload: newTodo,
}

console.log('Agregando nuevo todos');

todos = todoReducer(todos, addTodoAction);

console.log('Lista de todos actualizada');
console.log(todos);