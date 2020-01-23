import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount(){
    const {id} = this.props.match.params
    axios.get(`http://localhost:3005/students/${id}`).then(results => {
      this.setState({studentInfo: results.data})
    })
  }

  render() {
    const {first_name, last_name, grade, email} = this.state.studentInfo
    return (
      <div className="box">
        <button onClick={() => this.props.history.goBack()}>Back</button>
        <h1>Student</h1>
        {
          <div>
            <h1>{first_name} {last_name}</h1>
            <h3>Grade: {grade}</h3>
            <h3>Email: {email}</h3>
          </div>
        }
      </div>
    )
  }
}