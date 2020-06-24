{
    let appcode_a = document.querySelector('.appcode-a');
    let appcode = document.querySelector('.appcode');
    let shopping = document.querySelector('#shopping');
    let cart = document.querySelector('#cart');

    // App二维码
    appcode_a.addEventListener('mouseenter', function () {
        appcode_a.className = 'active';
        appcode.style.height = '150px';
    });
    appcode_a.addEventListener('mouseleave', function () {
        appcode_a.className = '';
        leave(appcode)
    });

    // 购物车
    shopping.addEventListener('mouseenter', function () {
        shopping.className = 'active';
        cart.style.height = '100px';
    });
    function leave(obj, callback) {
        obj.style.height = '0';
        if (callback) {
            callback();
        }
    }
    shopping.addEventListener('mouseleave', function () {
        leave(cart);
        setTimeout(function () {
                shopping.className = ''
        }, 350)
    });

    let data = [
        [
            {name: '小米10 Pro', price: '4999元起', url: 'images/xioami10.webp'},
            {name: '小米10 Pro', price: '4999元起', url: 'images/xioami10.webp'},
            {name: '小米10 Pro', price: '4999元起', url: 'images/xioami10.webp'},
            {name: '小米10 Pro', price: '4999元起', url: 'images/xioami10.webp'},
            {name: '小米10 Pro', price: '4999元起', url: 'images/xioami10.webp'},
            {name: '小米10 Pro', price: '4999元起', url: 'images/xioami10.webp'}
        ],

        [
            {name: 'Redmi 10X 5G 系列', price: '1599元起', url: 'images/hongmi.webp'},
            {name: 'Redmi 10X 5G 系列', price: '1599元起', url: 'images/hongmi.webp'},
            {name: 'Redmi 10X 5G 系列', price: '1599元起', url: 'images/hongmi.webp'},
            {name: 'Redmi 10X 5G 系列', price: '1599元起', url: 'images/hongmi.webp'},
            {name: 'Redmi 10X 5G 系列', price: '1599元起', url: 'images/hongmi.webp'},
            {name: 'Redmi 10X 5G 系列', price: '1599元起', url: 'images/hongmi.webp'}
        ],

        [
            {name: 'Redmi 智能电视 X55', price: '2299元起', url: 'images/redmitv.webp'},
            {name: 'Redmi 智能电视 X55', price: '2299元起', url: 'images/redmitv.webp'},
            {name: 'Redmi 智能电视 X55', price: '2299元起', url: 'images/redmitv.webp'},
            {name: 'Redmi 智能电视 X55', price: '2299元起', url: 'images/redmitv.webp'},
            {name: 'Redmi 智能电视 X55', price: '2299元起', url: 'images/redmitv.webp'},
            {name: 'Redmi 智能电视 X55', price: '2299元起', url: 'images/redmitv.webp'}
        ],

        [
            {name: '小米笔记本 Pro 15', price: '5299元起', url: 'images/book15.png'},
            {name: '小米笔记本 Pro 15', price: '5299元起', url: 'images/book15.png'},
            {name: '小米笔记本 Pro 15', price: '5299元起', url: 'images/book15.png'},
            {name: '小米笔记本 Pro 15', price: '5299元起', url: 'images/book15.png'},
            {name: '小米笔记本 Pro 15', price: '5299元起', url: 'images/book15.png'},
            {name: '小米笔记本 Pro 15', price: '5299元起', url: 'images/book15.png'}
        ],

        [
            {name: '米家互联网空调 (一级能效)', price: '1949元', url: 'images/kongtioa.png'},
            {name: '米家互联网空调 (一级能效)', price: '1949元', url: 'images/kongtioa.png'},
            {name: '米家互联网空调 (一级能效)', price: '1949元', url: 'images/kongtioa.png'},
            {name: '米家互联网空调 (一级能效)', price: '1949元', url: 'images/kongtioa.png'},
            {name: '米家互联网空调 (一级能效)', price: '1949元', url: 'images/kongtioa.png'},
            {name: '米家互联网空调 (一级能效)', price: '1949元', url: 'images/kongtioa.png'}
        ],

        [
            {name: 'Redmi路由器AC2100', price: '169元', url: 'images/ac2100.webp'},
            {name: 'Redmi路由器AC2100', price: '169元', url: 'images/ac2100.webp'},
            {name: 'Redmi路由器AC2100', price: '169元', url: 'images/ac2100.webp'},
            {name: 'Redmi路由器AC2100', price: '169元', url: 'images/ac2100.webp'},
            {name: 'Redmi路由器AC2100', price: '169元', url: 'images/ac2100.webp'},
            {name: 'Redmi路由器AC2100', price: '169元', url: 'images/ac2100.webp'}
        ],

        [
            {name: '小米小爱触屏音箱', price: '179元', url: 'images/xioaai.jpg'},
            {name: '小米小爱触屏音箱', price: '179元', url: 'images/xioaai.jpg'},
            {name: '小米小爱触屏音箱', price: '179元', url: 'images/xioaai.jpg'},
            {name: '小米小爱触屏音箱', price: '179元', url: 'images/xioaai.jpg'},
            {name: '小米小爱触屏音箱', price: '179元', url: 'images/xioaai.jpg'},
            {name: '小米小爱触屏音箱', price: '179元', url: 'images/xioaai.jpg'}
        ]
    ];

    let data_nav = document.querySelector('.data-nav');
    let ul = document.querySelector('.product');
    let link = document.querySelectorAll('.link');
    let select = document.querySelectorAll('.select')

    let i;
    let index;
    let length = link.length;

    for (i = 0; i < select.length; i++) {
        select[i].onmouseenter = function () {
            data_nav.style.height = '230px';
            /* data_nav.style.borderTop = '1px solid #e0e0e0'; */
            data_nav.style.boxShadow = '0 1px 3px #ccc';
            data_nav.style.transition = 'height .5s';
        };
        select[i].onmouseleave = function () {
            data_nav.style.height = '0';
            data_nav.style.borderTop = '';
            data_nav.style.boxShadow = '';
            data_nav.style.transition = 'all .5s';
        };
    }

    for (i = 0; i < length; i++) {
        // 绑定事件
        link[i].addEventListener('mouseenter', function () {
            index = this.getAttribute('data-index');
    /*        data_nav.style.height = '230px';
             data_nav.style.borderTop = '1px solid #e0e0e0'; 
            data_nav.style.boxShadow = '0 1px 3px #ccc';
            data_nav.style.transition = 'height .5s'; */
            setData(data[index]);
        });

    /*    link[i].addEventListener('mouseleave', function () {
            data_nav.style.height = '0';
            data_nav.style.borderTop = '';
            data_nav.style.boxShadow = '';
            data_nav.style.transition = 'all .5s';
        }); */
    }

        function setData(maData) {
            // 先清空ul
            let li;
            let last = '';
            let dLength = maData.length;
            ul.innerHTML = '';
            maData.forEach(function (value, index) {
                li = document.createElement('li');
                if (index === dLength - 1) {
                    last = 'last';
                }
                li.innerHTML = '<li class="pro '+ last +'"><a href="#">\n' +
                    '<img class="pro-img" src="'+ value.url +'" alt="0" />\n' +
                    '<div class="title">\n' +
                    '<span>'+ value.name +'</span>\n' +
                    '<span class="pro-price">'+ value.price +'</span>\n' +
                    '</div>\n' +
                    '</a></li>';
                ul.appendChild(li);
            });
        }

    let top_search = document.querySelector('#search');
    let search_btn = document.querySelector('.search')
    top_search.onfocus = function () {
        top_search.style.border = '1px solid #FF6700';
        search_btn.style.border = '1px solid #FF6700';
        search_btn.style.borderLeft = 'none';
    }

    top_search.onblur = function () {
        top_search.style.border = '1px solid #e0e0e0';
        search_btn.style.border = '1px solid #e0e0e0';
        search_btn.style.borderLeft = 'none';
    }
}
