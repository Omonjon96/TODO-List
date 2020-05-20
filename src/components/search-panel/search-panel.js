import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends  Component {

    state = {
        data: ''
    }

    onTermChange = (e) => {
        const { onSearchChange = () => {}} = this.props;
        this.setState({
            data: e.target.value
        })

        onSearchChange(this.state.data);

    };

    render() {

        return(
            <div className="search-panel mt-3">
                <input 
                    type="text" 
                    placeholder="Search items" 
                    className="form-control"
                    onChange = {this.onTermChange}
                />
            </div>
        )
    }
    
};

