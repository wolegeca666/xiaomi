{
    let items = document.querySelectorAll('.img-items');
    let btns = document.querySelectorAll('.swiper-btn > a');
    let right = document.querySelector('.images > .icon-right');
    let left = document.querySelector('.images > .icon-left');
    let length = items.length;
    let active = document.querySelector('.swiper-btn .active');
    let timer = setInterval(function () {
        active = document.querySelector('.swiper-btn .active');
        swiper(active,1);
    }, 5000);
    
    //左右切换
    right.onclick = function() {
        clearInterval(timer);
        active = document.querySelector('.swiper-btn .active');
        swiper(active, 1);
        timer = setInterval(function () {
            active = document.querySelector('.swiper-btn .active');
            swiper(1);
        }, 5000);
    };
    left.onclick = function() {
        clearInterval(timer);
        active = document.querySelector('.swiper-btn .active');
        swiper(active,-1);
        timer = setInterval(function () {
            active = document.querySelector('.swiper-btn .active');
            swiper(1);
        }, 5000);
    };
    
    for (let i = 0; i < length; i++) {
        btns[i].onclick = function () {
            let that = this;
            swiper(that,0)
        }
    }
    //轮播
    let flag = true;
    function swiper(item,num) {
        if (flag) {
            flag = false;
            let index = item.getAttribute('data-index');
            index = Math.round(index) + num;
            if (index >= length) {
                index = 0;
            }else if (index < 0) {
                index = length - 1;
            }
            for (let i = 0; i < length; i++) {
                items[i].classList.remove('active');
                btns[i].classList.remove('active');
            }
            items[index].classList.add('active');
            btns[index].classList.add('active');
            setTimeout(function () {
                flag = true
            }, 600)
        }
    }
}