function calculateValidatedAffordability() {

    var a = document.getElementById('reviewTotalIncome').value;
    var b = document.getElementById('reviewTotalHousehold').value;
    var c = document.getElementById('reviewTotalAdditional').value;
    var d = document.getElementById('reviewTotalGambling').value;
    if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "") {
      alert("Please fill in the required fields.");
      return false;
    
    } else {
        var reviewTotalIncome = parseInt(document.getElementById('reviewTotalIncome').value);
        var reviewTotalHousehold = parseInt(document.getElementById('reviewTotalHousehold').value);
        var reviewTotalAdditional = parseInt(document.getElementById('reviewTotalAdditional').value);
        var reviewTotalGambling = parseInt(document.getElementById('reviewTotalGambling').value);
        var nanChecker = typeof(NaN);
        if (true){
            var calculateAffordability = (reviewTotalIncome) - (reviewTotalHousehold + reviewTotalAdditional + reviewTotalGambling);
            var calculateSpendingDifference = (calculateAffordability - reviewTotalGambling);
    
            localStorage.setItem("disposableIncome", calculateAffordability);
            localStorage.setItem("spendingDifference", calculateSpendingDifference);
            localStorage.setItem("reviewTotalGambling", reviewTotalGambling);
    
            window.location.href = "./summaryPage.html";

        } else {
            alert('Oops. Something went wrong!');
        }
    }
}


function incomeFunction() {

    var salary = parseInt(document.getElementById('salary').value);
    var bonus = parseInt(document.getElementById('bonus').value);
    var other = parseInt(document.getElementById('other').value);
    var pension = parseInt(document.getElementById('pension').value);
    var savings = parseInt(document.getElementById('savings').value);
    var totalincome = (salary + bonus + other) - (pension + savings);

    document.getElementById("totalincome").value = totalincome;
    document.getElementById("reviewTotalIncome").value = totalincome;
}

function householdFunction() {
    
    var mortgage = parseInt(document.getElementById('mortgage').value);
    var rent = parseInt(document.getElementById('rent').value);
    var council = parseInt(document.getElementById('council').value);
    var utilities = parseInt(document.getElementById('utilities').value);
    var tech = parseInt(document.getElementById('tech').value);
    var food = parseInt(document.getElementById('food').value);
    var insurance = parseInt(document.getElementById('insurance').value);
    var totalhousehold = (mortgage + rent + council + utilities + tech + food + insurance);
    
    document.getElementById("totalhousehold").value = totalhousehold;
    document.getElementById("reviewTotalHousehold").value = totalhousehold;
}

function additionalFunction() {

    var travel = parseInt(document.getElementById('travel').value);
    var loan = parseInt(document.getElementById('loan').value);
    var leisure = parseInt(document.getElementById('leisure').value);
    var othershop = parseInt(document.getElementById('othershop').value);
    var totaladditional = (travel + loan + leisure + othershop);

    document.getElementById("totaladditional").value = totaladditional;
    document.getElementById("reviewTotalAdditional").value = totaladditional;
}

function gamblingFunction() {
    
    var sports = parseInt(document.getElementById('sports').value);
    var gaming = parseInt(document.getElementById('gaming').value);
    var othergam = parseInt(document.getElementById('othergam').value);
    var totalgambling = (sports + gaming + othergam);
    
    document.getElementById("totalgambling").value = totalgambling;
    document.getElementById("reviewTotalGambling").value = totalgambling;
}