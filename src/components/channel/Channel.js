import React, {Component} from 'react';
import {API_URL}   from './../../constants/main';
import {initFetching, checkResponse} from './../../helpers/main';
import Image from './../image/Image';

export default class Channel extends Component {

  constructor(){
    super()
    this.state = {
      offset: 0
    }
  }

  componentDidMount(){
     initFetching.call(this, null, this.getFeed)
  }

  getFeed(){
    fetch(`${API_URL}/channel/${this.props.match.params.name}?offset=${this.state.offset}`,{
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
    .then (json => checkResponse.call(this, json, (feed) => {
      this.setState({
        feed: [...this.state.feed || [], ...feed.items],
        lastPage: feed.lastPage,
        title: feed.title,
        offset: this.state.offset + 8
      })
    }))
  }

  render() {
    let {feed, fetching, error, lastPage, title} = this.state;

    return [
      fetching && !feed && <div className='col-12 text-center mt-5'>Fetching...</div>,
      error && <div className='col-12 text-center mt-5 pt-5'>{error}</div>,
      feed && [
        <h2 className='mb-4 col-12'>{title}</h2>,
        feed.map(entry =>  <Image entry={entry} key={entry}/>)
      ],
      feed && !lastPage 
        && <div className='col-12 text-center mt-5'>
             <button
               disabled={!!this.state.fetching}
               className='btn btn-primary mx-auto py-3 px-5' 
               onClick={() => this.getFeed()}
              >
              More!
            </button>
           </div>  
    ]
  }
}
