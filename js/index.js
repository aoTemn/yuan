var indexd = {
    dom: {
        bigBox: document.querySelector(".app"),
        v1: document.querySelector(".v1"),
        tips12: document.querySelector(".img-12-box>img"),
        videoBtn: document.querySelector(".v-img-box>div"),
        newsUl1: document.querySelector(".news-ul1"),
        scorollBox: document.querySelector(".about-box")
    },
    data: {
        typeObj: {
            news: "新闻",
            announcement: "公告",
            activity: "活动"
        },

    },
    bindEvent: function () {
        var that = this;
        // 12+提示弹窗事件
        this.dom.tips12.addEventListener("click", function () {
            document.querySelector(".tips-12-age").style["display"] = "flex"
        });
        document.querySelector(".tips-12-box>img:nth-child(2)").addEventListener("click", function () {
            document.querySelector(".tips-12-age").style["display"] = "none"
        });
        // 视频盒子的事件
        this.dom.videoBtn.addEventListener("click", function () {
            document.querySelector(".video-box").style["display"] = "block"
            document.querySelector(".video-box>div>video").play()
            document.querySelector(".video-box>div>video").currentTime = 0

        });
        document.querySelector(".video-box>div>div").addEventListener("click", function () {
            document.querySelector(".video-box").style["display"] = "none"
            document.querySelector(".video-box>div>video").pause();


        })
        // 新闻列表点击事件
        this.dom.newsUl1.addEventListener("click", function (event) {
            if (event.target.matches("li")) {
                document.querySelectorAll(".news-ul1>li").forEach(function (item, index) {
                    item.classList.remove("news-ul-active")
                })
                event.target.classList.add("news-ul-active");

                console.log(event.target.dataset.newsindexhead);
                document.querySelectorAll(".news-ul2>li").forEach(function (item, index) {
                    if (item.dataset.newsindex == event.target.dataset.newsindexhead) {
                        item.style["display"] = "flex"
                    } else {
                        item.style["display"] = "none"
                    }
                })
            }
        })
        // 滚动条事件
        window.addEventListener("scroll", function (event) {
            if ($(window).scrollTop() > ($(".v-box").height() / 3 * 2)) {
                $(".about-box").fadeIn(500)
            }
            else {
                $(".about-box").fadeOut(500)
            }
        })
        $(".about-box>div").on("click", "span", function (event) {
            if (event.target.dataset.gaiguan == 1) {
                $(".about-box").animate({
                    "right": "-178px"
                }, 500, function () {
                    $(event.target).css({
                        "display": "none"
                    })
                    $("[data-gaiguan='2']").css({
                        "display": "inline"
                    })
                })
            }
            if (event.target.dataset.gaiguan == 2) {
                $(".about-box").animate({
                    "right": "0px"
                }, 500, function () {
                    $(event.target).css({
                        "display": "none"
                    })
                    $("[data-gaiguan='1']").css({
                        "display": "inline"
                    })
                })
            }
        })
    },
    init: function () {
        $.get
        this.bindEvent();
    }
}
indexd.init();
var mySwiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        bulletElement: 'div',
        clickable: true,

    },
    autoplay: true,
})
