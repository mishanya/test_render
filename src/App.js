import React, { Component } from "react"
import { connect }            from 'react-redux'
import { bindActionCreators }    from 'redux'
import * as userActions          from './actions/userActions'
import {  BrowserRouter }   from 'react-router-dom';

import Routes from './Routes';
import Sign from './components/sign/Sign';
import Header from './components/header/Header';

class App extends Component {
 
	render () {
		return (
			<BrowserRouter>
				<div>
					<Header  {...this.props} />
					<div className='container my-3'>
						<div className='row'>
							{ this.props.user
								? <Routes {...this.props}/>
								: <Sign {...this.props}/>
							}	
						</div>
					</div>	
				</div>
			</BrowserRouter>	
		)
	}
}

function mapStateToProps(state) {
  return {
    user: state.userReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions,   dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)