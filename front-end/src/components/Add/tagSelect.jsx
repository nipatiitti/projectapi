import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { allTags } from '../../utils'

import Text from '../Text'
import Chip from '../Search/searchTags'

class TagSelect extends Component {
  constructor(props) {
    super(props)
    console.log(allTags.length);
    this.state = {

    }
  }

  render() {
    const { onSelect, selectedTags } = this.props
    return (
      <div className='tagSelect'>
        <Text text="Select tags:" />
        {
          allTags.map(tag => {
            const selected = selectedTags.includes(tag)
            return (
              <Chip
                key={tag}
                text={tag}
                onClick={() => onSelect(tag)}
                selected={selected}
              />
            )
          })
        }
      </div>
    )
  }
}

TagSelect.propTypes = {
  selectedTags: PropTypes.array.isRequired,
  onSelect: PropTypes.func
}

export default TagSelect
