/**
 * Returns whether the provided user has the allowed scope
 *
 * @param {object} user
 * @param {string | string[]} requiredScope
 * @returns {boolean}
 */
 function hasScope(user = {}, requiredScope) {
  // TODO check for global admin permissions

  // TODO compare requiredScope (string or array) to the scopes array the user has in `user.scopes`
  // return a boolean if the user is allowed to access the requested scopes
}

export default hasScope
