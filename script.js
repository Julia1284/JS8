
function sumInput (){
    let arr = [];
    //let reg = /^\d+$/ регулярное выражение для проверки на числа
    for (i=0; ; i++){
    arr.push (prompt ('Введите число!'))
    if (arr[i] === null) break
    else if (arr[i] == '') break
    }

arr.pop();// чтобы убрать последний пустой элемент 
arr.sort (function  (a,b){
    return a-b;
});
let sum = arr.map(i=>x+=i, x=0).reverse()[0]
document.querySelector ('div').innerHTML = arr
document.querySelector ('.sum').innerHTML = sum
}
sumInput()