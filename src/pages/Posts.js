import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Services } from '../http-services';
import DataBase from '../data/db';
import { ListPost } from '../Listpost/index'

export class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allComment: [],
            commment: null
        };
    }
    Comment = (select) => {
        this.setState({
            comment: select
        });
    };

    render() {
        return (
            <div>

                <ListPost allComment={this.state.allComment} comment={this.state.comment} Comment={this.Comment} />

                <Link className="btn btn-primary" to="/">
                    Retour vers la home
            </Link>
            </div>
        );
    }
    componentDidMount() {
        Services.getAllComment().then((results) => {
            this.setState({
                allComment: results.data
            });
        });
    }
}
