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

grades = [4, 67, 73, 38, 33]
console.log(gradingStudents(grades));