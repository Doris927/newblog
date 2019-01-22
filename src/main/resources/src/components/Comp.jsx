import React from 'react'

export default class Comp extends React.Component{
    render(){
        return <div> this is comp {this.state.age}</div>
    }

    constructor(props){
        super();
        this.state={
            age: 18
        };
    }


}