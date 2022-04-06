import React, { FC } from 'react';
import { AddNewItem } from './AddNewItem';
import { Column } from './Column';
import { useAppState } from './state/AppStateContext';
import { AppContainer } from './styles';

export const App:FC=()=>{
  const { lists } = useAppState();
  return (
    <AppContainer>
      {lists.map((list)=>(
        <Column key={list.id} id={list.id} text={list.text} />
      ))}
      <AddNewItem toggleButtonText='+Add another list' onAdd={console.log}/>
    </AppContainer>
  );
}
