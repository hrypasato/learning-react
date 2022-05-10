import {  useRef } from "react";
import { useDrop } from "react-dnd";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { addTask, moveList, moveTask, setDraggedItem } from "./state/actions";
import { useAppState } from "./state/AppStateContext";
import { ColumnContainer, ColumnTitle } from "./styles";
import { isHidden } from "./utils/isHidden";
import { useItemDrag } from "./utils/useItemDrag";

type ColumnProps = {
    id: string;
    text: string;
    isPreview?: boolean;
};

export const Column = ({ text, id, isPreview }:ColumnProps)=>{
    const { draggedItem, getTasksByListId, dispatch } = useAppState();
    const tasks = getTasksByListId(id);
    const ref = useRef<HTMLDivElement>(null);

    const [, drop] = useDrop({
        accept: ['COLUMN', 'CARD'],
        hover(){
            if(!draggedItem){
                return;
            }
            if(draggedItem.type === 'COLUMN'){
                if(draggedItem.id === id){
                    return;
                }
                dispatch(moveList(draggedItem.id, id));
            }else{
                if(draggedItem.columnId === id){
                    return;
                }
                if(tasks.length){
                    return;
                }
                dispatch(moveTask(draggedItem.id, null, draggedItem.columnId, id));
                dispatch(setDraggedItem({ ...draggedItem, columnId: id }));
            }
        }
    });

    const { drag } = useItemDrag({ type: "COLUMN", id, text });

    drag(drop(ref));

    return (
        <ColumnContainer 
            isPreview={isHidden(draggedItem, 'COLUMN', id, isPreview)}
            ref={ref} 
            isHidden={isHidden(draggedItem, "COLUMN", id)}
            >
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map((task)=>(
                <Card key={task.id} columnId={id} id={task.id} text={task.text} />
            ))}
            <AddNewItem
                toggleButtonText="+Add another task"
                onAdd={(text)=>dispatch(addTask(id, text))}
                dark
            />
        </ColumnContainer>
    )
};