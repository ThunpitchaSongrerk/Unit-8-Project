$("button").click(function() {
    let interests = $(".weekend").val();
    let moods = $(".mood").val();

    if (interests === "Party" && moods === "Cheerful" || interests === "party" && moods === "cheerful" || interests === "PARTY" && moods === "CHEERFUL") {
        $(".result").text("Since you " + interests + " on the weekends and your usual mood is " + moods + ", you are a Golden Retriever!" + " (◕‿◕)	");
        $(".dogs").attr("src", "https://i.imgur.com/yEvTzPe.gif");
        $(".dogs").show();
    } else if (interests === "Sleep" && moods === "Cheerful" || interests === "sleep" && moods === "cheerful" || interests === "SLEEP" && moods === "CHEERFUL") {
        $(".result").text("Since you " + interests + " on the weekends and your usual mood is " + moods + ", you are a Greyhound!" + " (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧");
        $(".dogs").attr("src", "https://thumbs.gfycat.com/AlienatedAjarCottonmouth-max-1mb.gif");
        $(".dogs").show();
    } else if (interests === "Party" && moods === "Whimsical" || interests === "party" && moods === "whimsical" || interests === "PARTY" && moods === "WHIMSICAL") {
        $(".result").text("Since you " + interests + " on the weekends and your usual mood is " + moods + ", you are a Siberian Husky!" + " („• ֊ •„)");
        $(".dogs").attr("src","https://media1.tenor.com/images/eaccdc8a3ed89ae8385579ea03223417/tenor.gif?itemid=5397431");
        $(".dogs").show();
    } else if (interests === "Sleep" && moods === "Whimsical" || interests === "sleep" && moods === "whimsical" || interests === "SLEEP" && moods === "WHIMSICAL") {
        $(".result").text("Since you " + interests + " on the weekends and your usual mood is " + moods + ", you are a Shiba Inu!" + " (≧◡≦)");
        $(".dogs").attr("src", "https://media.tenor.com/images/9e313797981c9703675b6e9b490bde32/tenor.gif");
        $(".dogs").show();
    } else {
        $(".result").text("Oops! something went wrong, please try again");
    }
});

$(".animals").hover(function() {
    $(".animals").css("background-color", "#e8e78e");
    $(".animals").css("color", "#4cc6d4");
    $(".animals").css("border", "green ridge 10px");
});
$(".animals").mouseleave(function() {
    $(".animals").css("background-color", "");
    $(".animals").css("color", "");
    $(".animals").css("border", "");
});

$(".intro").hover(function() {
    $(".intro").attr("src", "https://64.media.tumblr.com/a016a89537f5d034ba9b2068d03bcfa7/tumblr_n1h5icpKMH1stgzx6o1_400.gifv");
    $(".intro").css("border", "white solid 15px");
});
$(".intro").mouseleave(function() {
    $(".intro").attr("src", "https://i.pinimg.com/originals/02/5c/f8/025cf852fd5eae988830917687026afb.jpg");
    $(".intro").css("border", "black dotted 5px");
});