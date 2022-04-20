import { DragItem } from "../DragItem";

//add helper method to calculate if we need to hide the drag item
export const isHidden = (
    draggedItem: DragItem | null, 
    itemType: string,
    id: string,
    isPreview?: boolean
): boolean => {
    return Boolean(
        !isPreview &&
        draggedItem && 
        draggedItem.type === itemType && 
        draggedItem.id === id
    )

}