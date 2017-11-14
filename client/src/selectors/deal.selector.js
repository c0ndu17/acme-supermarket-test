import { createSelector } from 'reselect'

const getDealState = (state) => state.get('deal')

/** 
 * Returns Drawer state
 */
export const getDealItems = createSelector(
  [ getDealState ],
  (deal) => {
    return deal.get('items')
  }
)

