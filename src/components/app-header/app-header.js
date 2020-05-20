import React from 'react';

import './app-header.css';

const AppHeader = ({doneCount, todoCount}) => {
    return(
        <div className="app-header d-flex justify-conten-between align-items-center">
            <h3>ToDo Application</h3>
            <span className="result ml-3">ToDo {doneCount}, Done {todoCount}</span>
        </div>
    )
};

export default AppHeader