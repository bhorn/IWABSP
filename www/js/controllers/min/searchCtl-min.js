angular.module("app.controllers").controller("searchCtl",function(c,o,r){c.searchTracks=function(){r.searchFor(c.searchText,"track").then(function(o){console.log(o),c.foundTracks=o.tracks.items},function(c){console.err(c)})}});