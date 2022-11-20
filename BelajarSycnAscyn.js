//Synchrononus

// console.log("Halo, selamat siang semuanya");
// console.log("Perkenalkan namaku Javascript");
// console.log("Mempelajariku menyenangkan dan mudah, bukan?");

//Asynchronous

// console.log("Halo, selamat siang semuanya");
// setTimeout(() => {
//   console.log("Perkenalkan namaku Javascript");
// }, 5000);
// console.log("Mempelajariku menyenangkan dan mudah, bukan?");

//-----CALLBACK-----

// let buyer = (message) => {
//   console.log("Udah selesai pesanannya? " + message);
// };

// let seller = (callback) => {
//   console.log("Pesan martabak dong?...(tunggu ya, sedang dimasak)");
//   setTimeout(() => {
//     callback("Ok, martabak sudah selesai kaka");
//     //buyer("Ok, martabak sudah selesai kaka")
//   }, 4000);
// };

// seller(buyer);

// function buyer(message) {
//   console.log("Udah selesai pesanannya? " + message);
// }

// function seller(callback) {
//   console.log("Pesan martabak dong?...(tunggu ya, sedang dimasak)");
//   setTimeout(() => {
//     callback("Ok, martabak sudah selesai kaka");
//   }, 4000);
// }

// seller(buyer);

//Function Style
//function buyer(message){}
//function seller(message){}
//function customer(message){}

//Arrow Function Style
//const buyer = (message) => {}
//const seller = (message) => {}
//const costumer = (message) => {}

// let arrNumber = [5, 6, 8, 10, 2];

// let arrowSorted = arrNumber.sort((a, b) => {
//   return a - b;
// });

// let functionSorted = arrNumber.sort(function (a, b) {
//   return a - b;
// });

//STEP 1: panggil seller(buyer)
//STEP 2: buyer("Ok, martabak sudah selesai kaka")
//STEP 3: "Udah selesai pesanannya? Ok, martabak sudah selesai kaka"



// ----Promise---

// const bentengTakeshi = new Promise ((resolve, reject) => {
//     console.log("---BENTENG TAKESHI DIMULAI----");
//     console.log("3");
//     console.log("2");
//     console.log("1");
//     console.log("Silakan anda mulai!");
//     console.log("Doakan aku yaa! ^_^");

//     let rate = Math.floor (Math.random() * 60);
//     console.log("ini adalah waktumu :", rate ,"detik");
//     console.log("Ayo semangat!!!");
//     setTimeout (() => {
//         if (rate > 30){
//             resolve("Selamat Anda berhasil menaklukan benteng takeshi")
//         } else {
//             reject("Anda Gagal menaklukan benteng Takeshi");
//         }
//     }, 6000)
// })


// //  ---- AWAIT ----

// const playFunction = async () => {
//     let strVariable = ""
//     await bentengTakeshi
//     .then((hasil) => {
//     strVariable = "WIN  ^_^";
//     console.log(hasil);
//     })
//     .catch((gagal) => {
//         strVariable = "LOSE T_T";
//         console.log("gagal :", gagal,);
//     })
//     .finally(() => {
//         console.log("Bagaimana perasaan anda mengikuti benteng takeshi?");
//     })
//     console.log(strVariable);
       
// }

// playFunction();



// const playFunction = async() => {
//     await bentengTakeshi
//     .then(() => {})
//     .catch(() => {})
//     .finally(() => {})
// }


function jajanBoba(uang, callback) {
    let sisaUang = uang;
    setTimeout(() => {
        let hargaBoba = 5000;
        sisaUang = uang - hargaBoba;
        if (sisaUang <= 0) {
            console.log('Maaf uang kamu belum cukup untuk membeli boba');
            console.log('Sisa uang kamu sebesar ' + uang);
            console.log('\n')
        }
        else {
            console.log('kamu jajan boba dengan harga Rp. ' + hargaBoba);
            console.log('sisa uang kamu adalah Rp. ' + sisaUang)
            console.log('\n')
        } 
    }, 5000)
    
    setTimeout(() => {
        callback(sisaUang);
    }, 9000)
}

function jajanSeblak(uang) {
    let hargaSeblak = 8000;
    let sisaUang = uang - hargaSeblak;
    if (sisaUang <= 0) {
        console.log('Maaf uang kamu belum cukup untuk membeli boba dan seblak');
        console.log('Sisa uang kamu adalah Rp. ' + uang)
    }
    else {
        console.log('kamu jajan seblak dengan harga Rp. ' + hargaSeblak);
        console.log('sisa uang kamu adalah Rp. ' + sisaUang)
    }
}

// jajanBoba(20000, jajanSeblak);
jajanBoba(10000, jajanSeblak);
// jajanBoba(4000, jajanSeblak);



function jajanBoba(uang, callback) {
    const boba = 5000;
    console.log(`kamu jajan boba Rp.${boba}`);
    console.log(`sisa uang kamu Rp.${uang - boba}), jajanSeblak`);
    uang -= boba;
    console.log(jajanSeblak(uang));
  }






  function jajanSeblak(uang) {
    const seblak = 8000;
    if (uang >= seblak) {
      uang -= seblak;
      return `kamu jajan seblak Rp.${seblak}
    sisa uang kamu Rp.${uang}`;
    } else {
      return (`Maaf uang kamu belum cukup untuk membeli seblak. Sisa uang kamu sebesar Rp.${uang}`);
    }
  }
  
//   jajanBoba(20000, jajanSeblak);
  jajanBoba(5000, jajanSeblak);