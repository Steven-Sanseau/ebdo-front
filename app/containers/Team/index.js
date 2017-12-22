import React from 'react'
import { Helmet } from 'react-helmet'

import TeamPage from 'components/TeamPage'
export class Team extends React.Component {// eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Helmet>
          <title>Team</title>
          <meta name="description" content="Description of Team" />
        </Helmet>
        <TeamPage />
      </div>
    )
  }
}

export default Team
