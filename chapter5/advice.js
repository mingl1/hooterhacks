const button = document.querySelector('.button');

button.addEventListener('click', function() {
    console.log('sup');
    document.getElementById('advice').innerHTML = 'If you hate yourself, remember that you are not alone.<br>A lot of people hate you too.'
})