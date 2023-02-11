const button = document.querySelector('.button');

button.addEventListener('click', function() {
    document.getElementById('advice').innerHTML = 'If you hate yourself, remember that you are not alone.<br>A lot of people hate you too.'
    document.getElementById('jump').src = "/images/hole.jpg";
})