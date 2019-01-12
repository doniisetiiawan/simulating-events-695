export function isBrowser() {
  return typeof window !== 'undefined';
}

export function getNewState(state, newState) {
  return Object.assign({}, state, newState);
}

export function isFirstRender(items) {
  return typeof items === 'undefined' || items.length === 0 || Object.keys(items).length === 0;
}
