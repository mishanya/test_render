import React, {Component} from 'react';
import  './style.scss'
import {API_URL}   from './../../constants/main'
import {initFetching, checkResponse} from './../../helpers/main'

export default  class AddChannel  extends Component {

  constructor(){
    super()
    this.state = {
      open: null
    }
  }

  addChannel( ){

    let name = this.refs.name.value.replace(/ /g, '');
 
    fetch(`${API_URL}/channel/${name}`,{
      method: 'POST',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(
      res => res.json(),
      err => err
    )
    .then(json => checkResponse.call(this, json, this.props.addChannelToList))
    .then(() => !this.state.error && this.setState({open: false, message: null}))
  
  }

  render() {
    return (
      <div className='add-channel position-fixed'>
        {this.state.open 
          && <form 
              className='add-channel__form bg-white d-block d-md-inline-flex align-middle position-relative' 
              onSubmit={(e) => initFetching.call(this, e, this.addChannel)}

            >
                <input 
                  type='text' 
                  required 
                  ref='name' 
                  className="add-channel__input  form-control d-block d-md-inline-block rounded-0"  
                  placeholder="Enter VK group slug or id"
                />
                <input 
                  type='submit' 
                  className='add-channel__button btn btn-primary d-block d-md-inline-block rounded-0' 
                  value='Add'
                />
                <small className={`d-block w-100  add-channel__error position-absolute ${this.state.error && 'text-danger'}`}>{this.state.error || this.state.message}</small>
            </form>
        }    
        <div className='add-channel__wrapper d-inline-block align-middle' >
          <div 
            className={`add-channel__trigger p-3 text-dark ${this.state.open && 'rotate-45-d'} ${!this.state.open && this.state.open !== null && 'rotate-0-d'}`} 
            onClick={() => this.setState({open: !this.state.open})}
          >
            +
          </div>
        </div>
  
      </div>
    )
  }
}