const frequent = document.querySelectorAll('.freq');

frequent.forEach(freq =>{
    freq.addEventListener('click',() => {
        freq.classList.toggle('open');
    })
})
