let btn    = document.querySelector('.build-Confetti');
let canvas = document.querySelector('.custom_canvas-Confetti');


const jsConfetti = new JSConfetti({ canvas });


function confettiFY() {
    setTimeout(() => {
        jsConfetti.addConfetti({
            emojis: ['✔', '⚡️', '💥', '👨🏼‍💻', '👨🏽‍💻', '👨🏼‍🎓', '👏🏽', '👑'],
            emojiSize: 30,
            confettiRadius: 6,
            confettiNumber: 100,
        });
    }, 0)
}

btn.addEventListener('click', confettiFY);
