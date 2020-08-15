import React from 'react'

export default props => (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='navbar-brand'>
            <a href="/" className='navbar-brand'>
                <i className='fa fa-calendar-check-o'></i> ToDoApp
            </a>
        </div>

        <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
                <a className='nav-link navbar-brand' href="#/todos">Tarefas</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link navbar-brand' href="#/about">Sobre</a>
            </li>
        </ul>
    </nav>
)