GitHub API Proxy
================

[![Build Status](https://travis-ci.org/manywho/proxy-github.svg)](https://travis-ci.org/manywho/proxy-github)

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

## Contributing

Contributions are welcome to the project - whether they are feature requests, improvements or bug fixes! Refer to 
[CONTRIBUTING.md](CONTRIBUTING.md) for our contribution requirements.

## License

This service is released under the [MIT License](http://opensource.org/licenses/mit-license.php).
