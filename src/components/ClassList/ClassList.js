import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount(){
    const {id} = this.props.match.params
    axios.get(`http://localhost:3005/students?class=${id}`).then(results => {
      this.setState({students: results.data})
    })
  }

  render() {
    console.log(this.state.students)
    const list = this.state.students.map(element => {
      return (
        <Link key={element.id} to={`/student/${element.id}`} ><h3>{element.first_name} {element.last_name}</h3></Link>
      )
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.id}</h1>
        <h2>ClassList:</h2>
        {list}

      </div>
    )
  }
}