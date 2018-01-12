import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-styled-flexboxgrid'
import Footer from 'components/Footer'
import styled from 'styled-components'
import { media } from 'global-styles'
import Button from 'components/Button'
import { push } from 'react-router-redux'

import '!file-loader?name=[name].[ext]!../../images/source/boiteIcon.png'
import '!file-loader?name=[name].[ext]!../../images/source/paroleIcon.png'
import '!file-loader?name=[name].[ext]!../../images/source/ressourceIcon.png'
import '!file-loader?name=[name].[ext]!../../images/source/sourceLogo.png'

const Layout = styled.div`
  width: calc(100% - 80px);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet`
    padding: 40px 0;
  `};
`

const IntroWrap = styled.div`
  padding-top: 100px;
  padding-bottom: 30px;
  background-color: var(--turquoise-blue);
  color: white;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    max-width: 450px;
    font-size: 18px;
  }
`
const TextWrap = styled(Col)`
  padding-top: 100px;
  padding-bottom: 100px;
`
const ImageCategory = styled.div`
  background-image: url(${props =>
    props.image ? props.image : 'boiteIcon.png'});
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 40px;
  border-radius: 30%;
  background-size: cover;
  background-position: center;
`
const Category = styled(Col)`
  margin-bottom: 80px;
  span {
    color: var(--grey-blue);
  }
  h3 {
    margin-bottom: 10px;
    margin-top: 0;
  }
  p {
    font-size: 18px;
  }
  a {
    color: #658089;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 1px solid #658089;
  }
  a:hover {
    background: #658089;
    color: #ffffff;
  }
`

const LogoSource = styled.div`
  background: url('sourceLogo.png') no-repeat center/100%;
  width: 229px;
  height: 100px;
  position: relative;
  top: 90px;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet`
      top: -30px;
    `};
`

function SourcePagePublic(props) {
  return (
    <div>
      <IntroWrap>
        <Layout>
          <Row>
            <Col md={false} xs={12}>
              <LogoSource />
            </Col>
            <Col xs={12} sm={6}>
              <h2>Comment participer ?</h2>
              <p>
                La Source, c’est la plateforme numérique qui nous permet de
                recueillir les idées de nos abonnés pour qu'elles irriguent le
                journal.
              </p>
            </Col>
            <Col md={2} mdOffset={4} xs={false}>
              <h2>Abonné(e)?</h2>
              <Button
                color="--white-true"
                colorText="--turquoise-blue"
                handleRoute={() => {
                  props.dispatch(push('/connexion?redirect=source'))
                }}>
                Je me connecte
              </Button>
            </Col>
          </Row>
          <Col md={12} xs={false}>
            <LogoSource />
          </Col>
        </Layout>
      </IntroWrap>
      <Layout>
        <Row>
          <TextWrap xs={12} sm={6} smOffset={3}>
            <iframe
              style={{ maxWidth: '100%' }}
              width="560"
              height="317"
              title="La Source"
              src="https://www.youtube.com/embed/M6Ok6MS_SlM?modestbranding=1&autohide=1&showinfo=0&rel=0"
              frameBorder="0"
              allowFullScreen
            />
          </TextWrap>
        </Row>
        <Row between="sm">
          <Category xs={12} sm={4}>
            <ImageCategory image="ressourceIcon.png" />
            <h3>Ressources</h3>
            <p>
              Vous connaissez un sujet sur le bout des doigts parce que c'est
              votre passion, votre profession, votre hobby et vous pouvez aider
              les journalistes dans leurs recherches ?
            </p>
          </Category>
          <Category xs={12} sm={4}>
            <ImageCategory image="boiteIcon.png" />
            <h3>Boites à idées</h3>
            <p>
              Vous connaissez une association ou une initiative remarquables ?
              Une personne étonnante ? Vous avez des révélations ? Des questions
              sur la science ?
            </p>
          </Category>
          <Category xs={12} sm={4}>
            <ImageCategory image="paroleIcon.png" />
            <h3>Paroles</h3>
            <p>
              Vous avez un témoignage à livrer, une histoire à raconter ou une
              impression à donner et vous avez envie de l’écrire pour le
              partager dans Ebdo ?
            </p>
          </Category>
        </Row>
      </Layout>
      <Footer dispatch={props.dispatch} />
    </div>
  )
}

SourcePagePublic.propTypes = {
  dispatch: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  client: PropTypes.object
}

export default SourcePagePublic
