//caculates the package suitable for the user
function validation(){

    // initialise the variables that reference the survey answers
    var question1 = document.packagequiz.question1.value;
    var question2 = document.packagequiz.question2.value;
    var question3 = document.packagequiz.question3.value;

    var score = 0;

    //sets points for each question
    if (question1 == "Relaxing") {
        score = score + 3;
    }

    if (question1 == "Adventurous") {
        score = score + 2;
    }

    if (question1 == "Both") {
        score = score + 1;
    }
    if (question2 == "Innovative") {
        score = score + 2;
    }

    if (question2 == "Erratic") {
        score = score + 2;
    }
    if (question3 == "Yes") {
        score = score + 1;
    }

    //initialise array of images directory and result description
    var pictures = ["images/uranusMinCut.png", "images/jupiterMinCut.png", "images/earthMinCut.png"];
    var result = ["The best package for you is Uranus", "The best package for you is Jupiter", "The best package for you is Earth","Please fill in questions"];

    var selecter;

    //allocates score to a package value
    if (score == 0) {
        selecter = 3;
    }

    if (score == 1 || score == 2) {
        selecter = 2;
    }

    if (score == 3 || score == 4) {
        selecter = 1;
    }

    if (score == 5 || score == 6) {
        selecter = 0;
    }

    //display relevant content on the website
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = result[selecter];
    document.getElementById("picture").src = pictures[selecter];
}
