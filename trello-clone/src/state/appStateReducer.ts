import { nanoid } from "nanoid"
import { DragItem } from "../DragItem"
import { findItemIndexById, moveItem } from "../utils/arrayUtils"
import { Action } from "./actions"

export type Task = {
    id: string,
    text: string,
}

export type List = {
    id: string,
    text: string,
    tasks: Task[]
}

export type AppState = {
    lists: List[]
    draggedItem: DragItem | null
}

export const appStateReducer = (draft: AppState, action: Action): AppState | void => {
    switch (action.type) {
        case 'ADD_LIST':{
                draft.lists.push({
                    id: nanoid(),
                    text: action.payload,
                    tasks: []
                })
                break
            }
        case 'ADD_TASK': {
                const { task, listId } = action.payload
                const targetListIndex = findItemIndexById(draft.lists, listId)
                draft.lists[targetListIndex].tasks.push({
                    id: nanoid(),
                    text:task
                })
                break
            }
        case 'MOVE_LIST': {
                const { draggedId, hoverId } = action.payload
                const dragIndex = findItemIndexById(draft.lists, draggedId)
                const hoverIndex = findItemIndexById(draft.lists, hoverId)
                draft.lists = moveItem(draft.lists, dragIndex, hoverIndex)
                break
            }
        case 'SET_DRAGGED_ITEM': {
                draft.draggedItem = action.payload
                break
            }
        case 'MOVE_TASK': {
            const { draggedItemId, hoveredItemId, sourceColumnId, targetColumnId } = action.payload
            const sourceColumnIndex = findItemIndexById(draft.lists, sourceColumnId)
            const targetColumnIndex = findItemIndexById(draft.lists, targetColumnId)
            const sourceTaskIndex = findItemIndexById(draft.lists[sourceColumnIndex].tasks, draggedItemId)
            const targetTaskIndex = hoveredItemId ? findItemIndexById(draft.lists[targetColumnIndex].tasks, hoveredItemId) : 0
            const item = draft.lists[sourceColumnIndex].tasks[sourceTaskIndex]
            //remove item from source column
            draft.lists[sourceColumnIndex].tasks.splice(sourceTaskIndex, 1)
            //add item to target column
            draft.lists[targetColumnIndex].tasks.splice(targetTaskIndex, 0, item)
            break
        }
        

        default:{
            break
        }
    }
}