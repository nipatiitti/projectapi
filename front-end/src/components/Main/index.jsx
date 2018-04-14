import React, { Component } from 'react'
import PropTypes from 'prop-types'

import history from '../../history'

import { NavLink } from 'react-router-dom'

import SearchContainer from '../../containers/searchContainer'

import PostItem from './PostItem'

import Button from '../Button'
import Text from '../Text'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getPosts('math')
  }

  render() {

    const { data, loading } = this.props

    return (
      <div className='mainView'>
        <div className='top'>
          <Text text="Welcome" />
        </div>
        <div className='container'>
          <SearchContainer />
          <div className='body'>
            <NavLink to="/add">
              <Button text="Add new"/>
            </NavLink>
            {!loading && data.map(item => (
              <PostItem {...item} key={item._id} onClick={() => history.push(`/items/${item._id}`)} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  getPosts: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
}

export default Main
