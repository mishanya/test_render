import React, {Component} from 'react';
import {Link}               from 'react-router-dom'

export default ({channel}) => {

  const formatDate = (creationDate) => {
    const options = {  year: 'numeric', month: 'numeric', day: 'numeric' };
    const date  = new Date(creationDate);
    return date.toLocaleDateString("ru-RU", options);  
  }

  return (
    <div className='col-12 col-md-6 col-lg-4 my-3'>
      <Link to={channel.name} className='d-block text-dark  border p-3'>
        <img src={channel.avatar} className='w-25 d-inline-block ' />
        <div className='w-50 pl-2 d-inline-block text-truncate align-middle'>{channel.title} </div>
        <div className='w-25 pl-2 d-inline-block align-middle'>{formatDate(channel.createdAt)}</div>
       </Link>  
    </div>
  )
}