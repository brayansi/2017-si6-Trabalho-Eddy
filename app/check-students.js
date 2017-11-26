const students = require('../db/studentsDB.json')

function getStudentId() {
    return process.argv[2] || null
}

function byId(student) {
    return student.id == getStudentId()
}

function getAverage(grades) {
    return grades.reduce((a, b) => a + b) / grades.length
}

function getStatus(average) {
    let status = 'Approved'
    
    if(average < 50) {
        status = 'Not Approved'
    }
    else if(average < 60) {
        status = 'Final'
    }

    return status
}

const student = students.find(byId)

// if (student) {
//     const average = getAverage(student.grades)
//     const status = getStatus(average)

//     console.log('Name: ' + student.name)
//     console.log('Average: ' + average)
//     console.log('Status: ' + status)
// }
// else {
//     console.log('Student not found!')
// }

module.exports = {
    getStudentStatus (id) {
        let student = students.find(student => student.id == id)
        if(student) {
            const average = getAverage(student.grades)
            student.average = average
            student.status = getStatus(average)
        }
        return student
    }
}