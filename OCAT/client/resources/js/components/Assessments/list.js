import React from "react";

//import axios from "axios";
//import API from '../api';

export class AssessmentList extends React.Component {
  state = {
    persons: [],
  };

  /*componentDidMount() {
    axios.get(`http://localhost:8000/assessment/new`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }
  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    );
  };
render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  )
};
render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Person ID:
          <input type="text" name="id" onChange={this.handleChange} />
        </label>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

handleSubmit = event => {
    event.preventDefault();

    API.delete(`users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
}
handleSubmit = async event => {
  event.preventDefault();

  //
  const response = await API.delete(`users/${this.state.id}`);

  console.log(response);
  console.log(response.data);
  */
}

export default AssessmentList;
