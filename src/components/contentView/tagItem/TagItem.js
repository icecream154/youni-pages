import React from "react";
import label from "../../../assets/tag@3x.png";
import location from "../../../assets/location@3x.png";
import './TagItem.css';

export default function TagItem(props) {

    let heightStyle = {
        'width': '13px',
        'height': '13px',
        'marginTop': '-5px',
        'marginLeft': '3px'
    };

    let tagUrl = '';
    if (props.tagType === 'label') {
        tagUrl = label;
    } else if (props.tagType === 'location') {
        tagUrl = location;
        heightStyle["width"] = '15px';
        heightStyle["height"] = '15px';
        heightStyle["marginTop"] = '-8px';
        heightStyle["marginLeft"] = '2px';
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