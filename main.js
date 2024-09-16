// let str = "Hello world"

// console.log(str.trim());
// console.log(str.length);


// let str_1 = "-Salom dunyo"
// let str_2 = str.concat(str_1)

// console.log(str.trim());
// console.log(str.length);

// console.log(str_2);

// console.log(str.includes('l'));
// console.log(str.includes('s'));

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());




let ism = prompt('Ismizni kiriting').toLocaleLowerCase();

let harf = prompt('Harf kiriting').toLocaleLowerCase();

if(ism.includes(harf)){
    alert(ism + " ichida bu " + harf + ' mavjud')
}else{
    alert("Bu " + harf + ' siz kiritgan ismda mavjud emas')
}
