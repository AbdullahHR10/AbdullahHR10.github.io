document.querySelector('.themebtn').addEventListener('click', function() {
    const body = document.body;
    const arrow = document.querySelector('.scroll-down-arrow');
    const welcome = document.querySelector('.weclome-container');
    const themebtn = document.querySelector('.themebtn');
    if (body.style.backgroundColor === 'rgb(18, 18, 18)') {
        body.style.backgroundColor = 'white';
        arrow.style.color = '#031540'
        welcome.style.color = '#031540'
        themebtn.innerHTML = "<i class='bx bxs-sun' ></i>"
    } else {
        body.style.backgroundColor = '#121212';
        arrow.style.color = 'white';
        welcome.style.color = 'white';
        themebtn.innerHTML = "<i class='bx bxs-sun' ></i>"
        themebtn.innerHTML = "<i class='bx bx-sun' ></i>"
    }
});
