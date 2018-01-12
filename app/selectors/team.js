import { createSelector } from 'reselect'

const selectTeam = state => state.get('team')

const makeSelectTeamData = () =>
  createSelector(selectTeam, team => team.get('members'))

export { makeSelectTeamData }
