import * as types from './actionTypes.js';

/**
 * Closes the sidebar
 */
export function closeDrawer() {
  return {
    type: types.DRAWER_CLOSE
  }
}

/**
 * Open the sidebar
 */
export function openDrawer() {
  return {
    type: types.DRAWER_OPEN
  }
}
