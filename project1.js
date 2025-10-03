/*
    program kalkulator sederhana
    Req:
    -menggunakan variable ES6
    -menggunakan arrow function
    -menggunakan operator => +,/,-,*,**,%
*/
let a = 15
let b = 2

const tambah = (a,b) => {
    console.log("Tambah: ",a + b)
}
tambah(a, b)

const pengurangan = (a,b) => {
    console.log("Kurang: ",a - b)
}
pengurangan(a, b)

const perkalian = (a, b) => {
    console.log("perkalian: ",a * b)
}
perkalian(a, b) 

const pembagian = (a,b) => {
    console.log("Pembagian: ",a / b)
}
pembagian(26, 8)

let perpangkatan = (a, b) => {
    console.log("Perpangkatan: ",a**b)
}
perpangkatan(9, 2)

let modulus = (a, b) => {
    console.log("Modulus: ",a % b)
}
modulus(32,3)