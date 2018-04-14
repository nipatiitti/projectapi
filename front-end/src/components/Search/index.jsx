import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ChevronOpen from 'react-icons/lib/fa/chevron-right';
import ChevronClose from 'react-icons/lib/fa/chevron-left';

import Input from '../Input'
import Chip from './searchTags'
import { allTags } from '../../utils'

class SearchBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: true
    }
  }

  render() {
    const { text, changeSearch, addTag, removeTag, tags } = this.props
    const { open } = this.state

    return (
      <div className="searchContainer">
        <div className="menuIcon" onClick={() => this.setState({open: !open})}>{open ? <ChevronOpen/> : <ChevronClose/>}</div>
        <div className={this.state.open ? 'searchBox open' : 'searchBox closed'}>
          <Input
            onChange={changeSearch}
            placeholder="Search..."
            value={text}
          />

        {
          allTags.map(tag => {
            const selected = tags.includes(tag)
            return (
              <Chip
                key={tag}
                text={tag}
                onClick={selected ? removeTag : addTag}
                selected={selected}
              />
            )
          })
        }
        </div>
      </div>
    )
  }
}

SearchBox.propTypes = {
  text: PropTypes.string.isRequired,
  changeSearch: PropTypes.func.isRequired,
  addTag: PropTypes.func.isRequired,
  removeTag: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired
}

export default SearchBox
