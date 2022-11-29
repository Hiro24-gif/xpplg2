var wow = require('readline-sync');
let a = wow.questionInt('masukan bilangan pertama ')
let b = wow.questionInt('masukan bilangan kedua ')
let c = wow.questionInt('masukan bilangan ketiga ')


if (a > b && a > c && b > c) {
    console.log(a + ' adalah bilangan terbesar  dan  ' + c + ' adalah bilangan terkecil ')
} else {
    if (a > b && a > c && c > b) {
        console.log(a + ' adalah bilangan terbesar  dan  ' + b + ' adalah bilangan terkecil ')
    }
    if (b > a && b > c && c > a) {
        console.log(b + ' adalah bilangan terbesar  dan  ' + a + ' adalah bilangan terkecil ')
    } else {
        if (b > a && b > c && a > c) {
            console.log(b + ' adalah bilangan terbesar  dan  ' + c + ' adalah bilangan terkecil ')
        } else {
            if (c > a && c > b && b > a)
                console.log(c + ' adalah bilangan terbesar  dan  ' + a + ' adalah bilangan terkecil ')

            else {
                if (c > a && c > b && a > b) {
                    console.log(c + ' adalah bilangan terbesar  dan  ' + b + ' adalah bilangan terkecil ')
                } else {
                    if (a == b && b == c && a == c) {
                        console.log('input yang anda masukan sama besar')
                    } else {
                        var bayu = (a + b + c)
                        var rama = (bayu / 3)
                        console.log('nilai rata rata adalah ' + rama)
                    }
                }
            }
        }
    }
}
