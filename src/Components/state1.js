import React from "react";
export default class State1 extends React.Component
{
    constructor(props) 
    {
      super(props);
      this.state = {date: new Date()};
    }
  
    render() {
      return (
        <div>
        <center>
          <h1>Welcome to My First React App</h1>
          <h2>To Day React{this.state.date.toLocaleTimeString()}.</h2>
        </center>
        </div>
      );
    }
  }