import React from 'react';

export const ListPost = props => {
   const CommentInfoList = () => (props.allComment)
        ? <>
            {
                Object.keys(props.allComment).map(
                    (content ,index) => <li key={index} className="list-group-item">
                        {content}:{JSON.stringify(props.allComment[content])}
                    </li>
                )
            }
        </>
        : null;
        return <div>
            <ul>
                <CommentInfoList/>
            </ul>
        </div>
};

