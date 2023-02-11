let counter = 0;

function color(config) {
    if (config === 1) {
        document.getElementById('rose1').src="/images/Rose.png";
        counter++;
    }

    if (config === 2) {
        document.getElementById('rose2').src="/images/Rose.png";
        counter++;
    }

    if (config === 3) {
        document.getElementById('rose3').src="/images/Rose.png";
        counter++;
    }

    if (counter === 3) {
        document.getElementById('help').textContent="Thank you!";
        document.getElementById('jump').src="/images/hole.jpg";
    }
}