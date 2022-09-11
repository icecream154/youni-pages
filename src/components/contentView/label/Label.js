import React from "react";
import TagItem from "../tagItem/TagItem";
import './Label.css';

export default function Label(props) {

    const tags = props.labelList.map((tagText, idx) => {
        return <TagItem key={idx} tagType="label" tagText={tagText} />
    })

    return (
        <div className="label">
            {tags}
        </div>
    )
}