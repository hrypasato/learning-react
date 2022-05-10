export type ColumDragItem = {
    id: string,
    text: string,
    type: 'COLUMN'
}

export type CardDragItem = {
    id: string,
    columnId: string,
    text: string,
    type: 'CARD'
}


export type DragItem = ColumDragItem | CardDragItem;