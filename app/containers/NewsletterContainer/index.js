import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import NewsletterFooter from 'components/Newsletter/NewsletterFooter'
import NewsletterBlock from 'components/Newsletter/NewsletterBlock'
import Newsletter from 'components/Newsletter'
import { createStructuredSelector } from 'reselect'

import { makeSelectNewsletter } from 'selectors/newsletter'
import { postNewsletter } from '../../actions/newsletter'

export class NewsletterContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newsletter: {
        firstname: '',
        email: ''
      }
    }

    this.handleFirstname = this.handleFirstname.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleFirstname(event) {
    this.handleChange('firstname', event.target.value)
  }

  handleEmail(event) {
    this.handleChange('email', event.target.value)
  }

  handleChange(key, val) {
    this.setState(
      _.extend(this.state.newsletter, {
        [key]: val
      })
    )
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.sendRequest()
    }
  }

  handleClick() {
    this.props.dispatchNewsletter(this.state.newsletter)
  }

  render() {
    let newsletterRender = null

    const { type } = this.props
    const newsletterComponent = (typeBlock, colorCheck) => (
      <Newsletter
        newsletter={this.state.newsletter}
        handleEmail={this.handleEmail}
        type={typeBlock}
        handleFirstname={this.handleFirstname}
        handleKeyPress={this.handleKeyPress}
        handleClick={this.handleClick}
        colorCheck={colorCheck}
      />
    )

    if (type === 'footer') {
      newsletterRender = (
        <NewsletterFooter>
          {newsletterComponent('footer', '--warm-purple')}
        </NewsletterFooter>
      )
    } else {
      newsletterRender = (
        <NewsletterBlock>
          {newsletterComponent('block', '--topaz')}
        </NewsletterBlock>
      )
    }
    return newsletterRender
  }
}

NewsletterContainer.propTypes = {
  type: PropTypes.string,
  dispatchNewsletter: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  newsletter: makeSelectNewsletter()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchNewsletter: newsletter => dispatch(postNewsletter(newsletter)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsletterContainer)
