import React from "react";
import './At.css';

export default function At(props) {

    const ats = props.atList.map((atName, idx) => {
        return <span className="at--name" key={idx}>{'@' + atName}</span>
    })

    return (
        <div className="at">
            {ats}
        </div>
    )
}