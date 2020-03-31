function calculateValidatedAffordability(testStore = "") {
    var totalIncome = testStore.totalIncome || document.getElementById('reviewTotalIncome').value;
    var totalHousehold = testStore.totalHousehold || document.getElementById('reviewTotalHousehold').value;
    var totalAdditional = testStore.totalAdditional || document.getElementById('reviewTotalAdditional').value;
    var totalGambling = testStore.totalGambling || document.getElementById('reviewTotalGambling').value;
    
    if (totalIncome == null || totalIncome == "" || totalIncome == "0" || totalHousehold == null || totalHousehold == "" || totalAdditional == null || totalAdditional == "" || totalGambling == null || totalGambling == "") {
      alert("Please enter your financial details, so we can estimate how much you can afford to gamble with us or you can choose to skip the affordability check.");
      return false;
    
    } else {
        var reviewTotalIncome = parseInt(totalIncome);
        var reviewTotalHousehold = parseInt(totalHousehold);
        var reviewTotalAdditional = parseInt(totalAdditional);
        var reviewTotalGambling = parseInt(totalGambling);

        var calculateAffordability = (reviewTotalIncome) - (reviewTotalHousehold + reviewTotalAdditional + reviewTotalGambling);
        var calculateSpendingDifference = (calculateAffordability - reviewTotalGambling);

        if (testStore !== "") {
            return {
                calculateAffordability,
                calculateSpendingDifference
            };
        }

        localStorage.setItem("disposableIncome", calculateAffordability);
        localStorage.setItem("spendingDifference", calculateSpendingDifference);
        localStorage.setItem("reviewTotalGambling", reviewTotalGambling);

        window.location.href = "./summaryPage.html";
    }
}

function incomeFunction(testStore = "") {
    var salary = testStore.salary || parseInt(document.getElementById('salary').value);
    var bonus = testStore.bonus || parseInt(document.getElementById('bonus').value);
    var other = testStore.other || parseInt(document.getElementById('other').value);
    var pension = testStore.pension || parseInt(document.getElementById('pension').value);
    var savings = testStore.savings || parseInt(document.getElementById('savings').value);
    var totalincome = (salary + bonus + other) - (pension + savings);

    if (testStore !== "") {
        return totalincome;
    }

    document.getElementById("totalincome").value = totalincome;
    document.getElementById("reviewTotalIncome").value = totalincome;
}

function householdFunction(testStore = "") {
    
    var mortgage = testStore.mortgage || parseInt(document.getElementById('mortgage').value);
    var rent = testStore.rent || parseInt(document.getElementById('rent').value);
    var council = testStore.council || parseInt(document.getElementById('council').value);
    var utilities = testStore.utilities || parseInt(document.getElementById('utilities').value);
    var tech = testStore.tech || parseInt(document.getElementById('tech').value);
    var food = testStore.food || parseInt(document.getElementById('food').value);
    var insurance = testStore.insurance || parseInt(document.getElementById('insurance').value);
    var totalhousehold = (mortgage + rent + council + utilities + tech + food + insurance);

    if (testStore !== "") {
        return totalhousehold;
    }
    
    document.getElementById("totalhousehold").value = totalhousehold;
    document.getElementById("reviewTotalHousehold").value = totalhousehold;
}

function additionalFunction(testStore = "") {

    var travel = testStore.travel || parseInt(document.getElementById('travel').value);
    var loan = testStore.loan || parseInt(document.getElementById('loan').value);
    var leisure = testStore.leisure || parseInt(document.getElementById('leisure').value);
    var othershop = testStore.othershop || parseInt(document.getElementById('othershop').value);
    var totaladditional = (travel + loan + leisure + othershop);

    if (testStore !== "") {
        return totaladditional;
    }

    document.getElementById("totaladditional").value = totaladditional;
    document.getElementById("reviewTotalAdditional").value = totaladditional;
}

function gamblingFunction(testStore = "") {
    var sports = testStore.sports || parseInt(document.getElementById('sports').value);
    var gaming = testStore.gaming || parseInt(document.getElementById('gaming').value);
    var othergam = testStore.othergam || parseInt(document.getElementById('othergam').value);
    var totalgambling = (sports + gaming + othergam);
    
    if (testStore !== "") {
        return totalgambling;
    }

    document.getElementById("totalgambling").value = totalgambling;
    document.getElementById("reviewTotalGambling").value = totalgambling;
}

const numInputs = document.querySelectorAll('input[type=number]')

    numInputs.forEach(function(input) {
    input.addEventListener('change', function(e) {
        if (e.target.value == '') {
        e.target.value = 0
    }
  })
})

module.exports = {
    calculateValidatedAffordability,
    incomeFunction,
    householdFunction,
    additionalFunction,
    gamblingFunction
};
