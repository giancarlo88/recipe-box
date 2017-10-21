import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'

export default class Accordion extends Component {

  constructor(props) {
    super(props)
    this.height = props.initialHeight
  }

  componentDidMount() {
    this.height = this.element.scrollHeight
  }

  render() {
    const { isSelected, children } = this.props
    return (
      <Motion
        defaultStyle={{ x: this.height }}
        style={{x: isSelected ? spring(this.height) : spring(95) }}
      >
        {(interpolatingStyle) => (
          <div
            ref={(elem) => {
              this.element = elem
            }}
            style={{ height: interpolatingStyle.x, overflow: 'hidden' }}
          >
            {children}
          </div>
        )}
      </Motion>
    )
  }
}
