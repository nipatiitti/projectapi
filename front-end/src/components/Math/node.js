import React, { Component } from 'react'
import PropTypes from 'prop-types'

import process from 'process'

const MathJaxNode = React.createClass({
  getDefaultProps() {
      return {
          inline:   false,
          onRender: () => {}
      }
  },

  componentDidMount() {
      this.typeset()
  },

  componentDidUpdate(prevProps) {
      const forceUpdate = prevProps.inline != this.props.inline
      this.typeset(forceUpdate)
  },

  shouldComponentUpdate(nextProps, nextState, nextContext) {
      return (
          nextProps.children != this.props.children
          || nextProps.inline != this.props.inline
          || nextContext.MathJax != this.context.MathJax
      )
  },

  componentWillUnmount() {
      this.clear()
  },

  clear() {
      const { MathJax } = this.context;

      if (!this.script || !MathJax) {
          return;
      }

      const jax = MathJax.Hub.getJaxFor(this.script)
      if (jax) {
          jax.Remove()
      }
  },

  typeset(forceUpdate) {
      const { MathJax } = this.context
      const { children, onRender } = this.props

      if (!MathJax) {
          return
      }

      const text = children

      if (forceUpdate) {
          this.clear()
      }

      if (!forceUpdate && this.script) {
          MathJax.Hub.Queue(() => {
              const jax = MathJax.Hub.getJaxFor(this.script)

              if (jax) jax.Text(text, onRender)
              else {
                  const script = this.setScriptText(text)
                  process(MathJax, script, onRender)
              }
          })


      } else {
          const script = this.setScriptText(text)
          process(MathJax, script, onRender)
      }
  },

  setScriptText(text) {
      const { inline } = this.props

      if (!this.script) {
          this.script = document.createElement('script')
          this.script.type = 'math/tex; ' + (inline ? '' : 'mode=display')
          this.refs.node.appendChild(this.script)
      }

      if ('text' in this.script) {
          this.script.text = text
      } else {
          this.script.textContent = text
      }

      return this.script
  },

  render() {
      return <span ref="node" />
  }


})

MathJaxNode.propTypes = {
    inline:  PropTypes.bool,
    children: PropTypes.node.isRequired,
    onRender: PropTypes.func
}

export default MathJaxNode
