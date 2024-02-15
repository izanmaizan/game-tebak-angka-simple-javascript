let maximum = parseInt('Masukkan nilai maksimum!');
while (!maximum) {
    maximum = parseInt(prompt('Masukkan nilai maksimum!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('Isi tebakan kamu!'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    attempts++;
    if(guess > targetNum) {
        guess = parseInt(prompt('Terlalu tinggi, coba tebak lagi!'));
    } else {
        guess = parseInt(prompt('Terlalu rendah, coba lagi!'));
    }
}

alert(`Selamat tebakan anda benar! Dengan ${attempts} kali percobaan`);