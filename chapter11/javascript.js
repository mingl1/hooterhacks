const output = document.querySelector('.output');

const yes = document.querySelector('.yes');
const no = document.querySelector('.no');

yes.addEventListener('click', function() {
    console.log('hi');
    window.location.replace('./jail.html');
})

no.addEventListener('click', function() {
    output.innerHTML = "YOU LIARRRRRR.";
})