const show = document.querySelector('.container');
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        //console.log ('FIZZBUZZ');
        const element = `<div class="qr fb">${'FIZZBUZZ'}</div>`;
        show.innerHTML += element;
    }
    else if (i % 3 === 0) {
        //console.log ('FIZZ');
        const element = `<div class="qr fizz">${'FIZZ'}</div>`;
        show.innerHTML += element;
    }
    else if (i % 5 === 0) {
        //console.log ('BUZZ');
        const element = `<div class="qr buzz">${'BUZZ'}</div>`;
        show.innerHTML += element;
    }
    else {
        //console.log(i);
        const element = `<div class="qr norm">${i}</div>`;
        show.innerHTML += element;
    }
};