import refs from './refs.js';

const currency = 28;
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
})

refs.rangeBox.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\s/g, '');

    refs.range.value = e.target.value;
    investToUah = +e.target.value * currency;

    const clients = document.getElementById('clients').value;
    const check = document.getElementById('check').value;
    const work = document.getElementById('work').value;

    result = +clients * +check * +work;
    const resultMonth = investToUah / result;
    refs.result.value = resultMonth.toFixed(1);
})

refs.rangeBox.addEventListener('change', (e) => {
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
})


refs.check.addEventListener('input', (e) => {
    const invest = document.getElementById('invest').value;
    investToUah = +invest * currency;

    const clients = document.getElementById('clients').value;
    const work = document.getElementById('work').value;

    result = +clients * +e.target.value * +work;
    const resultMonth = investToUah / result;
    refs.result.value = resultMonth.toFixed(1);
})


refs.work.addEventListener('input', (e) => {
    const invest = document.getElementById('invest').value;
    investToUah = +invest * currency;

    const clients = document.getElementById('clients').value;
    const check = document.getElementById('check').value;

    result = +clients * +check * +e.target.value;
    const resultMonth = investToUah / result;
    refs.result.value = resultMonth.toFixed(1);
})

const resultMonth = investToUah / result;
refs.result.value = resultMonth.toFixed(1);





function numeric(data) {
    return data.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}