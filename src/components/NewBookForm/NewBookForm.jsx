import React from 'react';
import './NewBookForm.css';

class NewBookForm extends React.Component {
    constructor(props) {
        super()
        this.state = {title: "", author: ""}
        this.props = props
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addBook(this.state)
        this.props.toggleForm()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
                    <input name="title" value={this.state.title} onChange={this.handleChange}/>
                </label>
                <label>
                    Author:
                    <input name="author" value={this.state.author} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default NewBookForm;