// Description
//   A Hubot script that respond the URL of the specified address
//
// Configuration:
//   HUBOT_YAHOO_GEOCODER_APP_ID
//
// Commands:
//   hubot yahoo-geocoder <address> - respond the URL of the specified address
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var APP_ID, parseString, request, url;
  url = require('url');
  request = require('request');
  parseString = require('xml2js').parseString;
  APP_ID = process.env.HUBOT_YAHOO_GEOCODER_APP_ID;
  return robot.respond(/yahoo-geocoder (.+)$/i, function(res) {
    var query, u;
    query = res.match[1];
    u = url.format({
      protocol: 'http',
      host: 'contents.search.olp.yahooapis.jp',
      pathname: '/OpenLocalPlatform/V1/contentsGeoCoder'
    });
    return request({
      method: 'GET',
      url: u,
      qs: {
        appid: APP_ID,
        query: query
      }
    }, function(err, _, body) {
      if (err != null) {
        return res.send(err);
      }
      return parseString(body, function(err, xml) {
        var lat, lng, name, _ref;
        if (err != null) {
          return res.send(err);
        }
        name = xml.YDF.Feature[0].Name;
        _ref = xml.YDF.Feature[0].Geometry[0].Coordinates[0].split(','), lng = _ref[0], lat = _ref[1];
        u = url.format({
          protocol: 'https',
          host: 'www.google.co.jp',
          pathname: "/maps/@" + lat + "," + lng + ",18z"
        });
        return res.send("" + name + " " + u);
      });
    });
  });
};
