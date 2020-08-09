var currentTab = 0;
showTab(currentTab);

function showTab (n) {
    var x = document.getElementsByClassName("tab"); // name of the main form
    x[n].style.display = "block";

    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n==(x.length - 1)){
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById(nextBtn).innerHTML = "Next";
    }
    fixStepIndicator(n)  //to display correct step
}

function nextPrev(n){
    var x = document.getElementsByClassName("tab"); // name of the main form
    if (n==1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length){
        document.getElementById("form").submit(); //form Name
        return false;
    }

    showTab(currentTab);
}

function validateForm(){
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab"); // name of the main form
    y = document.getElementsByClassName("input") //input of the form

    for(i = 0; i<y.length; i++){
        if (y[i].value == ""){
            y[i].className += " invalid";
            valid = false;
        }
    }

    if(valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish"; // An indicator span to identify the step completed and know current status
    }
    return valid;
}

function fixStepIndicator (n) {
    var i, x = document.getElementsByClassName("steps");
    for (i=0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "")
    }
    x[n].className += " active";
}



//OVERLAY IF NEEDED

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  } 


// select onclick
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

