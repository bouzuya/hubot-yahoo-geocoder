# hubot-yahoo-geocoder

A Hubot script that respond the URL of the specified address

## Installation

    $ npm install git://github.com/bouzuya/hubot-yahoo-geocoder.git

or

    $ # TAG is the package version you need.
    $ npm install 'git://github.com/bouzuya/hubot-yahoo-geocoder.git#TAG'

## Example

    bouzuya> hubot help yahoo-geocoder
      hubot> hubot yahoo-geocoder <address> - respond the URL of the specified address

    bouzuya> hubot yahoo-geocoder 東京都
      hubot> 東京都 https://www.google.co.jp/maps/@35.68948738,139.69170576,18z

## Configuration

See [`src/scripts/yahoo-geocoder.coffee`](src/scripts/yahoo-geocoder.coffee).

## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-yahoo-geocoder
[travis-badge]: https://travis-ci.org/bouzuya/hubot-yahoo-geocoder.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-yahoo-geocoder
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-yahoo-geocoder.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-yahoo-geocoder
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-yahoo-geocoder.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
