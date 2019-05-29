window.addEventListener('load', function() {
    var ol = document.querySelector('.img ol');
    var ul = document.querySelector('.img ul');
    var xiaoyu = document.querySelector('.xiaoyu');
    var dayu = document.querySelector('.dayu');
    var img = document.querySelector('.img');
    var imgWidth = ul.children[0].offsetWidth;
    img.addEventListener('mouseenter', function() {
        xiaoyu.style.display = 'block';
        dayu.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    img.addEventListener('mouseleave', function() {
        clearInterval(timer);
        xiaoyu.style.display = 'none';
        dayu.style.display = 'none';
        timer = setInterval(function() {
            xiaoyu.click();
        }, 3000)
    })
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
    }
    ol.children[0].className = 'color';
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].setAttribute('index', i)
        ol.children[i].addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'color';
            var index = this.getAttribute('index');
            num = circle = index;
            dh(ul, -index * imgWidth);
        })
    }
    var yuanquan = ul.children[0].cloneNode(true)
    ul.appendChild(yuanquan);
    var num = 0;
    var circle = 0;
    xiaoyu.addEventListener('click', function() {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        dh(ul, -num * imgWidth);
        circle++;
        if (circle == 4) {
            circle = 0
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'color';
    })
    dayu.addEventListener('click', function() {
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * imgWidth + 'px';
        }
        num--;
        dh(ul, -num * imgWidth);
        circle--;
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'color';
    })
    var timer = setInterval(function() {
        xiaoyu.click();
    }, 3000)
})