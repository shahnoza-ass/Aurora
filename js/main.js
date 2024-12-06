document.getElementById('start-pong').addEventListener('click', () => {
    document.getElementById('pong-section').style.display = 'block';
    document.getElementById('whack-a-mole-section').style.display = 'none';
});

document.getElementById('start-whack').addEventListener('click', () => {
    document.getElementById('whack-a-mole-section').style.display = 'block';
    document.getElementById('pong-section').style.display = 'none';
});
