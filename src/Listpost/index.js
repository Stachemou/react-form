import React from 'react';
import { Form } from './form'

export const ListPost = props => {
    const { allComment, Comment } = props;
    const CommentInfoList = () => (props.allComment.map)
        ? <>
            {
                Object.keys(props.allComment).map(
                    (content, index) => <li key={index} className="list-group-item">
                        {content}:{JSON.stringify(props.allComment[content])}
                    </li>
                )
            }
        </>
        : <p></p>;
    const addPost = () => {
        return <Form/>
    }
    return <div>
        <div className="input-group my-3">
            <button
                onClick={addPost}
                className="btn btn-outline-secondary"
                type="button">Ajout d'un post</button>
        </div>
        <ul>
            <CommentInfoList />
        </ul>
    </div>
};

