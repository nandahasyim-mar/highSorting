function sorting(array) {
  // your code here
  let data = array.toString()

  let temp = []
  for (let i = 0; i < data.length; i++) {
    temp.push (data[i])
  } 
  for (let i = 0; i < temp.length; i++) {
    for (let j = i + 1; j < temp.length; j++) {
      if (temp[j] > temp[i]) {
        let base = temp[i]
        temp[i] = temp[j]
        temp[j] = base
      }
    }
  } 
  let result = ''
  for (let i = 0; i < temp.length; i++) {
    result += temp[i]
  }
  
  return Number(result)
}

console.log(sorting(123456789)) // (987654321)