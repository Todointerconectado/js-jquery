let btn    = document.querySelector('.build-Confetti');
let canvas = document.querySelector('.custom_canvas-Confetti');
const jsConfetti = new JSConfetti({ canvas });

// JQuery
$(function() {
    $(".build-Confetti").css({
        border: "blue",
        borderRadius: "50px",
        padding: "10px 15px",
        fontSize: "2rem",
        fontWeight: "bolder",
        letterSpacing: "2px",
        cursor: "pointer",
    });
});


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
