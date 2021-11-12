const gradingStudents = (grades) => {
    let results = []
    grades.forEach(n => {
        if (n < 38) {
            results.push(n)
        } else if (n%5 === 0) {
             results.push(n)
        } else {
            const nextMultiple = Math.ceil(n/5)*5;
            if (nextMultiple - n < 3) {
                 results.push(nextMultiple)
            } else {
                 results.push(n)
            }
        }
    });
    return results
}

grades = [84, 29, 57]
//[85, 29,  57]
console.log(gradingStudents(grades));