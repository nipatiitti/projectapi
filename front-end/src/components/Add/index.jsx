import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AddIcon from 'react-icons/lib/fa/plus';

import Input from '../Input'
import MultilineInput from '../MultilineInput'
import Text from '../Text'
import Button from '../Button'
import FloatButton from '../floatButton'

import TagSelect from './tagSelect'

class Add extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTags: [],
      body: '',
      title: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSelect = ( tag ) => {
    const contains = this.state.selectedTags.includes(tag)

    if(contains){
      const newSelectedTags = this.state.selectedTags.filter(item => item !== tag)
      this.setState({
        selectedTags: newSelectedTags
      })
    } else {
      const newSelectedTags = this.state.selectedTags.concat([tag])
      this.setState({
        selectedTags: newSelectedTags
      })
    }
  }

  postItem = () => {
    const { selectedTags, body, title } = this.state

    if (body !== '' && title !== '') {
      this.props.newPost({body, title, selectedTags})
    } else {
      alert("One or more empty fields")
    }
  }


  render() {

    const { body, title, open } = this.state

    return (
      <div className="add-container">
        <TagSelect onSelect={this.handleSelect}  selectedTags={this.state.selectedTags}/>
        <div className="add-body">
          <div className="add-inputs">
            <Input
              onChange={this.handleChange('title')}
              placeholder="Title"
              value={title}
            />

            <MultilineInput
              onChange={this.handleChange('body')}
              placeholder="Main content"
              value={body}
            />
          </div>

          <Button text="Add new" onClick={this.postItem}/>
        </div>
      </div>
    )
  }
}

Add.propTypes = {
  newPost: PropTypes.func.isRequired
}

export default Add
