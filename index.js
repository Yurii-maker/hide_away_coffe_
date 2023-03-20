var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});

const localDay = Date().slice(0, 3);

const schedule = document.getElementById('description');
schedule.innerText = 'Cafe in London \n Open today until 4:00 PM'

if (localDay === 'Sun') {
    schedule.innerText = 'Cafe in London \n today`s closed'
}
const loader = document.getElementById('loader');
const body = document.getElementById('body');
window.onload = () => {
    setTimeout(() => {
        loader.style.display = 'none'
        body.classList.remove('over-h')
    }, 2000)


}