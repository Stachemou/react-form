import React from 'react';
import {Services} from "./http-services";

export class Application extends React.Component {
    constructor(props){
        super(props);
        this.state={getAllCountries:[]};
        console.log(props.children)

    }
    componentDidMount(){
        Services.getAllCountries().then((results)=>{
            console.table(results.data);
            this.setState({
                allCountries: results.data
            })
        })
        console.log('componentDidmount');
    }
    render(){
        const Children = ()=> this.props.children;
        return <div>{JSON.stringify(this.state)}<Children/></div>;
    }
}