var onBtn = document.getElementById('visibilty-on');
var offBtn = document.getElementById('visibilty-off');
var passInput = document.getElementById('password');

onBtn.addEventListener('click', function() {
    onBtn.style.display = 'none';
    offBtn.style.display = 'inline-block';
    passInput.setAttribute('type', 'text');
});

offBtn.addEventListener('click', function() {
    onBtn.style.display = 'inline-block';
    offBtn.style.display = 'none';
    passInput.setAttribute('type', 'password');
});