import {  useRef } from "react";
import { useDrop } from "react-dnd";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { addTask, moveList } from "./state/actions";
import { useAppState } from "./state/AppStateContext";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useItemDrag } from "./utils/useItemDrag";

type ColumnProps = {
    id: string;
    text: string;
};

export const Column = ({ text, id }:ColumnProps)=>{
    const { draggedItem, getTasksByListId, dispatch } = useAppState();
    const tasks = getTasksByListId(id);
    const ref = useRef<HTMLDivElement>(null);

    const [, drop] = useDrop({
        accept: 'COLUMN',
        hover(){
            if(!draggedItem){
                return;
            }
            if(draggedItem.type === 'COLUMN'){
                if(draggedItem.id === id){
                    return;
                }
                dispatch(moveList(draggedItem.id, id));
            }
        }
    });

    const { drag } = useItemDrag({ type: "COLUMN", id, text });

    drag(drop(ref));

    return (
        <ColumnContainer ref={ref}>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map((task)=>(
                <Card key={task.id} id={task.id} text={task.text} />
            ))}
            <AddNewItem
                toggleButtonText="+Add another task"
                onAdd={(text)=>dispatch(addTask(id, text))}
                dark
            />
        </ColumnContainer>
    )
};