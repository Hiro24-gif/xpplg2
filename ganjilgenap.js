var wow = require('readline-sync');
var a = wow.question('masukan angka')
 if (isNaN(a)){
console.log('input yang anda masukan bukan angka ')}
else{
if (a %2==0)
{console.log('bilangan yang anda masukan adalah bilangan ganjil')}
else{console.log('bilangan yang anda masukan adalah bilangan genap')}}

