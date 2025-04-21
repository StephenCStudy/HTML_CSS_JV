let bunCount = document.getElementById('bunCount');
let phoCount = document.getElementById('phoCount');
let comCount = document.getElementById('comCount');

let bunCountLike = document.getElementById('bunCountLike');
let phoCountLike = document.getElementById('phoCountLike');
let comCountLike = document.getElementById('comCountLike');

let count1 = JSON.parse(localStorage.getItem('count1')) || 0;
let count2 = JSON.parse(localStorage.getItem('count2')) || 0;
let count3 = JSON.parse(localStorage.getItem('count3')) || 0;

bunCount.textContent = count1;
phoCount.textContent = count2;
comCount.textContent = count3;

bunCountLike.addEventListener('click', function () {
    count1++;
    bunCount.textContent = count1;
    localStorage.setItem('count1', JSON.stringify(count1));
});

phoCountLike.addEventListener('click', function () {
    count2++;
    phoCount.textContent = count2;
    localStorage.setItem('count2', JSON.stringify(count2));
});

comCountLike.addEventListener('click', function () {
    count3++;
    comCount.textContent = count3;
    localStorage.setItem('count3', JSON.stringify(count3));
});