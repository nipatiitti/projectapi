import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Latex from 'react-latex'

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

  makeid() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 7; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
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
    const { selectedTags: tags, body, title } = this.state

    if (body !== '' && title !== '') {
      this.props.newPost({body, title, tags})
    } else {
      alert("One or more empty fields")
    }
  }

  splitText( text ) {
    if (!text)
      return ''

    else {
      const elements = text.split('$$')

      let items = []

      for(let i = 0; i < elements.length; i++) {
        if ( i % 2 === 1)
          items.push(
            <div key={this.makeid()}>
              <Latex displayMode={true}>{'$$' + elements[i] + '$$'}</Latex>
            </div>
          )
        else {
          items.push(
            <div key={this.makeid()}>
              <Text text={elements[i]} />
            </div>
          )
        }
      }

      return items
    }
  }


  render() {

    const { body, title, open } = this.state

    const elements = this.splitText(body)

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

            <div className="preview">
              {elements}
            </div>
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
