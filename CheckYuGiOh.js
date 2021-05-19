let value = prompt("Enter a value:")
const checkYuGiOh = (n) =>{
    let arr = []
    if(isNaN(n)){
        console.log(`Invalid Parameter: ${n}`)
    }else {
        for (let i= 1; i<= n; i++){
            arr.push(i)
            
        }
    }
    for (let index = 0; index < arr.length; index++) {
        if ((arr[index] % 2 == 0) && (arr[index] % 3 == 0) && (arr[index] % 5 == 0)) {
            arr[index] = "yu-gi-oh"
        } else if ((arr[index] % 2 == 0) && (arr[index] % 3 == 0)) {
            arr[index] = "yu-gi"
        } else if ((arr[index] % 2 == 0) && (arr[index] % 5 == 0)) {
            arr[index] = "yu-oh"
        } else if ((arr[index] % 3 == 0) && (arr[index] % 5 == 0)) {
            arr[index] = "gi-oh"
        } else if (arr[index] % 2 == 0) {
            arr[index] = "yu"
        } else if (arr[index] % 3 == 0) {
            arr[index] = "gi"
        } else if (arr[index] % 5 == 0) {
            arr[index] = "oh"
        }
    }
    return arr
}
console.log(checkYuGiOh(value))
