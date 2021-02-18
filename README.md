# _Styled Open JS-charts_

[![GitHub marketplace](https://img.shields.io/badge/marketplacegithub-graph--open-jscharts-blue?logo=github)](https://github.com/marketplace/actions/graph-open-jscharts)

[![management: perfekt👌](https://img.shields.io/badge/management-perfekt👌-red.svg)](https://github.com/lekterable/perfekt)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<!-- [![Become a sponsor](https://img.shields.io/badge/sponsor-AlexRogalskiy-181717.svg?logo=github)](https://github.com/sponsors/AlexRogalskiy)-->

[![DeepScan grade](https://deepscan.io/api/teams/11946/projects/15929/branches/326929/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11946&pid=15929&bid=326929)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/AlexRogalskiy/github-action-open-jscharts)
![GitHub Release Date](https://img.shields.io/github/release-date/AlexRogalskiy/github-action-open-jscharts)
![Lines of code](https://tokei.rs/b1/github/AlexRogalskiy/github-action-open-jscharts?category=lines)
![GitHub closed issues](https://img.shields.io/github/issues-closed/AlexRogalskiy/github-action-open-jscharts)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/AlexRogalskiy/github-action-open-jscharts)
![GitHub repo size](https://img.shields.io/github/repo-size/AlexRogalskiy/github-action-open-jscharts)
![GitHub last commit](https://img.shields.io/github/last-commit/AlexRogalskiy/github-action-open-jscharts)
![GitHub language count](https://img.shields.io/github/languages/count/AlexRogalskiy/github-action-open-jscharts)
![GitHub search hit counter](https://img.shields.io/github/search/AlexRogalskiy/github-action-open-jscharts/goto)
![GitHub Repository branches](https://badgen.net/github/branches/AlexRogalskiy/github-action-open-jscharts)
![GitHub Repository dependents](https://badgen.net/github/dependents-repo/AlexRogalskiy/github-action-open-jscharts)
[![Renovatebot](https://badgen.net/badge/renovate/enabled/green?cache=300)](https://renovatebot.com/)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-1f8ceb.svg?style=flat-square)](https://dependabot.com/)
[![NewReleases](https://newreleases.io/badge.svg)](https://newreleases.io/github/AlexRogalskiy/github-action-open-jscharts)
[![Hits-of-Code](https://hitsofcode.com/github/alexrogalskiy/github-action-open-jscharts?branch=master)](https://hitsofcode.com/github/alexrogalskiy/github-action-open-jscharts?branch=master/view?branch=master)
![CI](https://github.com/AlexRogalskiy/github-action-open-jscharts/workflows/CI/badge.svg)
[![CircleCI](https://circleci.com/gh/AlexRogalskiy/github-action-open-jscharts.svg?style=shield)](https://circleci.com/gh/AlexRogalskiy/github-action-open-jscharts)

<!--[![codecov](https://codecov.io/gh/AlexRogalskiy/github-action-open-jscharts/branch/master/graph/badge.svg)](https://codecov.io/gh/AlexRogalskiy/github-action-charts)-->

[![ComVer](https://img.shields.io/badge/ComVer-compliant-brightgreen.svg)][repo]
[![Public workflows that use this action.][total_usages]][search_results]
[![Licence][license_id]][license_content]

## _Table of contents_

<!--ts-->
   * [<em>Styled Open JS-charts</em>](#styled-open-js-charts)
      * [<em>Table of contents</em>](#table-of-contents)
      * [<em>Description</em>](#description)
      * [<em>Inputs</em>](#inputs)
         * [url](#url)
         * [name](#name)
         * [path](#path)
         * [extension](#extension)
         * [width](#width)
         * [height](#height)
      * [<em>Outputs</em>](#outputs)
         * [image](#image)
      * [<em>Examples</em>](#examples)
      * [<em>Visitor stats</em>](#visitor-stats)
      * [<em>Licensing</em>](#licensing)
      * [<em>Authors</em>](#authors)
      * [<em>Versioning</em>](#versioning)
      * [<em>Contribution</em>](#contribution)
      * [<em>Acknowledgement</em>](#acknowledgement)
      * [<em>Forks</em>](#forks)
      * [<em>Development Support</em>](#development-support)
<!--te-->

## _Description_

<p align="center" style="text-align:center;">
    <a href="https://www.typescriptlang.org/">
        <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
    </a>
    <a href="https://www.repostatus.org/#active">
        <img src="https://img.shields.io/badge/Project%20Status-Active-brightgreen" alt="Project Status: Active – The project has reached a stable, usable state and is being actively developed." />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/created/AlexRogalskiy/github-action-open-jscharts" alt="Project created status" />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/updated/AlexRogalskiy/github-action-open-jscharts" alt="Project updated status" />
    </a>
</p>

Creates graph open JS-charts by input json data source and dimension parameters.

## _Inputs_

### `url`

**Required** Target url with json data source.

### `name`

**Optional** Graph chart image name (default **demo**)

### `path`

**Optional** Graph chart image path (default **images**)

### `extension`

**Optional** Graph chart image extension (default **svg**)

### `width`

**Optional** Graph chart image width (default **1024**)

### `height`

**Optional** Graph chart image height (default **768**)

## _Outputs_

### `image`

Generated graph chart image (stored in the `path` directory)

## _Examples_

```yml
- name: Create graph open js-charts
  uses: alexrogalskiy/github-action-open-jscharts@master
  with:
    url: 'https://raw.githubusercontent.com/plotly/plotly.js/master/test/image/mocks/0.json'
    name: 'chart'
    path: 'images'
    extension: 'svg'
    width: 400
    height: 400
```

Running locally:

- `npm run start:action --action github-action-open-jscharts --url 'https://raw.githubusercontent.com/plotly/plotly.js/master/test/image/mocks/0.json' --name chart-name --extension svg --width 400 --height 400`

## _Visitor stats_

[![GitHub page hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FAlexRogalskiy%2Fgithub-action-open-jscharts&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true)](https://hits.seeyoufarm.com)

![GitHub stars](https://img.shields.io/github/stars/AlexRogalskiy/github-action-open-jscharts?style=social)
![GitHub forks](https://img.shields.io/github/forks/AlexRogalskiy/github-action-open-jscharts?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/AlexRogalskiy/github-action-open-jscharts?style=social)

## _Licensing_

_**Styled Open JS-charts**_ is distributed under LGPL version 3 or later,
[[License](https://github.com/AlexRogalskiy/github-action-open-jscharts/blob/master/LICENSE)]. LGPLv3 is
additional permissions on top of GPLv3.

![license](https://user-images.githubusercontent.com/19885116/48661948-6cf97e80-ea7a-11e8-97e7-b45332a13e49.png)

## _Authors_

_**Styled Open JS-charts**_ is maintained by the following GitHub team-members:

- [![Author](https://img.shields.io/badge/author-AlexRogalskiy-FB8F0A)](https://github.com/AlexRogalskiy)

with community support please contact with us if you have some question or proposition.

## _Versioning_

The project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on
this repository][tags].

## _Contribution_

[![Contributors Display](https://badges.pufler.dev/contributors/AlexRogalskiy/github-action-open-jscharts?size=50&padding=5&bots=true)](https://badges.pufler.dev)

Please read
[CONTRIBUTING.md](https://github.com/AlexRogalskiy/github-action-open-jscharts/blob/master/.github/CONTRIBUTING.md)
for details on our code of conduct, and the process for submitting pull requests to us
([emoji key](https://allcontributors.org/docs/en/emoji-key)).

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind are welcome!

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![Github contributors](https://img.shields.io/github/all-contributors/AlexRogalskiy/github-action-open-jscharts)

See also the list of [contributors][contributors] who participated in this project.

## _Acknowledgement_

[![Stargazers repo roster for @AlexRogalskiy/github-action-open-jscharts](https://reporoster.com/stars/AlexRogalskiy/github-action-open-jscharts)][stars]

## _Forks_

[![Forkers repo roster for @AlexRogalskiy/github-action-open-jscharts](https://reporoster.com/forks/AlexRogalskiy/github-action-open-jscharts)][forkers]

## _Development Support_

Like _**Styled Code Formats**_ ? Consider buying me a coffee :\)

[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/alexrogalskiy)
[![Buy Me A Coffee](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=buy%20me%20a%20coffee)](https://www.buymeacoffee.com/AlexRogalskiy)
[![KoFi](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi)](https://ko-fi.com/alexrogalskiy)

---

[![forthebadge](https://img.shields.io/badge/made%20with-%20javascript-C1282D.svg?logo=javascript&style=for-the-badge)](https://www.javascript.com/)
[![forthebadge](https://img.shields.io/badge/powered%20by-%20github-7116FB.svg?logo=github&style=for-the-badge)](https://github.com/)
[![forthebadge](https://img.shields.io/badge/build%20with-%20%E2%9D%A4-B6FF9B.svg?logo=heart&style=for-the-badge)](https://forthebadge.com/)

[repo]: https://github.com/AlexRogalskiy/github-action-open-jscharts
[tags]: https://github.com/AlexRogalskiy/github-action-open-jscharts/tags
[issues]: https://github.com/AlexRogalskiy/github-action-open-jscharts/issues
[pulls]: https://github.com/AlexRogalskiy/github-action-open-jscharts/pulls
[wiki]: https://github.com/AlexRogalskiy/github-action-open-jscharts/wiki
[stars]: https://github.com/AlexRogalskiy/github-action-open-jscharts/stargazers
[forkers]: https://github.com/AlexRogalskiy/github-action-open-jscharts/network/members
[contributors]: https://github.com/AlexRogalskiy/github-action-open-jscharts/graphs/contributors
[license_id]: https://img.shields.io/github/license/AlexRogalskiy/github-action-open-jscharts
[license_content]: https://github.com/AlexRogalskiy/github-action-open-jscharts/blob/master/LICENSE
[total_usages]:
  https://img.shields.io/endpoint?url=https%3A%2F%2Fapi-git-master.endbug.vercel.app%2Fapi%2Fgithub-actions%2Fused-by%3Faction%3DAlexRogalskiy%2Fgithub-action-open-jscharts%26badge%3Dtrue
[search_results]:
  https://github.com/search?o=desc&q=AlexRogalskiy/github-action-open-jscharts+path%3A.github%2Fworkflows+language%3AYAML&s=&type=Code
