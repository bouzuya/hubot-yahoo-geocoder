# Description
#   A Hubot script that respond the URL of the specified address
#
# Configuration:
#   HUBOT_YAHOO_GEOCODER_APP_ID
#
# Commands:
#   hubot yahoo-geocoder <address> - respond the URL of the specified address
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  url = require 'url'
  request = require 'request'
  {parseString} = require 'xml2js'

  APP_ID = process.env.HUBOT_YAHOO_GEOCODER_APP_ID

  robot.respond /yahoo-geocoder (.+)$/i, (res) ->
    query = res.match[1]
    u = url.format
      protocol: 'http'
      host: 'contents.search.olp.yahooapis.jp'
      pathname: '/OpenLocalPlatform/V1/contentsGeoCoder'
    request
      method: 'GET'
      url: u
      qs:
        appid: APP_ID
        query: query
    , (err, _, body) ->
      return res.send(err) if err?
      parseString body, (err, xml) ->
        return res.send(err) if err?
        name = xml.YDF.Feature[0].Name
        [lng, lat] = xml.YDF.Feature[0].Geometry[0].Coordinates[0].split ','
        u = url.format
          protocol: 'https'
          host: 'www.google.co.jp'
          pathname: "/maps/@#{lat},#{lng},18z"
        res.send "#{name} #{u}"
