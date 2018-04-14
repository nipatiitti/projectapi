import React, { Component } from 'react'
import PropTypes from 'prop-types'

import history from '../../history'

import { NavLink } from 'react-router-dom'

import SearchContainer from '../../containers/searchContainer'
//import image from '../media/mathabi.png'
import AddIcon from 'react-icons/lib/fa/plus';
import PostItem from './PostItem'

import Button from '../Button'
import FloatButton from '../floatButton'
import Text from '../Text'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getPosts('math')
  }

  render() {

    const { loading, tags } = this.props

    let data = this.props.data

    if(tags.length > 0)
      data = data.filter(item => {
        let toShow = false

        item.tags.forEach(tag => {
          if (tags.includes(tag))
            toShow = true
        })

        return toShow
      })

    return (
      <div className='mainView'>
        <div className="floatButtons">
          <NavLink to="/add">
            <FloatButton icon={<AddIcon />}/>
          </NavLink>
        </div>
        <div className='top'>
          <Text text="Welcome" />
        </div>
        <div className='container'>
          <SearchContainer />
          <div className='body'>
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
