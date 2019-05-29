window.addEventListener('load', function() {
    var shouj = document.querySelector('.shouj');
    var small = document.querySelector('.small');
    var big = document.querySelector('.big');
    var hez = document.querySelector('.hez');
    var shoujImg = document.querySelector('.shouj-img');
    var b3 = document.querySelector('.b3');
    hez.addEventListener('mouseenter', function() {
        small.style.display = 'block';
        big.style.display = 'block';
    })
    hez.addEventListener('mouseleave', function() {
        small.style.display = 'none';
        big.style.display = 'none';
    })
    shoujImg.addEventListener('mousemove', function(e) {
        var x = e.pageX - shoujImg.offsetLeft;
        var y = e.pageY - shoujImg.offsetTop;
        var smallX = x - small.offsetWidth / 2;
        var smallY = y - small.offsetHeight / 2;
        smallX = smallX < 0 ? 0 : smallX;
        smallY = smallY < 0 ? 0 : smallY;
        var smallXmax = shoujImg.offsetWidth - small.offsetWidth;
        var smallYmax = shoujImg.offsetHeight - small.offsetHeight;
        smallX = smallX > smallXmax ? smallXmax : smallX;
        smallY = smallY > smallYmax ? smallYmax : smallY;
        small.style.left = smallX + 'px';
        small.style.top = smallY + 'px';
        var bigMaxX = big.offsetWidth - b3.offsetWidth;
        var bigMaxY = big.offsetHeight - b3.offsetHeight;
        // 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        var a = smallX / smallXmax * bigMaxX;
        var b = smallY / smallYmax * bigMaxY;
        b3.style.left = a + 'px';
        b3.style.top = b + 'px';
    })
})