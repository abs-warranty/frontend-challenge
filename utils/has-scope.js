/**
 * Returns whether the provided user has the allowed scope
 *
 * @param {object} user
 * @param {string | string[]} allowedScopes
 * @returns {boolean}
 */
 function hasScope(user = {}, allowedScopes) {
  // TODO check for global admin permissions

  // TODO compare allowedScopes (string or array) to the scopes the user has in `user.scopes`
  // return a boolean if the user is allowed to access the requested scopes
}

export default hasScope
