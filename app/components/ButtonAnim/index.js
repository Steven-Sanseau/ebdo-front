import React from 'react'
// import PropTypes from 'prop-types'
import anime from 'animejs'

export default class ButtonAnimate extends React.Component {
  constructor(props) {
    super(props)

    this.state = { isAnim: false, animInstance: null }
  }

  handleClick = () => {
    const basicTimeline = anime.timeline({
      autoplay: false,
      delay: function(el, i, l) {
        return i * 200
      }
    })
    basicTimeline
      .add({
        targets: this.text,
        duration: 0.1,
        opacity: '0'
      })
      .add({
        targets: this.button,
        duration: 400,
        height: 20,
        width: 300,
        backgroundColor: '#2B2D2F',
        border: '0',
        borderRadius: 100
      })
      .add({
        targets: this.progressBar,
        duration: 500,
        width: 300,
        easing: 'linear'
      })

    if (this.state.isAnim) {
      console.log('pause')
      this.state.animInstance.reverse()
    } else {
      basicTimeline.play()
      this.setState({ isAnim: true, animInstance: basicTimeline })
      console.log('play')
    }

    this.state.animInstance.finished.then(() => {
      this.setState({ isAnim: false, animInstance: null })
    })
  }

  render() {
    return (
      <div>
        <div
          ref={btn => {
            this.button = btn
          }}
          className="button">
          <div
            className="text"
            ref={txt => {
              this.text = txt
            }}>
            Submit
          </div>
        </div>
        <div
          className="progress-bar"
          ref={pgrs => {
            this.progressBar = pgrs
          }}
        />

        <button onClick={this.handleClick}> GOOOOO</button>
      </div>
    )
  }
}
