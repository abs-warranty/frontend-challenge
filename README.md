# ABS Frontend Challenge

Code challenge for front end engineering candidates

## Setup

1. If you haven't already, sign up for a GitHub account and install git
2. Create a new repository called `frontend-challenge` and set it to private
3. Clone this repository: `git clone https://github.com/abs-warranty/frontend-challenge.git`
4. `cd` into the cloned `frontend-challenge` repo and add your private repo as a remote so you can push to it: `git remote add origin git@github.com:YOUR_USERNAME/frontend-challenge.git`
5. Create a new branch off the `master` branch in your `frontend-challenge` repo: `git checkout -b challenge`
6. After you have finished coding, commit and push your code.
7. Open a PR into the `master` branch in your private repo
8. Share your private repo with the ABS team so that we can review your pull request

## Challenge

* Edit `pages/claim.js` to do the following:
  * Request data from the API endpoint `/api/claim` on page load and visualize it on the page
    * Be thoughtful with your design and presentation of the data
    * You may use any framework or library you'd like as long as it plays nice with React and Next.js
  * Add a button to refresh data on the page without reloading the entire page
  * Gracefully handle errors encountered when loading the data
* Implement the `hasScope` permission utility in `utils/has-scope.js` as follows:
  * Method signature: `hasScope(user, requiredScope)`
    * `user` is an object
    * `user.scopes` is either an array or is undefined
    * `requiredScope` is a string or an array
    * Return a boolean
  * If the `user.scopes` array contains `*:*` then they have permission to access everything
  * If the user's `scopes` contains `get:registrations`, then they have permission to view registrations
  * If the user's `scopes` contains `put:claims`, then they have permission to update claims
  * Examples:

```javascript
const user = { name: 'user', scopes: ['get:registrations', 'put:claims'] }
hasScope(user, 'get:registrations') // true
hasScope(user, 'get:claims') // false
hasScope(user, ['put:claims']) // true
hasScope(user, ['put:claims', 'get:claims']) // false
hasScope(user, ['put:claims', 'get:registrations']) // true

const admin = { name: 'admin', scopes: ['*:*']}
hasScope(admin, 'get:registrations') // true
hasScope(admin, 'get:claims') // true
hasScope(admin, ['put:claims']) // true
hasScope(admin, ['put:claims', 'get:claims']) // true
hasScope(admin, ['put:claims', 'get:registrations']) // true

const guest = { name: 'guest'}
hasScope(guest, 'get:registrations') // false
hasScope(guest, 'get:claims') // false
hasScope(guest, ['put:claims']) // false
hasScope(guest, ['put:claims', 'get:claims']) // false
hasScope(guest, ['put:claims', 'get:registrations']) // false
```

* Create a new page to do the following:
  * Request data from the API endpoint `/api/user`
  * Use `hasScope` utility to determine if the user has permission to `put:claims` and `get:registrations` and display the result

## Tips

* We're looking at everything including your use of comments, your code style, the choice of frameworks or libraries you may decide to include, and your use of git
* Quality is more important than quantity
* Familiarize yourself with the documentation for Next.js as needed
* Reach out if you have questions! This isn't supposed to stump you, it's designed to let you show off your skills
