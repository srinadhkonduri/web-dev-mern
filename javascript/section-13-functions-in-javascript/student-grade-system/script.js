// student grade system

function studentGradeSystem(totalMarks, obtainedMarks, classAverage){

    let passingCriteria = totalMarks * 0.5;
    let exceptionalCriteria = totalMarks * 0.8;
    let hasPassed = obtainedMarks >= passingCriteria;
    let hasPerformedExceptionally = obtainedMarks >= exceptionalCriteria;
    let isAboveAverage = obtainedMarks > classAverage;


    // now we are gonna return in objects
    return {
        hasPassed,
        hasPerformedExceptionally,
        isAboveAverage
    }
}

const result = studentGradeSystem(500,410,350);
console.log(result);
