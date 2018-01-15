import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { createStructuredSelector } from 'reselect'

import { makeSelectPathName } from 'selectors/route'
import { makeSelectOffer } from 'selectors/offer'
import { makeIsLoggedIn } from 'selectors/login'
import { setOfferParams } from 'actions/offer'

import { ThemeProvider } from 'styled-components'
import CookieBannerWrapper from 'components/CookieBanner'
import HomePage from 'components/HomePage'

const theme = {
  flexboxgrid: {
    // Defaults
    gutterWidth: 0, // rem
    outerMargin: 0 // rem
  }
}

class Home extends React.Component {
  render() {
    const {
      dispatch,
      page,
      dispatchSetOfferParams,
      offer,
      isLoggedIn
    } = this.props

    return (
      <div>
        <Helmet>
          <title>ebdo</title>
          <meta
            name="description"
            content="ebdo est un journal papier, indépendant, irrigué par ses lecteurs. À retrouver chaque vendredi. Reportages, enquêtes, actus, photos, BD, vie pratique : ebdo, une invitation à prendre du recul pour comprendre, pour soi, pour agir."
          />
          <meta property="og:site_name" content="ebdo" />
          <meta property="og:title" content="ebdo" />
          <meta property="og:url" content="https://www.ebdo-lejournal.com/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="//images.weserv.nl/?url=ssl:s3.eu-west-3.amazonaws.com/ebdo/front/website/ogImage.jpg&w=1000&t=fit&il"
          />
          <meta itemprop="name" content="ebdo " />
          <meta itemprop="url" content="https://www.ebdo-lejournal.com/" />
          <meta
            itemprop="thumbnailUrl"
            content="//images.weserv.nl/?url=ssl:s3.eu-west-3.amazonaws.com/ebdo/front/website/ogImage.jpg&w=1000&t=fit&il"
          />
          <link
            rel="image_src"
            content="//images.weserv.nl/?url=ssl:s3.eu-west-3.amazonaws.com/ebdo/front/website/ogImage.jpg&w=1000&t=fit&il"
          />
          <meta
            itemprop="image"
            content="//images.weserv.nl/?url=ssl:s3.eu-west-3.amazonaws.com/ebdo/front/website/ogImage.jpg&w=1000&t=fit&il"
          />
          <meta name="twitter:title" content="ebdo" />
          <meta
            name="twitter:image"
            content="//images.weserv.nl/?url=ssl:s3.eu-west-3.amazonaws.com/ebdo/front/website/ogImage.jpg&w=1000&t=fit&il"
          />
          <meta name="twitter:url" content="https://ebdo-lejournal.com/" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="description"
            content="Ebdo est le nouvel hebdomadaire par les équipes des revues XXI et 6Mois."
          />
        </Helmet>
        <ThemeProvider theme={theme}>
          <HomePage
            dispatch={dispatch}
            page={page}
            dispatchSetOfferParams={dispatchSetOfferParams}
            offer={offer}
            isLoggedIn={isLoggedIn}
          />
        </ThemeProvider>
        <CookieBannerWrapper />
      </div>
    )
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  dispatchSetOfferParams: PropTypes.func,
  offer: PropTypes.object,
  page: PropTypes.string,
  isLoggedIn: PropTypes.bool
}

const mapStateToProps = createStructuredSelector({
  page: makeSelectPathName(),
  offer: makeSelectOffer(),
  isLoggedIn: makeIsLoggedIn()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetOfferParams: params => dispatch(setOfferParams(params)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
