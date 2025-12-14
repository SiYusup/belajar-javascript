// OPERATOR LOGIKA
// && Dan
// || Atau
// ! Kebalikan
//
// Operator &&
// Nilai 1 Operator Nilai 2 Hasil
// true && true true
// true && false false
// false && true false
// false && false false
//
// Operator ||
// Nilai 1 Operator Nilai 2 Hasil
// true || true true
// true || false true
// false || true true
// false || false false
//
// Operator Unary !
//     Operator Nilai 2 Hasil
// ! true false
// ! false true

let result1;
let result2;

result1 = 10 == 2;
result2 = 10 == 10;

document.writeln(result1 && result2);
document.writeln(result1 || result2);