import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';


export default class App extends Component{

    maxId = 0;

    state = {
        todoData: [
            this.createItem('Make a Header section'),
            this.createItem('Make a Main content'),
            this.createItem('Make a Footer section')
        ],
        data: ''
    };

    
  createItem(label) {
        return {
        label,
        done: false,
        id: this.maxId++
        }
    };

    onMarkDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done};

            const newArray = [
                    ...todoData.slice(0, idx),
                    newItem,
                     ...todoData.slice(idx+1)
            ];

            return{
                todoData: newArray
            };
            
        });
    }

  

    deleteItem = (id) => {
       this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx+1)];

            return{
                todoData: newArray
            }
       });
    };

    addItem = (text) => {
        const newItem = this.createItem(text);
        this.setState(({todoData}) => {
            const newArray = [...todoData, newItem];
            return{
                todoData: newArray
            }
        });

        
    }


    searchItems(items, data) {
        if(data.length === 0) {
            return items;
        }

        return items.filter((el) => {
            return el.label.toLowerCase().indexOf(data.toLowerCase()) > -1;
        })
    }

    onSearchChange = (data) => {
        this.setState({
            data
        });
    }
  
    render() {

        const { todoData, data } = this.state;
        const visibleItems = this.searchItems(todoData, data);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return(
            <div className="app">
                <AppHeader
                    doneCount = {doneCount}  
                    todoCount = {todoCount}  
                />
                <SearchPanel
                    onSearchChange = {this.onSearchChange}
                />
                <TodoList 
                    todoData = {visibleItems}
                    onDeleted = {this.deleteItem}
                    onMarkDone = {this.onMarkDone}
                />
                <ItemAddForm onItemAdded = {this.addItem}/>
            </div>
        )
    }
};