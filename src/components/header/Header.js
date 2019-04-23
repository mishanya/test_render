import React, { Component } from "react"
import {Link}               from 'react-router-dom'

export default ({...props}) => {
 
  return (
  	<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className='container text-white'>
				<div className='py-3'>
					{props.user 
						? <Link 
								className='text-white' 
								to='/'
							>
								{props.user.nickname}
							</Link>
						: 'Login to subscribe'
					}
				</div>
				{props.user 
					&& <div 
							onClick={() => props.userActions.logout()}
							className='text-white' 
						>
							Sign out
						</div>
					}
			</div>
		</nav>
	)
}