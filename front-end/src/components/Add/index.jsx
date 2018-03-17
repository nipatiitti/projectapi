import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Input from '../Input'
import MultilineInput from '../MultilineInput'

import Text from '../Text'
import Button from '../Button'

class Add extends Component {
  constructor(props) {
    super(props)

    this.state = {
      author: '',
      body: '',
      title: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  postItem = () => {
    const { author, body, title } = this.state

    if (author !== '' && body !== '' && title !== '') {
      this.props.newPost({author, body, title})
    } else {
      alert("One or more empty fields")
    }
  }


  render() {

    const { author, body, title } = this.state

    return (
      <div className="add-container">
        <div className="add-item">
          <Text text="Author: " />
          <Input
            onChange={this.handleChange('author')}
            placeholder="Author"
            value={author}
          />
        </div>

        <div className="add-item">
          <Text text="Title: " />
            <Input
              onChange={this.handleChange('title')}
              placeholder="Title"
              value={title}
            />
        </div>

        <div className="add-item">
          <Text text="Body: " />
            <MultilineInput
              onChange={this.handleChange('body')}
              placeholder="Main content"
              value={body}
            />
        </div>


        <Button text="Add new" onClick={this.postItem}/>
      </div>
    )
  }
}

Add.propTypes = {
  newPost: PropTypes.func.isRequired
}

export default Add
