import { DragItem } from "../DragItem"

export type Action = 
    | { type: 'ADD_LIST', payload: string } 
    | { type: 'ADD_TASK', payload: { listId: string, task: string } }
    | { type: 'MOVE_LIST', payload: { draggedId:string, hoverId:string } }
    | { type: 'SET_DRAGGED_ITEM', payload: DragItem | null }

export const addTask = (listId: string, task: string): Action => ({
    type: 'ADD_TASK',
    payload: { listId, task }
})

export const addList = (list: string): Action => ({
    type: 'ADD_LIST',
    payload: list
})

export const moveList = (draggedId: string, hoverId: string): Action => ({
    type: 'MOVE_LIST',
    payload: { draggedId, hoverId }
})

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
    type: 'SET_DRAGGED_ITEM',
    payload: draggedItem
})
