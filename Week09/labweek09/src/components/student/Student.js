import React, { Component } from 'react'

export default class Student extends Component {

  constructor() {
    super()
    this.state = {
        fnm:"Berniel"
    }
  }  
  render() {
    return (
      <h4 align="center">{this.props.college}</h4>
    )
  }
}
