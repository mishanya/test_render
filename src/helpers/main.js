function initFetching(e, callback){
	
 	e && e.preventDefault()

  if (this.state.fetching){ return }

	this.setState({
		error: null,
		fetching: true,
		message: 'Fetching...'
	})

	callback.call(this)
}

function checkResponse(json, callback){
	
	json.error 
		? this.setState({
				error: json.error,
				message: null,
		 		fetching: false 
			})
		: this.setState({
				error: null,
				message: null,
		 		fetching: false 
			}) 

		!json.error && callback(json.response)

		if (json.error == 'Access denied. Invalid auth token.'){
			this.props.userActions.logout()
		}
}
  
export {initFetching, checkResponse}