import React, {Component} from 'react';
import {API_URL}   from './../../constants/main'
import {initFetching, checkResponse} from './../../helpers/main'
import AddChannel from './../add_channel/AddChannel'
import ChannelItem from './../channel_item/ChannelItem'

export default  class ChannelList  extends Component {

  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    initFetching.call(this, null, this.getList)
  }

  getList(){

    fetch(`${API_URL}/channel`,{
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(
      res => res.json(),
      err => err
    )
   .then (json => checkResponse.call(this, json, (channels) => this.setState({channels})))
  }

  addChannelToList(channel){
    let channels = this.state.channels || [];
    channels.unshift(channel)
    this.setState({channels})
  }

  render() {
    let {channels, fetching} = this.state;

    return [
     fetching && <div className='col-12 text-center mt-5'>Fetching...</div>,
      channels && channels.map(channel => <ChannelItem channel={channel}/> ),
      < AddChannel addChannelToList={(channel) => this.addChannelToList(channel)}/>
    ]
  }
}
