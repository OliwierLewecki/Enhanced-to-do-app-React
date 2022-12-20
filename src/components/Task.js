import React from 'react';

const Task = (props) => {

    const importantStyle = {
        color: "#e71d36"
    }

    const {text, date, id, active, important, finishDate} = props.task
    if(active){
        return (
            <div>
                <p>
                    <strong style={important ? importantStyle : null}>{text}</strong> - by <span>{date} </span>
                    <button onClick={() => props.change(id)}>Done</button>
                    <button onClick={() =>props.delete(id)}>X</button>
                </p>
            </div>
        );
    } else {

        const finishTime = new Date(finishDate).toLocaleDateString()

        return(
            <div>
                <p>
                    <strong >{text}</strong> <em>(had to be done until {date}) </em> <br />
                    - completed on <span>{finishTime} </span>
                    <button onClick={() =>props.delete(id)}>X</button>
                </p>
            </div>
        )
    }
}

export default Task;