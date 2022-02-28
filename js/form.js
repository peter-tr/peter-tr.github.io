//checks if all fields have been entered
function validation2() {
    //stores the inputted values by the user on the form
    var mc1 = document.getElementById("mc1");
    var mc2 = document.getElementById("mc2");
    var mc3 = document.getElementById("mc3");
 
    var datestart= document.getElementById("datestart").value;
    var dateend= document.getElementById("dateend").value;
    var name = document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var birth= document.getElementById("birth").value;
    var phone= document.getElementById("phone").value;
    var postcode= document.getElementById("postcode").value;
    var errormessage= document.getElementById("errormessage");

    var text;

    //checks if fields were entered - if one field not entered then error message appears, if all then form is submitted
    if(((mc1.checked == false) || (mc2.checked == false) || (mc3.checked == false)) == false || name.length==0 || phone.length==0 || email.length==0 || datestart.length==0 || dateend.length==0 || birth.length==0 || postcode.length==0){
        //field not entered, error message appears
        errormessage.style.padding= "3%"; //padding that was set to 0 on css now changed
        text= "Please answer all questions";
        errormessage.innerHTML= text;
        return false;
    }
    //all field entered, form is successfully
    alert("Your booking has been successfully submitted!");
    errormessage.innerHTML= "";
    return true;
}
//adapted from https://www.youtube.com/watch?v=C7NsIRhoWuE
//caculates the package suitable for the user
function validation(){

    // stores the value choosen by user
    var question1 = document.packagequiz.question1.value;
    var question2 = document.packagequiz.question2.value;
    var question3 = document.packagequiz.question3.value;

    var score = 0;

    //allocates points for choosen answer
    if (question1 == "Relaxing") {
        score= score+3;
    }

    if (question1 == "Adventurous") {
        score= score+2;
    }

    if (question1 == "Both") {
        score++;
    }
    if (question2 == "Innovative") {
        score= score+2;
    }

    if (question2 == "Erratic") {
        score= score+2;
    }
    if (question3 == "Yes") {
        score++;
    }

    var pictures = ["images/classic.JPEG", "images/winter.JPEG", "images/editedbackintime.jpg"];
    var result = ["The best package for you is classic", "The best package for you is winter", "The best package for you is rewind","Please fill in at least one question"];

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
