import React, { Component }         from 'react'
import {  Route, Switch } from 'react-router-dom'
import ChannelList from './components/channel_list/ChannelList'
import Channel from './components/channel/Channel'

export default ({...appProps}) => (

	<Switch>
    < Route  exact path='/'   render={(props)  => < ChannelList {...props} {...appProps} /> } />
    < Route  exact path='/:name' render={(props)  => < Channel {...props} {...appProps} /> } />
	</Switch>
)