const  initialState = null

export default function userReducer( state = initialState, action) {
  let {payload} = action
  switch (action.type ){
    case 'GOT_USER':
      return Object.assign({}, state, {
        ...payload
      })
      break
 
    case 'USER_LOGOUT':
      return null
      break    
  
    default:
      return state
      break
  }
}
