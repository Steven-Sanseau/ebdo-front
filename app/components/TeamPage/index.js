import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Footer from 'components/Footer'
import styled from 'styled-components'
import { media } from 'global-styles'
import Obfuscate from 'react-obfuscate'

import NavBar from 'components/NavBar'

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
  background-color: var(--tomato);
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
const TextWrap = styled(Row)`
  padding-top: 100px;
  padding-bottom: 100px;
`
const ImageTeam = styled.div`
  background-image: url(${props => props.image});
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 40px;
  border-radius: 30%;
  background-size: cover;
  background-position: center;
`
const Profile = styled(Col)`
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

function TeamPage(props) {
  return (
    <div>
      <NavBar
        dispatch={props.dispatch}
        isFixed
        page={props.page}
        isLoggedIn={props.isLoggedIn}
      />
      <IntroWrap>
        <Layout>
          <Row>
            <Col xs={12} sm={6}>
              <h2>L'équipe</h2>
              <p>
                Venus de tous horizons, passionnés d’informations, convaincus de
                l’avenir du papier, ils inventent le journalisme dont ils ont
                toujours rêvé.
              </p>
            </Col>
          </Row>
        </Layout>
      </IntroWrap>
      <Layout>
        {props.teamMembers && (
          <TextWrap between="sm">
            {props.teamMembers.map(member => (
              <Profile xs={12} sm={4} key={member.email}>
                <ImageTeam
                  image={`//images.weserv.nl/?url=ssl:${
                    member.image
                  }&w=100&t=fit&il`}
                />
                <h3>
                  {member.name}, <span>{member.job}</span>
                </h3>
                <p>
                  « {member.description} »<br />
                  <Obfuscate email={member.email} />
                </p>
              </Profile>
            ))}
          </TextWrap>
        )}
      </Layout>
      <Footer dispatch={props.dispatch} />
    </div>
  )
}

TeamPage.propTypes = {
  dispatch: PropTypes.func,
  page: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  teamMembers: PropTypes.array
}

export default TeamPage
