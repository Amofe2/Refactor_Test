//pulled data
const data = [
  { week: 1, hours: 17 },
  { week: 3, hours: 44 },
  { week: 2, hours: 7 },
  { week: 6, hours: 40 },
  { week: 5, hours: 12 },
];

let wrongData = "";

Refactor(data, 10);

function Refactor(dataObj, currentWeek) {
  if (Array.isArray(dataObj)) {
    var orderedData = dataObj.sort(
      (a, b) => parseInt(a.week) - parseInt(b.week)
    );

    var weeklyHours = [];

    for (let week = orderedData[0].week; week <= currentWeek; week++) {
      var value = orderedData.find((x) => x.week == week);

      if (value != undefined) {
        weeklyHours.push(value.hours);
      } else {
        weeklyHours.push(0);
      }
    }
    return weeklyHours;
    
  }
  if (dataObj.constructor !== Array) {
    //do nothing
  }
}

describe("TEST THE REFACTOR FUNCTION", () => {
    
  it("TEST WHEN DATA AND WEEK NUMBERS ARE ENTERED CORRECTLY", () => {
    const result1 = Refactor(data, 5);
    // console.log(result);
    const result2 = Refactor(data, 6);
    const result3 = Refactor(data, 10);
    //ASSERTIONS
    assert.deepEqual(result1, [17, 7, 44, 0, 12], "Correct");
    assert.deepEqual(result2, [17, 7, 44, 0, 12, 40], "Correct");
    assert.deepEqual(result3, [17, 7, 44, 0, 12, 40, 0, 0, 0, 0], "Correct");
    cy.log("**********THIS TEST PASSED AS EXPECTED********");
  });

  it("TEST WHEN DATA IS CORRECT AND WEEK NUMBER IS INCORRECT, RESULT SHOULD BE EMPTY ARRAY", () => {
    const result1 = Refactor(data, 0.5);
    const result2 = Refactor(data, 0);
    const result3 = Refactor(data, -1);
    //ASSERTIONS
    assert.deepEqual(result1, [], "Correct");
    assert.deepEqual(result2, [], "Correct");
    assert.deepEqual(result3, [], "Correct");

    cy.log("**********THIS TEST PASSED AS EXPECTED********");
  });

  it("TEST WHEN DATA IS INCORRECT AND WEEK NUMBER IS CORRECT, RESULT SHOULD BE UNDEFINED", () => {
    const result1 = Refactor(wrongData, 5);
    const result2 = Refactor(wrongData, 10);
    const result3 = Refactor(wrongData, 1);
    //ASSERTIONS
    assert.deepEqual(result1, undefined, "Correct");
    assert.deepEqual(result2, undefined, "Correct");
    assert.deepEqual(result3, undefined, "Correct");

    cy.log("**********THIS TEST PASSED AS EXPECTED********");
  });
});
