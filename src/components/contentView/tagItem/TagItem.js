import React from "react";
import './TagItem.css';

export default function TagItem(props) {

    const labelUrl = 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngab363745bfb24c2e18253896296d72134802aae41cc30f078cb6c7715bd06af0';
    const locationUrl = 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng81a36c4a882e6294eebe53ae36adcd9177aa1056adb8f8eca412e43131c03eb6';

    let heightStyle = {
        'width': '12px',
        'height': '12px',
        'marginTop': '-5px',
        'marginLeft': '3.5px'
    };

    let tagUrl = '';
    if (props.tagType === 'label') {
        tagUrl = labelUrl;
    } else if (props.tagType === 'location') {
        tagUrl = locationUrl;
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
                />
            </div>
            <span className="tagItem-text">{props.tagText}</span>
        </div>
    )
}