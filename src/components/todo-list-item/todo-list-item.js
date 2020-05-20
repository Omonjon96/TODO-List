import React, {Component} from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component {
    render() {

        const {label, onDeleted, onMarkDone, done} = this.props;

        let doneClass = "todo-list-item";

        if(done) {
            doneClass+= ' done';
        }
        

        return(
            <span className={`${doneClass} d-flex justify-content-between align-items-center`}>
                <span 
                    className="todo-list-item-label"
                    
                >
                    {label}
                </span>
                <div className="buttons">
                    <button 
                        className="btn btn-primary 
                        btn-xs mr-2"
                        onClick = {onMarkDone}
                    >
                        done
                    </button>
                    <button 
                        className="btn btn-danger btn-xs"
                        onClick = {onDeleted}
                    >
                            delete
                    </button>
                </div>
            </span>
        )
    }
};

