// OPERATOR MATEMATIKA
// +  -> Pertambahan
// -  -> Pengurangan
// *  -> Perkalian
// ** -> Exponensial
// /  -> Pembagian
// %  -> Sisa Bagi

let n1 = 10;
let n2 = 6;
let n3 = 5;
let result;

// PERTAMBAHAN
result = n1 + n2;
document.writeln(`${n1} + ${n2} = ${result} <br/>`);

// PENGURANAGAN
result = n2 - n3;
document.writeln(`${n2} - ${n3} = ${result} <br/>`)

// PERKALIAN
result = n1 * n3;
document.writeln(`${n1} + ${n3} = ${result} <br/>`)

// EXPONENSIAL
result = n1 ** n1
document.writeln(`${n1} ** ${n1} = ${result} <br/>`)

// PEMBAGIAN
result = n1 / n3;
document.writeln(` ${n2} / ${n3} = ${result} <br/>`)

// SISA BAGI
result = n2 % n3;
document.writeln(`${n2} % ${n3} = ${result} <br/>`)

// Operator Matematika   | Operator Augmented Assigments
// result = result + 10  | result += 10
// result = result - 10  | result -= 10
// result = result * 10  | result *= 10
// result = result ** 10 | result **= 10
// result = result / 10  | result /= 10
// result = result % 10  | result %= 10

let hasil = 0;
hasil += 10;
document.writeln(hasil + "</br>");

hasil -= 5;
document.writeln(hasil + "</br>");

hasil *= 3;
document.writeln(hasil + "</br>");

hasil **= 2;
document.writeln(hasil + "</br>");

hasil /= 5;
document.writeln(hasil + "</br>");

hasil %= 2;
document.writeln(hasil + "</br>");

// Unary Operator Keterangan
// + Menandakan nilai positif-Menandakan nilai negatif
// ++ Increment, menaikkan 1 angka
// --Decrement, menurunkan 1 angka

document.writeln(hasil++ + "<br/>");
document.writeln(hasil-- + "<br/>");
document.writeln(+hasil);
