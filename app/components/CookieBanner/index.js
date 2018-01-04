import React from 'react'
import CookieBanner from 'react-cookie-banner'
import MessageCookie from 'components/CookieBanner/MessageCookie'

export default function CookieBannerWrapper(props) {
  return (
    <CookieBanner
      //TODO repair error
      // message={<MessageCookie />}
      message="En navigant sur ce site vous acceptez l'utilisation de cookie"
      cookie="user-has-accepted-"
      dismissOnScroll={false}
      buttonMessage="ok"
    />
  )
}

CookieBannerWrapper.propTypes = {}
