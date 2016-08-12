'use strict';

export const visibility = function(state = false, action) {
  switch (action.type) {
    case 'MODAL_VISIBILITY':
      return action.value
    default:
      return state
  }
}
