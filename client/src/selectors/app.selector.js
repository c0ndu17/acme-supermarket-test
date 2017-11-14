import { createSelector } from 'reselect'

const getAppState = (state) => state.get('app')

/** 
 * Returns Drawer state
 */
export const drawerOpen = createSelector(
  [ getAppState ],
  (app) => {
    return app.get('drawerOpen')
  }
)
