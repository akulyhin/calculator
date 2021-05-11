import refs from './refs.js';

let investToUah = +refs.range.value * 28;
console.log(investToUah);

refs.rangeBox.textContent = `${numeric(refs.range.value)} $`;

let result = +refs.clients.value * +refs.check.value * +refs.work.value;

refs.range.addEventListener('input', (e) => {
    refs.rangeBox.textContent = `${numeric(e.target.value)} $`;
    investToUah = +e.target.value * 28;

    const clients = document.getElementById('clients').value;
    const check = document.getElementById('check').value;
    const work = document.getElementById('work').value;

    result = +clients * +check * +work;
    const resultMonth = investToUah / result;
    refs.result.value = resultMonth.toFixed(1);

})


refs.clients.addEventListener('input', (e) => {
    const invest = document.getElementById('invest').value;
    investToUah = +invest * 28;

    const check = document.getElementById('check').value;
    const work = document.getElementById('work').value;

    result = +e.target.value * +check * +work;
    const resultMonth = investToUah / result;
    refs.result.value = resultMonth.toFixed(1);
})


refs.check.addEventListener('input', (e) => {
    const invest = document.getElementById('invest').value;
    investToUah = +invest * 28;

    const clients = document.getElementById('clients').value;
    const work = document.getElementById('work').value;

    result = +clients * +e.target.value * +work;
    const resultMonth = investToUah / result;
    refs.result.value = resultMonth.toFixed(1);
})


refs.work.addEventListener('input', (e) => {
    const invest = document.getElementById('invest').value;
    investToUah = +invest * 28;

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