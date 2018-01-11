import React from 'react'
import CookieBanner from 'react-cookie-banner'
import MessageCookie from 'components/CookieBanner/MessageCookie'

export default function CookieBannerWrapper(props) {
  return (
    <CookieBanner
      //TODO repair error
      // message={<MessageCookie />}
      message="Bonjour, afin de rendre votre expérience ebdo plus agréable nous utilisons des cookies. Le respect de votre vie privée est au centre de nos préoccupations, n'hésitez pas à nous contacter pour toute suggestion ou remarque à ce sujet."
      cookie="user-has-accepted-"
      dismissOnScroll={false}
      buttonMessage="ok"
      styles={{
        banner: { height: 'auto', paddingLeft: '100px', paddingRight: '100px' },
        button: { left: '35px'}
      }}
    />
  )
}

CookieBannerWrapper.propTypes = {}
