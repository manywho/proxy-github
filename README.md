GitHub API Proxy
================

This service is a proxy for the GitHub API, allowing applications to access a whitelisted set of GitHub API endpoints,
without the application having access to a highly-privileged API token.

It currently allows access to:

* `/repos/*/*/pulls`

## Running

You'll need to have the following environment variables set:

* `GITHUB_TOKEN`: A valid GitHub token with at least these scopes:
  * `repo`
  * `repo:status`
  * `repo_deployment`
  * `public_repo`

1. `yarn install`
2. `yarn start`

Now the proxy should be running on `0.0.0.0:5050`.
