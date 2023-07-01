import React from 'react';
import './Sidebar.css'

const Sidebar = (props) => {
    return (
        <div className="card w-full mb-6 sidebar-part">
            <h2>Spent time on read : {props.timeCount} min</h2>  
        </div>
    );
};

export default Sidebar;