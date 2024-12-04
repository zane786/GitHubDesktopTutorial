const homeScoreDoc = document.getElementById("homeScoreText")
const guestScoreDoc = document.getElementById("guestScoreText")

const maxScore = 99

let homeScore = 0
let guestScore = 0

// Make it so if the score is less than 10, it returns the score with a "0" added in front of it
function formatScore(whichScore) {
    return whichScore < 10 ? "0" + whichScore : whichScore
}


function changeScore(team, amount) {
    if(team === "home" && amount + homeScore <= maxScore) {
        homeScore += amount
        return homeScoreDoc.innerText = formatScore(homeScore)
    } else if(team === "guest" && amount + guestScore <= maxScore) {
        guestScore += amount
        return guestScoreDoc.innerText = formatScore(guestScore)
    }
}


function oneHome() { changeScore("home", 1) }
function twoHome() { changeScore("home", 2) }
function threeHome() { changeScore("home", 3) }

function oneGuest() { changeScore("guest", 1) }
function twoGuest() { changeScore("guest", 2) }
function threeGuest() { changeScore("guest", 3) }



function resetScores() {
    guestScore = 0
    homeScore = 0
    guestScoreDoc.innerText = "00"
    homeScoreDoc.innerText = "00";
}