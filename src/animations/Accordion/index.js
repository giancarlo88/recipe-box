import React from 'react'
import { Motion, spring } from 'react-motion'

const Accordion = (Component, initialHeight) =>
  class Accordion extends React.Component {
    constructor(props) {
      super(props)
      this.height = initialHeight
    }

    componentDidMount() {
      this.height = this.element.scrollHeight
    }

    render() {
      const { isSelected } = this.props
      return (
        <Motion
          defaultStyle={{ x: this.height }}
          style={{ x: isSelected ? spring(this.height) : spring(95) }}
        >
          {(interpolatingStyle) => (
            <div
              ref={(elem) => {
                this.element = elem
              }}
              style={{ height: interpolatingStyle.x, overflow: 'hidden' }}
            >
              <Component {...this.props}/>
            </div>
          )}
        </Motion>
      )
    }
  }

export default Accordion
