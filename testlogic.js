/*  
    TES LOGIKA
    Nama    : Muhammad Iqbal Hadad
    Asal kota: Bandung
    Backend Developer
    TTL     : Bandung, 24 Januari 2000
    No HP   : 08979561401
    Email   : miqbalhadad@gmail.com
    github  : https://github.com/miqbalhadad
*/
// Soal no 1 Sorting persamaan
const soal1a =  [10,20,20,10,10,30,50,10,20];
const soal1b =  [6,5,2,3,5,2,2,1,1,5,1,3,3,3,5];
const soal1c =  [1,1,3,1,2,1,3,3,3,3];
function hitungKaosKakiSama(arr){
    var object = {};
    var result = [];

    arr.forEach(function (item) {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (var prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }

    return result;
    

}
console.log(hitungKaosKakiSama(soal1a).length);
console.log(hitungKaosKakiSama(soal1b).length);
console.log(hitungKaosKakiSama(soal1c).length);



// Soal no 2 count word 
const soal2a = "Saat meng*ecat tembok, Agung dib_antu oleh Raihan.";
const soal2b = "Berapa u(mur minimal[ untuk !mengurus ktp?";
const soal2c = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.";
function countWords(str) {
    str.replace(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/gi);
    return str.split(' ').length;
}
console.log(countWords(soal2a));
console.log(countWords(soal2b));
console.log(countWords(soal2c));


// /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/gi