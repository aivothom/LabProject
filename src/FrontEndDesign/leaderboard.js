function setUpLeaderboard() {
    var playerName = "Player Name";
    var listOfAll = getListOfAllScores().sort(sortNumber);
    var top5 = topFive(listOfAll);
    var score = 20;
    document.getElementById("first").innerHTML = playerName1+": "+score;
    document.getElementById("second").innerHTML = playerName2+": "+score;
    document.getElementById("third").innerHTML = playerName3+": "+score;
    document.getElementById("fourth").innerHTML = playerName4+": "+score;
    document.getElementById("fifth").innerHTML = playerName5+": "+score;
}

var jsonFile =
function getListOfAllScores(jsonFile) {
    return [5, 2, 6, 23, 63, 24, 63, 35, 24, 53, 95, 52, 73, 84]
};
function topFive(list){
    list = list.slice(list.length-5, list.length)

}









function sortNumber(a,b) {
    return a - b;
}