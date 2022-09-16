import React from "react";
import label from "../../../assets/tag@3x.png";
import location from "../../../assets/location@3x.png";
import './TagItem.css';

export default function TagItem(props) {

    let heightStyle = {
        'marginTop': '-3.4px',
        'marginLeft': '3.05px'
    };

    let tagUrl = '';
    if (props.tagType === 'label') {
        tagUrl = label;
    } else if (props.tagType === 'location') {
        tagUrl = location;
        heightStyle["marginTop"] = '-5.25px';
        heightStyle["marginLeft"] = '3px';
    }

    return (
        <div className="tagItem">
            <div className="tagItem--icon_container">
                <img
                    className="tagItem--icon"
                    style={heightStyle}
                    src={tagUrl}
                    alt=""
                />
            </div>
            <span className="tagItem-text">{props.tagText}</span>
        </div>
    )
}