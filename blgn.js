var wow=require('readline-sync');
let a = wow.question('masukan bilangan pertama ')
let b = wow.question('masukan bilangan kedua ')
let c = wow.question('masukan bilangan ketiga ')
if (isNaN(c&&b&&a)){
    console.log('input yang anda masukan bukan angka ')
}
else{
if (a>b&&a>c&&b>c){
console.log(a+ ' adalah bilangan terbesar  dan  '+ c +' adalah bilangan terkecil ')}
  else{
    if (a>b&&a>c&&c>b){
        console.log(a+ ' adalah bilangan terbesar  dan  '+ b +' adalah bilangan terkecil ')
      }
    if (b>a&&b>c&&c>a){
    console.log(b+ ' adalah bilangan terbesar  dan  '+ a +' adalah bilangan terkecil ')}
      else {if (b>a&&b>c&&a>c){
    console.log(b+ ' adalah bilangan terbesar  dan  '+ c +' adalah bilangan terkecil ')
}  
else {
    if(c>a&&c>b&&b>a)
    console.log(c+ ' adalah bilangan terbesar  dan  '+ a +' adalah bilangan terkecil ')

  else {if (c>a&&c>b&&a>b)
{console.log(c+ ' adalah bilangan terbesar  dan  '+ b +' adalah bilangan terkecil ')}}  
    }
}}}
let ganteng = (a+b+c)
let rama =  (ganteng/3)
console.log(rama)