import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import ToDoForm from './todoForm'
import ToDoList from './todoList'

export default class ToDo extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <ToDoForm />
                <ToDoList />
            </div>
        )
    }
}