import { createSelector } from 'reselect'

const selectGodson = state => state.get('godson')

const makeSelectGodsonEmail = () =>
  createSelector(selectGodson, client => client.get('data').get('email'))

const makeSelectGodsonId = () =>
  createSelector(selectGodson, client => client.get('data').get('client_id'))

const makeSelectGodsonIsLoading = () =>
  createSelector(selectGodson, client => client.get('loading'))

const makeSelectGodsonIsNewGodson = () =>
  createSelector(selectGodson, client => client.get('isNewGodson'))

const makeSelectGodsonExist = () =>
  createSelector(selectGodson, client => client.get('clientExist'))

const makeSelectGodson = () =>
  createSelector(selectGodson, client => client.toJS())

export {
  makeSelectGodsonEmail,
  makeSelectGodsonIsNewGodson,
  makeSelectGodsonExist,
  makeSelectGodsonId,
  makeSelectGodson,
  makeSelectGodsonIsLoading
}
