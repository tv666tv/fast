

let marqueeSwiper = new Swiper(".marquee-swiper-container", {
  loop: true, // 循环模式选项
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 1500,
  autoplay: {
    delay: 0,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination2",
  },
});

setTimeout(()=>{
  let mySwiper = new Swiper(".banner-swiper-container", {
    observer: true,
    loop: true, // 循环模式选项
    autoHeight:true, 
    autoWidth:true, 
    speed:1000,
    spaceBetween: 10,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
    },
    // 如果需要分页器
    pagination: {
      el: ".swiper-pagination2",
    },
  });
},1000)

let currentQq = "";

// 动态加载js
function loadScript(src) {
  var scriptElement = document.createElement("script");
  document.getElementsByTagName("head")[0].appendChild(scriptElement);
  scriptElement.src = src;
}

//判断是安卓还是ios
var u = navigator.userAgent,
  browser_version = navigator.appVersion,
  isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,
  isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

// 缓存数据，大于5分钟才会请求
let kefuLink = "";
let androidLink = "";
let iosLink = "";
let titleLink = "";

const qqList = data.filter(
  (item) => item.value && item.value.length > 1 && item.key === "qq"
);
const cnzzList = data.filter((item) => item.key === "cnzz");
const kefuList = data.filter((item) => item.key === "kefu");
const androidLinkList = data.filter((item) => item.key === "androidLink");
const iosLinkList = data.filter((item) => item.key === "iosLink");
const titleList = data.filter((item) => item.key === "title");
// 随机数下标
const randomNo = Math.floor(Math.random() * qqList.length);
currentQq = qqList[randomNo].value;

const qqDom = document.querySelectorAll(".qq");
qqDom.forEach((item) => {
  item.innerHTML = currentQq;
});

if (cnzzList.length) {
  loadScript(cnzzList[0].value);
}

if (kefuList.length) {
  kefuLink = kefuList[0].value;
}

if (androidLinkList.length) {
  androidLink = androidLinkList[0].value;
}

if (iosLinkList.length) {
  iosLink = iosLinkList[0].value;
}

if (titleList.length) {
  titleLink = titleList[0].value;
}

let kefu = document.querySelector(".kefu");
let qq1 = document.querySelector(".qq1");
let download = document.querySelector(".download");
let title = document.querySelector("title");

title.innerHTML = titleLink;
kefu.addEventListener("click", () => {
  if (kefuLink) {
    location.href = kefuLink;
  } else {
    wakeQQ();
  }
});
qq1.addEventListener("click", () => {
  wakeQQ();
});
download.addEventListener("click", () => {
  wakeQQ();
});

function wakeQQ() {
  alert({
    title: "添加账号联系",
    content: "安装好专用APP后，注册时填写邀请码:" + currentQq,
    doneText: "确定",
  }).then(() => {
    if (isAndroid) {
      location.href = androidLink;
    } else {
      location.href = iosLink;
    }
  });
  copy();
}

function copy() {
  let input = document.createElement("input");
  input.value = currentQq;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  toast("邀请码已复制");
}

let tabs = document.querySelectorAll(".tabs");
let navs = document.querySelectorAll(".menu a");
for (let index = 0; index < navs.length; index++) {
  navs[index].addEventListener("click", () => {
    let cur = document.querySelector(`#${navs[index].dataset.id}`);

    navs[index].classList.add("active");

    for (let index2 = 0; index2 < tabs.length; index2++) {
      tabs[index2].style.display = "none";
    }
    cur.style.display = "block";
  });
}

let app = document.getElementById("app");

let scrollTop = document.documentElement.scrollTop
if(scrollTop < 200){
  app.classList.remove("app_fixed");
}
window.addEventListener("scroll", (e) => {
  var e = e || window.event;
  var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrolltop > 200) {
    app.classList.add("app_fixed");
  } else {
    app.classList.remove("app_fixed");
  }
});
