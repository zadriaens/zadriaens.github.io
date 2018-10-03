require("dotenv").config();

var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var request = require("request");
var secondCommand = process.argv[3];
var fs = require("fs");

var spotify = new Spotify({
  id: keys.spotify.id, 
  secret: keys.spotify.secret
});


// CONCERT concert-this
var concert = function (artist) {
  var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"; 
  request(url,function(err,response,body){
  var data = JSON.parse(body);
  for (var i = 0; i < data.length; i++) {
      console.log('================ Concert Info ================');
      console.log(data[i].venue.city + ", " + data[i].venue.name + ", " + data[i].datetime);
      console.log('==============================================');
  } 
  })    
}

// SONG spotify-this-song
function song(songName){
  spotify.search({ type: 'track', query: songName }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  var songData = data.tracks.items[0] 
  var song = {
    Name: songData.name,
    Preview: songData.preview,
    Album: songData.album.name,
    Artist: songData.artists[0].name
  }
  console.log('================ Song Info ================');
  console.log(song);
  console.log('==================THE END==================');
  });
}

// OMDB movie-this
function movie() {
  var movieName = secondCommand;
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&apikey=trilogy";
  request(queryUrl, function (error, response, body) {
      if (!error && response.statusCode === 200) {
          var body = JSON.parse(body);

          console.log('================ Movie Info ================');
          console.log("Title: " + body.Title);
          console.log("Release Year: " + body.Year);
          console.log("IMdB Rating: " + body.imdbRating);
          console.log("Country: " + body.Country);
          console.log("Language: " + body.Language);
          console.log("Plot: " + body.Plot);
          console.log("Actors: " + body.Actors);
          console.log("Rotten Tomatoes Rating: " + body.Ratings[2]);
          console.log("Rotten Tomatoes URL: " + body.tomatoURL);
          console.log('================== THE END =================');

      } else {
          console.log("Error occurred.")
      }
      //Response if user does not type in a movie title
      if (movieName === "Mr. Nobody") {
          console.log("-----------------------");
          console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
          console.log("It's on Netflix!");
      }
  });
}

// DO WHAT IT SAYS do-what-it-says
function random() {
  fs.readFile("random.txt", "utf8", function (error, data) {
      if (!error);
      console.log('================ Info ===================');
      console.log(data.toString());
      console.log('================ THE END ================');
  });
} 

if (process.argv[2]==="concert-this"){
  concert(process.argv.slice(3).join(" "))
}else if (process.argv[2]==="spotify-this-song"){
  song(process.argv.slice(3).join(" "))
}else if (process.argv[2]==="movie-this"){
  movie(process.argv.slice(3).join(" "))
}else if (process.argv[2]==="do-what-it-says"){
  random(process.argv.slice(3).join(" "))
}