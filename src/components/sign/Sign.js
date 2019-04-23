import React, {Component} from 'react';
import {API_URL}   from './../../constants/main'
import {initFetching, checkResponse} from './../../helpers/main'

export default  class Sign  extends Component {

  constructor(){
    super()
    this.state = {}
  }

  checkPassword(){  

    /123$/.test(this.refs.password.value)
      ? this.signIn()
      : this.setState({
          error: 'Incorrect password',
          fetching: false
        })
  }

  signIn(){

    fetch(`${API_URL}/user`,{
      method: 'POST',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),       
      body: JSON.stringify({
        nickname: this.refs.nickname.value
      })
    })
    .then(
      res => res.json(),
      err => err
    )
   .then (json => checkResponse.call(this, json, this.props.userActions.setUser))

  }

  render() {

    return (
      <form 
        onSubmit={(e) => initFetching.call(this, e, this.checkPassword)} 
        className='mx-auto mt-5 col-12 col-md-6 col-lg-3'>
        <div className="form-group" >
          <h2>Sign in</h2>
        </div>
        <div className="form-group" >
          <label>Enter nickname</label>
          <input 
            type="text" 
            className="form-control" 
            ref="nickname"
            placeholder="Enter nickname" 
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control" 
            ref="password" 
             placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
        <div 
          className={`text-center ${this.state.error ? 'text-danger' : 'text-gray'}`}
        >
          {this.state.error || this.state.message}
        </div>
      </form>
    )
  }
}
