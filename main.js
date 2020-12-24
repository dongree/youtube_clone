const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

const good = document.querySelector('.info .button_list .good');
const bad = document.querySelector('.info .button_list .bad');


moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});


good.addEventListener('click', () =>{
    good.classList.toggle('clicked');
})

bad.addEventListener('click', () =>{
    bad.classList.toggle('clicked');
})