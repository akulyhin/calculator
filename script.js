import refs from './refs.js';
let currency = 0;
const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
fetch(url)
.then(res => res.json())
.then(data => {
    const usd = data.filter(usd => usd.ccy === 'USD');
    usd.forEach(item => {
        refs.currencyUsd.textContent = item.sale;
        currency = +item.sale;
    });

    const toNumber = Number(refs.currencyUsd.textContent);
    refs.currencyUsd.textContent = toNumber.toFixed(2);

let investToUah = +refs.range.value * currency;

refs.rangeBox.value = numeric(refs.range.value);

let result = +refs.clients.value * +refs.check.value * +refs.work.value;

refs.range.addEventListener('input', (e) => {
    refs.rangeBox.value = numeric(e.target.value);
    investToUah = +e.target.value * currency;

    const clients = document.getElementById('clients').value;
    const check = document.getElementById('check').value;
    const work = document.getElementById('work').value;

    result = +clients * +check * +work;
    const resultMonth = investToUah / result;
    refs.result.value = resultMonth.toFixed(1);
    payback(refs.result.value);
})

refs.rangeBox.addEventListener('focus', (e) => {
    e.target.value = e.target.value.replace(/\s/g, '');
});

refs.rangeBox.addEventListener('input', (e) => {

    refs.range.value = e.target.value;
    investToUah = +e.target.value * currency;

    const clients = document.getElementById('clients').value;
    const check = document.getElementById('check').value;
    const work = document.getElementById('work').value;

    result = +clients * +check * +work;
    const resultMonth = investToUah / result;
    refs.result.value = resultMonth.toFixed(1);
    payback(refs.result.value);
})

refs.rangeBox.addEventListener('blur', (e) => {
    e.target.value = numeric(e.target.value);
})


refs.clients.addEventListener('input', (e) => {
    const invest = document.getElementById('invest').value;
    investToUah = +invest * currency;

    const check = document.getElementById('check').value;
    const work = document.getElementById('work').value;

    result = +e.target.value * +check * +work;
    const resultMonth = investToUah / result;
    refs.result.value = resultMonth.toFixed(1);
    payback(refs.result.value);
})


refs.check.addEventListener('input', (e) => {
    const invest = document.getElementById('invest').value;
    investToUah = +invest * currency;

    const clients = document.getElementById('clients').value;
    const work = document.getElementById('work').value;

    result = +clients * +e.target.value * +work;
    const resultMonth = investToUah / result;
    refs.result.value = resultMonth.toFixed(1);
    payback(refs.result.value);
})


refs.work.addEventListener('input', (e) => {
    const invest = document.getElementById('invest').value;
    investToUah = +invest * currency;

    const clients = document.getElementById('clients').value;
    const check = document.getElementById('check').value;

    result = +clients * +check * +e.target.value;
    const resultMonth = investToUah / result;
    refs.result.value = resultMonth.toFixed(1);
    payback(refs.result.value);
})

const resultMonth = investToUah / result;
refs.result.value = resultMonth.toFixed(1);

payback(refs.result.value);




function numeric(data) {
    return data.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}


function payback(month) {
const today = new Date();
refs.currencyDate.textContent = formatDate(today);

today.setMonth(today.getMonth() + +month);


refs.payback.textContent = formatDate(today);

function formatDate(date) {

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    let yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
  }

}

});
 
function getCurrency() {





}


getCurrency();
