import React, { Component } from 'react';

import './item-add-form.css';


export default class ItemAddForm extends Component {

    state = {
        data: ''
    };

    onInputChange = (e) => {
        this.setState({
            data: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.data);  
        this.setState({
            data: ''
        })
    }

    render() {
        return(
            <form className="item-add-form d-flex"
                onSubmit = {this.onSubmit}
            >
                <input 
                    type="text" 
                    placeholder="Add Item" 
                    className="form-control"
                    onChange = {this.onInputChange}
                    value = {this.state.data}
                />
                <button className="btn btn-outline-secondary">Add Item</button>
            </form>
        )
    }
};