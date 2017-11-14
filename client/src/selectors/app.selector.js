import { createSelector } from 'reselect'

const getAppState = (state) => state.get('app')

/** 
 * Returns Drawer state
 */
export const drawerOpen = createSelector(
  [ getAppState ],
  (app) => {
    debugger;
    return app.get('drawerOpen')
  }
)
