import React from 'react';
import './TitleBar.css';

function TitleBar(props){
    return (
        <div className="row row-spacer">
            <div className="col-md-12 " style={{padding:0}}>
                <div className="titlebar-nav container-fluid">
                    <h1>dCC Library</h1>
                    <button className="new-book-button col-md-2" onClick={props.toggleForm}>New Book</button>
                </div>
            </div>
        </div>
    )
}

export default TitleBar;