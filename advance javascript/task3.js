// const students=[
//             { name: 'Alice', score: 85 },
//             { name: 'Bob', score: 92 },
//             { name: 'Charlie', score: 78 }
//           ]
//           students.forEach(student.score,"Bob")
//           console.log(score)
function getStudentScore(students, studentName) {
    const studentMap = new Map();
  
    students.forEach(student => {
      studentMap.set(student.name, student.score);
    });
  
    return studentMap.get(studentName);
  }
  
  const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 }
  ];
  
  const score = getStudentScore(students, 'Bob');
  console.log(score);