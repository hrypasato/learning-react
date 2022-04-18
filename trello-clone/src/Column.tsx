import {  useRef } from "react";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { addTask } from "./state/actions";
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

    const { drag } = useItemDrag({ type: "COLUMN", id, text });

    drag(ref);

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