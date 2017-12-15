import { createSelector } from 'reselect'

const selectStep = state => state.get('step')

const makeSelectStep = () => createSelector(selectStep, step => step)

export { makeSelectStep }
