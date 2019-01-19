
var items = ["If you add up all the presents you get 364 which is the amount of days in a year minus Christmas.", "There are really 12 Days of Christmas.", "Although the exact origins of the song are unknown it is highly probable that it began as a memory and forfeit game for twelfth night celebrations.", "It was originally a poem with roots that predate the 19th Century.", "The poem wasn't set to music until the 20th Century.", "It has been parodied numerous times."];
var l = 0;

    function nextItem() {
        l += 1;
        l = l % items.length;
        return items[l];
}

    var b = document.getElementsByClassName("container");
        for (var i = 0; i < b.length; i++) {
          b[i].onclick = displayFact();
        }

    function displayFact(){
        //document.getElementById("facts").innerHTML = a;
        var c = document.getElementsByClassName("facts");
        for (var i = 0; i < c.length; i++) {
          c[i].innerHTML = nextItem();
        }
    }