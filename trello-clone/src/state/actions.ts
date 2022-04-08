export type Action = 
    | { type: 'ADD_LIST', payload: string } 
    | { type: 'ADD_TASK', payload: { listId: string, task: string } }

export const addTask = (listId: string, task: string): Action => ({
    type: 'ADD_TASK',
    payload: { listId, task }
})

export const addList = (list: string): Action => ({
    type: 'ADD_LIST',
    payload: list
})
