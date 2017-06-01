var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists : function () {
  var str = '';
  for (p in this.playlists) {
    var p = p;
    var value = p + ": " + this.playlists[p].name + " - " +this.playlists[p].tracks.length;
    str += value + '\n';
    
  }
  return str;


},

printPlaylist : function () {
  var myArray =[];
  for (t in this.playlists) {
      var t = t;
      var value = this.playlists[t].tracks;
      for (i of value) {
        myArray.push(i + ": " + this.tracks[i].name + "by" + this.tracks[i].artist + "(" + this.tracks[i].album + ")");
      }
  return myArray;
 }

},
printTracks : function () {
  var str = ""
  for (t in this.tracks) {
      var t = t;
      console.log(t);
      var value = t + ": " + this.tracks[t].name + " by " + this.tracks[t].artist;
      str += value + '\n';
      
    }
  return str;
},



}

console.log(library.printPlaylists());
console.log(library.printPlaylist());
console.log(library.printTracks());
console.log(library.addTrackToPlaylist());



// var printPlaylists = function (library) {
//   var str = '';
//   for (p in library.playlists) {
//     var p = p;
//     var value = p + ": " + library.playlists[p].name + " - " +library.playlists[p].tracks.length;
//     str += value + '\n';
    
//   }
//   return str;
// }

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function (library) {
  var str = ""
  for (t in library.tracks) {
      var t = t;
      console.log(t);
      var value = t + ": " + library.tracks[t].name + " by " + library.tracks[t].artist;
      str += value + '\n';
      
    }
  return str;
}

//console.log(printTracks(library));

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
//console.log(library.tracks);




var printPlaylist = function (playlistId) {
  for (t in playlistId.playlists) {
      var t = t;
      var value = playlistId.playlists[t].tracks;
      for (i of value) {
        console.log(i + ": " + playlistId.tracks[i].name + "by" + playlistId.tracks[i].artist + "(" + playlistId.tracks[i].album + ")");
      }
 }

}
//printPlaylist(library);


// adds an existing track to an existing playlist


var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  console.log(library.playlists[playlistId].tracks);

}

//addTrackToPlaylist("t03", "p01");

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


var addTrack = function (name, artist, album) {
  var random = uid();
  return library.tracks[random] = {id: random,
    artist: artist,
    album: album};

}
//console.log(addTrack('',"adele", "hello" ));
//console.log(library);

// adds a playlist to the library

var addPlaylist = function (name) {
  return library.playlists[uid()] = {name: name};
}

//console.log(addPlaylist("adele"));
//console.log(library);
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
