import { createSelector } from 'reselect'

const getProductState = (state) => state.get('product')

/** 
 * Returns Drawer state
 */
export const drawerOpen = createSelector(
  [ getProductState ],
  (product) => {
    return product.get('items')
  }
)
