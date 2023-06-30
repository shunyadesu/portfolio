window.addEventListener("load", function() {
    setTimeout(function() {
    document.getElementById("loading").classList.remove("active");
    }, 1000)
})

//マウスストーカー用のdivを取得
const stalker = document.getElementById('stalker'); 

//上記のdivタグをマウスに追従させる処理
document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

// トリガー取得
const scrollTrigger = document.querySelectorAll('.js-scroll-trigger');

// aimation呼び出し
if (scrollTrigger.length) {
    scrollAnimation(scrollTrigger);
}

// aimation関数
function scrollAnimation(trigger) {
    window.addEventListener('scroll', function () {
        for (var i = 0; i < trigger.length; i++) {
            let position = trigger[i].getBoundingClientRect().top,
                scroll = window.pageYOffset || document.documentElement.scrollTop,
                offset = position + scroll,
                windowHeight = window.innerHeight;

            if (scroll > offset - windowHeight + 200) {
                trigger[i].classList.add('is-active');
            }
        }
    });
}