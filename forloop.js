const a = {
  "Sachin": 99,
  "Ravi": 89,
  "Sanjay": 78
}

for (let name in a) {
  console.log("Marks of", name, " is ", a[name])
}


for (let b of "Sachin") {
  console.log(b)
}