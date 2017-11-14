import { createSelector } from 'reselect'

const getBasketState = (state) => state.get('basket')

/** 
 * Returns Drawer state
 */
export const drawerOpen = createSelector(
  [ getBasketState ],
  (basket) => {
    return basket.get('items')
  }
)

