import { FC } from "react";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { addTask } from "./state/actions";
import { useAppState } from "./state/AppStateContext";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
    id: string;
    text: string;
};

export const Column = ({ text, id }:ColumnProps)=>{
    const { getTasksByListId, dispatch } = useAppState();
    const tasks = getTasksByListId(id);

    return (
        <ColumnContainer>
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