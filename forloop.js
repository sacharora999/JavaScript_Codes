const studMarks = {
  "A": 90,
  "B": 78,
  "C": 79,
  "D": 87
}

console.log("====Method 1====")
for (let stud in studMarks) {
  let marks = studMarks[stud]
  console.log(marks)
}

console.log("====Method 2====")
for (let [key,value] of Object.entries(studMarks))
{
  console.log(value) 
}

console.log("====Method 3====")
for (let name in studMarks){
  console.log(name , studMarks[name])
}

console.log("====Method 4====")
for (let i=0; i < Object.keys(studMarks).length; i++){
  console.log(studMarks[Object.keys(studMarks)[i]])
}