import React, { FC } from 'react';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';
import { Column } from './Column';
import { AppContainer } from './styles';

export const App:FC=()=>{
  return (
    <AppContainer>
      <Column text='To Do'>
        <Card text='Write a blog post' />
      </Column>
      <Column text='In Progress'>
        <Card text='Learn Typescript' />
      </Column>
      <Column text='Done'>
        <Card text='Learn React' />
      </Column>
      <AddNewItem toggleButtonText='+Add another list' onAdd={console.log}/>
    </AppContainer>
  );
}
