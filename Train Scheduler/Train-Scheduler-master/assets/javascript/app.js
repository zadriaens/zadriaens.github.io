//  Initialize Firebase
    $(document).ready(function(){
      var config = {
        apiKey: "AIzaSyBsuBOoL5gfPZmRQow7ZDXBnN9Xg9yWb8U",
        authDomain: "batcavearchive-8766c.firebaseapp.com",
        databaseURL: "https://batcavearchive-8766c.firebaseio.com",
        projectId: "batcavearchive-8766c",
        storageBucket: "batcavearchive-8766c.appspot.com",
        messagingSenderId: "214345253617"
  };
  firebase.initializeApp(config);
var database = firebase.database();


$("#add-train-btn").on("click", function(event) {

  
  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var trainStart = $("#time-input").val().trim();
  var trainFrequency = $("#frequency-input").val().trim();


  var newTrain = {
    name: trainName ,
    destination: trainDestination,
    start: trainStart,
    frequency: trainFrequency
  };

  
  database.ref().push(newTrain);

   
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.start);
  console.log(newTrain.frequency);
  
  alert("Train successfully added");

 
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");
});


database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainStart = childSnapshot.val().start;
  var trainFrequency  = parseInt(childSnapshot.val().frequency);

  console.log(trainName);
  console.log(trainDestination);
  console.log(trainStart);
  console.log(trainFrequency);
   
  var startDateTime = moment();
  var trainStartTime = moment(trainStart,"HH:mm");
  console.log(trainStartTime);
  startDateTime.minutes(trainStartTime.minutes()).hours(trainStartTime.hours());
  console.log(startDateTime);
  var currentTime = moment();
  var arrivalTime;
  for(arrivalTime = startDateTime; arrivalTime.isBefore(currentTime); arrivalTime.add(trainFrequency,'m')){
  
  }
  var milisecondsAway = arrivalTime.diff(currentTime);
  var minutesAway = moment.duration(milisecondsAway);
  var timeAway = minutesAway.days() + " Days " + minutesAway.hours() + " Hours " + minutesAway.minutes() + " Minutes";
 
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination  + "</td><td>" +
 trainFrequency + "</td><td>" +  arrivalTime.format('ddd, MMM DD YYYY HH:mm') + "</td> <td> "+ timeAway+"</td></tr>");
});
});
