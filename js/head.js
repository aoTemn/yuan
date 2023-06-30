var head = {
    dom: {
        headUl: document.querySelector(".head-a-box"),
        headMasukBtn: document.querySelector(".head-user-box"),
        headBoxShutBtn: document.querySelector(".masuk-down-btn"),
        headGuanAi: document.querySelector(".head-guan-box"),
        masukActiveBtn: document.querySelector(".masuk-xuanxiang"),
        masukYanPhone: document.querySelector(".masuk-input-yan"),
        bgmImg: document.querySelector(".bgm-img"),
    },
    data: {},
    bindEvent: function () {
        var that = this;
        this.dom.headUl.addEventListener("mouseover", function (event) {
            document.querySelectorAll(".head-a-box>*").forEach(function (item, index) {
                item.classList.remove("head-active")
            })
            if (event.target.matches("a")) {
                event.target.classList.add("head-active")
            }

        })
        this.dom.headUl.addEventListener("mouseout", function (event) {
            if (event.target.matches("a")) {
                event.target.classList.remove("head-active");
                document.querySelector(".new-html").classList.add("head-active")
            }
        })
        // 登录弹窗事件
        this.dom.headMasukBtn.addEventListener("click", function () {
            document.querySelector(".masuk-box").style["display"] = "block"
        });
        this.dom.headBoxShutBtn.addEventListener("click", function () {
            document.querySelector(".masuk-box").style["display"] = "none"
        })
        // 登陆方式切换界面事件
        this.dom.masukActiveBtn.addEventListener("click", function (event) {
            if (event.target.dataset.index == 1) {
                document.querySelector(".masuk-from--password").style["display"] = "block";
                document.querySelector(".masuk-from--password2").style["display"] = "none";
                document.querySelectorAll(".masuk-xuanxiang>div").forEach(function (item, index) {
                    item.classList.remove("masuk-active");
                })
                event.target.classList.add("masuk-active");

            } else if (event.target.dataset.index == 2) {
                document.querySelector(".masuk-from--password").style["display"] = "none";
                document.querySelector(".masuk-from--password2").style["display"] = "block";
                document.querySelectorAll(".masuk-xuanxiang>div").forEach(function (item, index) {
                    item.classList.remove("masuk-active");
                })
                event.target.classList.add("masuk-active");
            }
        })
        // 电话验证事件
        this.dom.masukYanPhone.addEventListener("input", function () {
            var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
            console.log(reg.test(this.value));
            if (reg.test(this.value)) {
                document.querySelector(".masuk-tips").innerText = ""
            } else {
                document.querySelector(".masuk-tips").innerText = "*手机格式错误";
            }
        });
        this.dom.headGuanAi.addEventListener("click", function () {
            window.open("https://jiazhang.mihoyo.com/index.html#/", "_blank");
            console.log(123);
        })
        // 监听背景音乐播放事件
        this.dom.bgmImg.addEventListener("click", function () {
            if (this.src == "http://127.0.0.1:5500/img/bgmStop.png") {
                this.src = "./img/bgmGo.png";
                console.log(123);
                document.querySelectorAll(".a1").forEach(function (item, index) {
                    item.play();
                })
            } else if (this.src == "http://127.0.0.1:5500/img/bgmGo.png") {
                this.src = "./img/bgmStop.png";
                document.querySelectorAll(".a1").forEach(function (item, index) {
                    if (index == 0) {
                    }
                    item.pause();
                })
            }
        })
    },
    init: function () {
        this.bindEvent()
    }
}
head.init()