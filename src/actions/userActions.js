import * as reducers  from '../reducers'

const setUser = (user, token, deviceId) => {
   return ({
    type: 'GOT_USER',
    payload: user
  })
}

const logout = () => {
	return {
		type: 'USER_LOGOUT'
	}
}

export {  setUser, logout }