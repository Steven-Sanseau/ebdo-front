import { createSelector } from 'reselect'

const selectNewsletter = state => state.get('newsletter')

const makeSelectNewsletter = () => createSelector(selectNewsletter, newsletter => newsletter.toJS())

export {
  makeSelectNewsletter
}