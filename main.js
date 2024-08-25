// // "Men Isroilov islombek Nurillo o'g'li 2012-yilda 3-fevral kuni Uzbekistoning Andijon viloyatini Asaka tumaninida tug'ilganman hozirda 59-maktabda 6-sinifda o'qiman maktabdan tashqari it va ingliz tili to'garaklariga boraman kechki payt esa sport bilan shug'ullanaman"

// let userName = 'Islombek';
// let userSurname = 'Isroilov';
// let userFatherName = 'Nurillo';
// let age = 12;

// let hammasi =  'user name' + ' ' +userName+ ' '+ 'user surname'+ ' ' +userSurname+ ' ' + 'my father name is'+ ' '+ userFatherName+ ' ' + 'age'+ ' ' +age;
// console.log(hammasi);

// let result = `user name ${userName} user surname ${userSurname} my father name is ${userFatherName} age ${age}.`;
// console.log(result);


// let email = 'Islom@bekisroilov@gmail.com';

// console.log(email);
// console.log(email.length);
// console.log(email.toUpperCase());
// console.log(email.toLowerCase());

// console.log(email.lastIndexOf('@'));
// console.log(email[5]);
// console.log(email[17]);

// operatorlar

// let result = prompt('ob-havo qanaqa yomgirmi');
// let res = result == 'yomgirmas' ? 'bemalol ketaverin' : 'soyabon olib oling';
// console.log(res);

// let vaqt = prompt('soatni kiriting');
// let soat = vaqt > 12 ? 'hayrli tun' : 'xayrli kun';
// console.log(soat);

// let prom = prompt('yol kiraga pulingiz bormi');
// let pul = 'pulim yoq';
// let res = prom > 'pulim bor' ? 'moshinada ketolmaysiz' : 'moshinada ketaverin';
// alert(res);

// concatinaton

// let prom = prompt('Isim kirit');
// console.log(prom.concat('bek'));

// Arifmetik
// tenglik: = == ===

// let a = 5;
// let b = '5';
// console.log(a === b);


// let ism = prompt('ism kirit');
// let yosh = prompt('yoshingni kirit')
// let tekshir = yosh > 18 ?  `${ism} sizning pasportingiz bor` : `${ism} siz hali pasport olmagansiz`;
// console.log(tekshir);

// let ism = prompt('ismingni kirit')
// let yosh = prompt('yoshingni kirit');
// let tekshir = yosh < 18 ? `${ism} hali yoshsan` : yosh >=18 && yosh<=27 ? `${ism} armiyaga borishing kerak` : `${ism} qaribsan`;
// console.log(tekshir);

// let bal = prompt('balingni kirit');
// let tekshir = bal < 56 ? 'Qayta' : bal >=56 && bal <=71 ? '3 baho'  : bal >=71 && bal <=86 ? '4 baho' : bal >=86 && bal <=100 ? '5 baho': 'error';
// console.log(tekshir);


// let bal = prompt('bal kirit');

// if(bal <= 56){
//       console.log('Qayta');
// }else if(bal >= 56 && bal <= 71){
//       console.log('3 baho');
// }else if(bal >= 71 && bal <= 86){
//       console.log('4 baho');
// }else if(bal >= 86 && bal <= 100){
//       console.log('5 baho');
// }

// let ism = prompt('ismini kirit');
// let yosh = prompt('yoshini kirit');
// if(yosh <= 18){
//       console.log(`${ism.charAt(0).toUpperCase()}${ism.slice(1).toLowerCase()}  hali yoshsan 👶🏼👶🏼`);
// }else if(yosh >= 18 && yosh <= 27){
//       console.log(`${ism.charAt(0).toUpperCase()}${ism.slice(1).toLowerCase()}  armiyaga borish yoshidasan 🥷🥷`);
// }else if(yosh >= 27){
//       console.log(`${ism.charAt(0).toUpperCase()}${ism.slice(1).toLowerCase()}  qaribsan 👴👵`);
// }


// let prom = prompt('ob havo kirit');
// if(prom === 'yomgir'){
//      alert('soyabon ol');
// }else if(prom === 'qor'){
//      alert('issiqroq kiyin');
// }else if(prom === 'quyosh'){
//      alert('kepka kiy');
// }else if(prom === 'shamol'){
//      alert('maska taq');
// }else{
//      alert('bunday obhavo yoq')
// }

// let hammasi = ['Zilola', 'Islombek', 'Gulomiddin', 'Murodjon'];
// console.log(hammasi[2]);

// let ism = 'zilola';
// console.log(ism[2])
// .reverse().join('')
// let ism = prompt('isim kirit');
// console.log(ism);
// let tekshir = ism.split('').join('a');
// console.log(tekshir);
// for(let i=0; i<10; i++){
//       console.log(ismlar[i]);
// }
// let ismlar = ['Islombek', 'Zilola', 'Gulomiddin'];
// for(let olma=0; olma<ismlar.length; olma++){
//       console.log(`Salom ${ismlar[olma]}`);
// }
// for(let son=15; son<26; son++){
//       console.log(son)
// }

// for(let son=15; son<26; son++){
//       console.log(son)
// }
// function salomAyt(){
//       console.log('salom islombek');
// }
// salomAyt()

// let salom = function(){
//       console.log('xayr islombek');
// }
// salom()

// let qoshibBer = ()=> {
//       console.log(125 + 200);
// }
// qoshibBer()

// let prom = prompt('time selection');
// function salom(ism){
//       if(ism <=12){
//             console.log('hayrli kun')
//       }else if(ism >=13){
//             console.log('hayrli tun');
//       }else if(ism >=24){
//             console.log('bunday vaqt yoq');
//       }
// }
// salom(prom)

// let user = {
//       name: 'Jon',
//       age: 25
// }
// for(ele of user){
//       console.log(ele);
// }
// let matni = document.getElementsByTagName('h1')
// console.log(matni);
// let list = document.querySelectorAll('li')
// console.log(list);
// list.forEach((el)=> {
//       console.log(el.textContent += 'salom');
// })



// const arr = [-1,87,4,3.1,-4.4,0,1,2,0.9, Infinity]
// let yigindi = 0;
// for(let i=0; i<arr.length; i++){
//       if(arr[i]>0 && arr[i] !== Infinity){
//             yigindi += arr[i]
//       }
// }
// console.log(yigindi);

// let arr1 = [2,7,9,2,3,5,9,7];
// let arr2 = [2,7,9,2,3,5,9,7];
// console.log(arr1);
// for(let i=0; i<arr1.length; i++){
//       for(let z=0; z<arr1.length; z++){
//             if(i !== z){
//                 console.log(arr1.push());
//             }
//       }
// }

// let raqamlar = [4,5,2,4,6,9]
// console.log(raqamlar);
// for(let i=0; i < 6; i++){
//       console.log(raqamlar[i]*2);
// }



