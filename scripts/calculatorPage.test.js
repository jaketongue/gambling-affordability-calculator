const methodsToTest = require('./calculatorPage');
const calculateValidatedAffordability = methodsToTest.calculateValidatedAffordability;
const incomeFunction = methodsToTest.incomeFunction;
const householdFunction = methodsToTest.householdFunction;
const additionalFunction = methodsToTest.additionalFunction;
const gamblingFunction = methodsToTest.gamblingFunction;

describe("Testing calculatorPage functionality", () => {

    test("Testing affordability and spending difference values are calculating the correct values", () => {
        const totalIncomeTest = 10;
        const totalHouseholdTest = 2;
        const totalAdditionalTest = 3;
        const totalGamblingTest = 4;
        const expectedTotalAffordability = (totalIncomeTest) - (totalHouseholdTest+totalAdditionalTest);
        const expectedTotalDifference = (expectedTotalAffordability) - (totalGamblingTest);

        const testStore = {
            totalIncome: totalIncomeTest,
            totalHousehold: totalHouseholdTest,
            totalAdditional: totalAdditionalTest,
            totalGambling: totalGamblingTest,
        };

        const result = calculateValidatedAffordability(testStore);

        expect(result.calculateAffordability).toEqual(expectedTotalAffordability);
        expect(result.calculateSpendingDifference).toEqual(expectedTotalDifference);
    })

    test("Testing total income value is the calculation of the correct values", () => {
        const salaryTest = 1;
        const bonusTest = 2;
        const otherTest = 3;
        const pensionTest = 4;
        const savingsTest = 5;
        const expectedTotal = (salaryTest+bonusTest+otherTest)-(pensionTest+savingsTest);

        const testStore = {
            salary: salaryTest,
            bonus: bonusTest,
            other: otherTest,
            pension: pensionTest,
            savings: savingsTest,
        };

        const result = incomeFunction(testStore);

        expect(result).toEqual(expectedTotal);
    })

    test("Testing total household spending value is the addition of the correct values", () => {
        const mortgageTest = 1;
        const rentTest = 2;
        const councilTest = 3;
        const utilitiesTest = 4;
        const techTest = 5;
        const foodTest = 6;
        const insuranceTest = 7;
        const expectedTotal = mortgageTest+rentTest+councilTest+utilitiesTest+techTest+foodTest+insuranceTest;

        const testStore = {
            mortgage: mortgageTest,
            rent: rentTest,
            council: councilTest,
            utilities: utilitiesTest,
            tech: techTest,
            food: foodTest,
            insurance: insuranceTest,
        };

        const result = householdFunction(testStore);

        expect(result).toEqual(expectedTotal);
    })

    test("Testing total additional spending value is the addition of the correct values", () => {
        const travelTest = 1;
        const loanTest = 2;
        const leisureTest = 3;
        const othershopTest = 4;
        const expectedTotal = travelTest+loanTest+leisureTest+othershopTest;

        const testStore = {
            travel: travelTest,
            loan: loanTest,
            leisure: leisureTest,
            othershop: othershopTest
        };

        const result = additionalFunction(testStore);

        expect(result).toEqual(expectedTotal);
    })

    test("Testing total gambling value is the addition of the correct values", () => {
        const sportsTest = 1;
        const gamingTest = 2;
        const othergamTest = 3;
        const expectedTotal = sportsTest+gamingTest+othergamTest;

        const testStore = {
            sports: sportsTest,
            gaming: gamingTest,
            othergam: othergamTest
        };

        const result = gamblingFunction(testStore);

        expect(result).toEqual(expectedTotal);
    })

})

