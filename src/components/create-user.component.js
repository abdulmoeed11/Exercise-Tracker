import React, { Component } from 'react'
import axios from 'axios';

export class CreateUser extends Component {

    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username :'',
        };
    }

    onChangeUsername(event){
        this.setState({
            username: event.target.value
        });
    }
    
    onSubmit(event){
        event.preventDefault();
        const user = {
            username: this.state.username,
        };
        console.log(user);
        axios.post("http://localhost:5000/users/add", user)
        .then(res=>console.log(res.data))
        .catch(err =>{
            alert("Identical User")
        });
        this.setState({
            username:''
        });
    }    

    render() {
        return (
            <div>
              <h3>Create New User</h3>
              <form onSubmit = {this.onSubmit}>
              <div className = "form-group">
                  <label>Username: </label>
                  <input
                  type = "text"
                  className = "form-control"
                  value = {this.state.username}
                  onChange ={this.onChangeUsername}
                  />
              </div>
              <div className="form-group" style = {{padding:20}}>
              <input type="submit" value="Create User" className="btn btn-primary" />
              </div>
              </form>
            </div>
        )
    }
}

export default CreateUser
