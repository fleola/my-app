import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
    state={
        count: this.props.initialCount
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState((state)=>{
               return {count: state.count +this.props.incrementAmount}
            })  
        },this.props.incrementInterval)
    }
    render(){
        return <CounterDisplay count={this.state.count}/>
    }
}
Counter.defaultProps={
    initialCount: 0,
    incrementInterval: 1000,
    incrementAmount: 1,
}