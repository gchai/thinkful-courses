function findLowestScoringStudent(students) {
    if (!students.length) return null
    let result = students.sort((studentA, studentB) => {
        return studentA.score - studentB.score
    })
    return result[0]
}

module.exports = findLowestScoringStudent;