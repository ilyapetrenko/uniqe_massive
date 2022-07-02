let arr = []
for (i=0; i<24; i++){
    arr[i] = Math.round(Math.random()*24)+1
}
console.log(arr)
//генерация из неуникального arr в уникальный result
let result = []
for (let uniqueNumber of arr) {
    if (!result.includes(uniqueNumber)) {
        result.push(uniqueNumber)
    }
    else {
        while (result.includes(uniqueNumber)) {
            uniqueNumber = Math.round(Math.random() * 24)+1
        }
        result.push(uniqueNumber)
    }
}
console.log(result)