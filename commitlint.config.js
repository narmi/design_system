/**
 * @module commitlint config
 * @see https://commitlint.js.org/
 *
 * Enforces Conventional Commits specification in our commit messages.
 * commitlint is run via a husty precommit hook.
 */
module.exports = {
	extends: ['@commitlint/config-conventional']
};
