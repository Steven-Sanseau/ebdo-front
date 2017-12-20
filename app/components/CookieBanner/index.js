import React from 'react'
import CookieBanner from 'react-cookie-banner'
import MessageCookie from 'components/CookieBanner/MessageCookie'

export default function CookieBannerWrapper(props) {
  return (
    <CookieBanner
      message={<MessageCookie />}
      cookie="user-has-accepted-"
      dismissOnScroll={false}
      buttonMessage="ok"
    />
  )
}

CookieBannerWrapper.propTypes = {}
