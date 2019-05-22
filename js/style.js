//网易严选轮播图
biglunbo()

function biglunbo() {
  let shot = document.getElementById('big-five-img');
  let lis = document.getElementById('lis');
  let btn_left = document.getElementById('btn-left');
  let btn_right = document.getElementById('btn-right');
  let hander = document.getElementById('hander');
  let coumeds = hander.children

  let liW = lis.offsetWidth;
  let mine = 0
  let timer = null
  let num = 0
  lunbo()

  //轮播图封装
  function lunbo() {
    clearInterval(timer)
    timer = setInterval(function () {
      mine -= liW
      num++
      // console.log(mine);
      if (mine <= -liW * 4) {
        // console.log(mine);
        mine = 0
      }
      shot.style.left = mine + 'px'
    }, 2000)

  }

  //鼠标移上,轮播图停止播放
  shot.onmouseover = function () {
    clearInterval(timer)
  }
  //鼠标移开,轮播图播放
  shot.onmouseout = function () {
    lunbo()
  }

  //轮播图左边按钮
  btn_left.onclick = function () {
    clearInterval(timer)
    console.log(num--);
    if (num < 0) {
      num = shot.children.length - 1
    }
    shot.style.left = -num * liW + 'px'
  }

//轮播图右边的按钮
  btn_right.onclick = function () {
    clearInterval(timer)
    console.log(num++);
    if (num > shot.children.length - 1) {
      num = 0
    }
    shot.style.left = -num * liW + 'px'
  }


  //指示器

  function notcolor() {
    for (var i = 0; i < coumeds.length; i++) {
      let coumed = coumeds[i];
      coumed.className = ''
    }
  }

  for (var i = 0; i < coumeds.length; i++) {
    let coumed = coumeds[i];
    console.log(coumed);
    coumed.onclick = function () {
      notcolor()
      this.className = 'coumed'
      // console.log(this);
    }
  }


}


// 设置第四部分的倒计时
let timerspan1 = document.getElementById('timerspan1')
let timerspan2 = document.getElementById('timerspan2')
let timerspan3 = document.getElementById('timerspan3')

let one = 59;
let two = 59;
let three = 14;
setInterval(function () {
  one--
  if (one < 0) {
    one = 59;
    two--
    if (two < 0) {
      three--
      if (three < 10 && three >= 0) {
        three = '0' + three
      }
    }
    if (two < 10 && two >= 0) {
      two = '0' + two
    }
  }
  if (one < 10 && one >= 0) {
    one = '0' + one
  }
  timerspan3.innerHTML = one;
  timerspan2.innerHTML = two;
  timerspan1.innerHTML = three;
}, 1000)


// 头部文字上下滚动栏
let oul = document.getElementById('oul');
let list = oul.getElementsByTagName('li');
let longtop = 0;
let timer = null;

;(function () {
  timer = setInterval(function () {
    longtop -= 35;
    if (longtop <= -175) {
      longtop = 0
    }
    oul.style.top = longtop + 'px';

  }, 2000);
})()


for (var i = 0; i < list.length; i++) {
  list[i].onmouseover = function () {
    clearInterval(timer);
    // alert(1)
  }
  list[i].onmouseout = function () {
    ;(function () {
      timer = setInterval(function () {
        longtop -= 35;
        if (longtop <= -175) {
          longtop = 0
        }
        oul.style.top = longtop + 'px';

      }, 2000);
    })()
    // alert(2)
  }
}


// 点击叉叉键,下面固定栏消失
let chaspan = document.getElementById('chaspan');
let btnblackdiv = document.getElementById('btnblackdiv');
chaspan.onclick = function () {
  btnblackdiv.style.display = 'none'
}
