var tvShows = ["AQUA TEEN HUNGER FORCE", "HARVEY BIRDMAN", "SEALAB 2021", "THE VENTURE BROS", "TIM AND ERIC AWESOME SHOW", "METALOCALYPSE", "BRAK SHOW", "ERIC ANDRE SHOW"];


function displayShowInfo() {

    $("#tvShowsGifDiv").empty();
    

    var show = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        show + "&api_key=6DP0C39w7A0vMdsxEYHGBTP9kW0dAWeh&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {


        var results = response.data;


        for (var i = 0; i < results.length; i++) {

            var gifDiv = $("<div class='gifDiv'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var showImage = $("<img>");
            showImage.attr("src", results[i].images.fixed_height_still.url);
            showImage.attr("data-still", results[i].images.fixed_height_still.url);
            showImage.attr("data-animate", results[i].images.fixed_height.url);
            showImage.attr("data-state", "still");
            showImage.attr("class", "gif");

            gifDiv.prepend(p);
            gifDiv.prepend(showImage);

            $("#tvShowsGifDiv").prepend(gifDiv);

        };
    });
};


function changeStateOfGif() {

    var state = $(this).attr('data-state');

    if (state === 'still') {

        $(this).attr('src', $(this).attr('data-animate'));
        $(this).attr('data-state', 'animate')
    
    } else {
    
        $(this).attr('src', $(this).attr('data-still'));
        $(this).attr('data-state', 'still')
    
    };
};


function renderButtons() {


    $("#tvShowButtonsDiv").empty();

    for (var i = 0; i < tvShows.length; i++) {


        var a = $("<button>");

        a.addClass("btn btn-dark tvShowButton");

        a.attr("data-name", tvShows[i]);

        a.text(tvShows[i]);

        $("#tvShowButtonsDiv").append(a);

    };
};


$("#tvShowAdd").on("click", function (event) {

    event.preventDefault();

    var newShow = $("#tvShowInput").val().trim();


    tvShows.push(newShow);


    renderButtons();

    $("#tvShowInput").val('');
});


$(document).on("click", ".tvShowButton", displayShowInfo);

$(document).on("click", ".gif", changeStateOfGif);

renderButtons();