import React from 'react'

import PageHeader from '../template/pageHeader'
import ToDoForm from './todoForm'
import ToDoList from './todoList'

export default props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <ToDoForm />
        <ToDoList />
    </div>
)