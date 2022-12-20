import React, {Component} from 'react';
import './AddTask.css';

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0,10)

    state = {
        text: "",
        checked: false,
        date: this.minDate,
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleAddButton = () => {
        const {text, checked, date} = this.state;
        const add = this.props.add(text, date, checked);
        if(add) {
            this.setState({
                text: "",
                checked: false,
                date: this.minDate,
            })
        }
    }

    render() {

        let maxDate = this.minDate.slice(0,4) * 1 + 1
        maxDate = maxDate+"-12-31"

        return (
            <div className="form">
                <input type="text" placeholder="Add new task" value={this.state.text} onChange={this.handleText} />
                <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox} />
                <label htmlFor="important">Important</label> <br></br>
                <label htmlFor="date">Date limit: </label>
                <input type="date" value={this.state.date} min="2022-12-01" max={maxDate} onChange={this.handleDate} /> <br></br>
                <button onClick={this.handleAddButton}>Add</button>
                <hr></hr>
            </div>
        );
    }
}

export default AddTask