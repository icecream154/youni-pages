import React from "react";
import './Liker.css'

export default function Liker(props) {
    if (!props.likerAvatarList || !props.totalLikers ||
        props.likerAvatarList.length === 0 || props.totalLikers === 0) {
        return <div></div>
    }

    function getLikeText(totalLikers) {
        if (totalLikers <= 3) {
            return "喜欢";
        } else {
            return "+ " + (totalLikers - 3) + " 喜欢";
        }
    }

    return (
        <div className="liker">
            <div className="liker--avatar_list_container">
                {props.likerAvatarList.map((obj, idx) => {
                    return <img
                        key={idx}
                        alt=""
                        src={obj}
                        className={"liker--avatar_list_" + idx}
                    />
                })}
            </div>
            <div className="liker--text_container">
                <span className="liker--text">{getLikeText(props.totalLikers)}</span>
            </div>
        </div>
    )
}