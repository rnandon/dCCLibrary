import React from 'react';
import './FooterBar.css';

function FooterBar(props){
    return (
        <div className="row row-spacer">
            <div className="col-md-12" style={{padding:0}}>
                <div className="footerbar-nav">
                    <h4>2021 dCC Library. Built in React by RND.</h4>
                </div>
            </div>
        </div>
    )
}

export default FooterBar;