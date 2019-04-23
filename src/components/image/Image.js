import React, {Component} from 'react';
import {Link}               from 'react-router-dom'
import './style.scss'

export default ({entry}) => {

  return (
    <div className='col-12 col-md-6 col-lg-3 mb-3' key={entry}>
      <img 
        src={entry}
        className='mx-auto w-100 channel__img_unloaded'
        onLoad={(e) => e.target.classList.remove('channel__img_unloaded')}
        onError={(e) => e.target.src = '/img/error.png'}
      />
      <div className='channel__loader bg-white d-none w-100 h-100 position-absolute justify-content-center align-items-center'>Loading</div>
    </div>
  )
}