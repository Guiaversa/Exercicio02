function insert(num){

    let numero = document.getElementById('currentOperatinon').innerHTML
    document.getElementById('currentOperatinon').innerHTML = numero + num
    num =""
}

function clean(){
    document.getElementById('currentOperatinon').innerHTML = ""
}

function del(){
    let numero = document.getElementById('currentOperatinon').innerHTML
    document.getElementById('currentOperatinon').innerHTML = numero.substring(0, numero.length -1)    
}

function calculate(){
    let numero = document.getElementById('currentOperatinon').innerHTML
    if(numero){
        document.getElementById('currentOperatinon').innerHTML =eval(numero)
    } else document.getElementById('currentOperatinon').innerHTML = "0"

}



document.addEventListener("keydown", function(e){

        if (e.key == 1) {
            insert(e.key)
        } else if (e.key == 2) {
            insert(e.key)
        } else if (e.key == 3) {
            insert(e.key)
        } else if (e.key == 4) {
            insert(e.key)
        } else if (e.key == 5) {
            insert(e.key)
        } else if (e.key == 6) {
            insert(e.key)
        } else if (e.key == 7) {
            insert(e.key)
        } else if (e.key == 8) {
            insert(e.key)
        } else if (e.key == 9) {
            insert(e.key)
        } else if (e.key== 0) {
            insert(e.key)
        } else if (e.key === "+") {
            insert(e.key)
        } else if (e.key === "-") {
            insert(e.key)
        } else if (e.key === "*") {
            insert(e.key)
        } else if (e.key === "/") {
            insert(e.key)
        } else if (e.key === ".") {
            insert(e.key)
        } else if (e.key === "Enter") {
            calculate()
        } else if (e.key === "Backspace") {
            del()
        }       
})
