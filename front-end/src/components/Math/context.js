import React from 'react'
import loadScript from 'load-script'

const DEFAULT_SCRIPT = 'https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML'

const DEFAULT_OPTIONS = {
    tex2jax: {
        inlineMath: []
    },
    showMathMenu: false,
    showMathMenuMSIE: false
}

class MathJaxContext extends Component {

    getDefaultProps() {
        return {
            script: DEFAULT_SCRIPT,
            options: DEFAULT_OPTIONS
        }
    }

    getInitialState() {
        return {
            loaded: false
        }
    }

    getChildContext() {
        return {
            MathJax: typeof MathJax == 'undefined' ? undefined : MathJax
        }
    }

    componentDidMount() {
        const { script } = this.props

        if (!script) {
            return this.onLoad()
        }

        loadScript(script, this.onLoad)
    }

    onLoad(err) {
        const { options } = this.props
        MathJax.Hub.Config(options)

        this.setState({
            loaded: true
        })
    }

    render() {
        const { children } = this.props
        return React.Children.only(children)
    }
}

MathJaxContext.propTypes: {
    children: PropTypes.node.isRequired,
    script:   PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([false])
    ]),
    options:  PropTypes.object
}


module.exports = MathJaxContext;
