var role = {
    dom: {},
    data: {
        timer: null,
        roleBgm: 0
    },
    bindEvent: function () {
        var that = this;
        $(".swiper-box").on("click", ".swiper-slide", function (evet) {
            if (evet.target.dataset.swiperSlideIndex === undefined) {
                mySwiper.slideToLoop(evet.target.parentElement.dataset.swiperSlideIndex);
                mySwiper3.slideToLoop(evet.target.parentElement.dataset.swiperSlideIndex)
            } else {
                mySwiper.slideToLoop(evet.target.dataset.swiperSlideIndex)
                mySwiper3.slideToLoop(evet.target.parentElement.dataset.swiperSlideIndex)

            }

        });
        // 角色中英文切换
        $(".character__sbtn").click(function (evet) {
            var _this = this
            document.querySelectorAll(".role-bg audio").forEach(function (item, index) {
                item.pause()
            })
            $(this.children).each(function (index, item) {
                $(item).toggleClass("character__sbtn--active")
            })
            if (this.dataset.zhongyin == 0) {
                this.dataset.zhongyin = 1
                $(_this.parentElement.parentElement.children[0].children[0].children).each(function (index, item) {
                    if (index == _this.dataset.zhongyin) {
                        $(item).css({
                            "display": "block"
                        })
                    } else {
                        $(item).css({
                            "display": "none"
                        })
                    }
                })
            } else if (this.dataset.zhongyin == 1) {
                this.dataset.zhongyin = 0;
                $(_this.parentElement.parentElement.children[0].children[0].children).each(function (index, item) {

                    if (index == _this.dataset.zhongyin) {
                        $(item).css({
                            "display": "block"
                        })
                    } else {
                        $(item).css({
                            "display": "none"
                        })
                    }
                })
            }

        });
        $(".role-bgm-bofang-box").click(function () {
            var _this = this
            if (this.dataset.rolebgm == 0) {
                $(this).css({
                    "background-image": "url('./img/role-img/cv-bofang-img2.gif')",
                    "background-size": "86px 86px"
                });
                if (_this.nextElementSibling.children[0].dataset.zhongyin == 0) {
                    _this.parentElement.parentElement.children[3].children[that.data.roleBgm].play();
                    that.data.roleBgm++;
                    if (that.data.roleBgm == 3) {
                        that.data.roleBgm = 0
                    }

                } else if (_this.nextElementSibling.children[0].dataset.zhongyin == 1) {
                    _this.parentElement.parentElement.children[4].children[that.data.roleBgm].play();
                    that.data.roleBgm++;
                    if (that.data.roleBgm == 3) {
                        that.data.roleBgm = 0
                    }

                }
                // if(document.querySelector())
                this.dataset.rolebgm = 1;
            } else if (this.dataset.rolebgm == 1) {
                $(this).css({
                    "background-image": "url('./img/role-img/cv-bofang-img1.png')",
                    "background-size": "64px 64px"
                });
                document.querySelectorAll(".role-information-box audio").forEach(function (item, index) {
                    item.pause();
                    item.currentTime = 0
                })
                this.dataset.rolebgm = 0
            }
        })
        //监听音乐播放结束
        document.querySelectorAll(".role-bg audio").forEach(function (item, index) {
            item.addEventListener("ended", function () {
                $(".role-bgm-bofang-box").css({
                    "background-image": "url('./img/role-img/cv-bofang-img1.png')",
                    "background-size": "64px 64px"
                });
            })
        })
        document.querySelectorAll(".role-bg audio").forEach(function (item, index) {
            item.addEventListener("pause", function () {
                $(".role-bgm-bofang-box").css({
                    "background-image": "url('./img/role-img/cv-bofang-img1.png')",
                    "background-size": "64px 64px"
                });
            })
        })
        $(".swiper-button-all").click(function () {
            document.querySelectorAll(".swiper2 audio").forEach(function (item, index) {
                item.pause()
            })
        })
        $(".city-ul>ul").on("click", "p", function (event) {
            if (this.dataset.cityindex != 4) {
                var _this = this
                $(".city-ul>ul>li").each(function (index, item) {
                    $(item).removeClass("role-city-active")
                })
                $(this.parentElement).addClass("role-city-active")
            }
            document.querySelectorAll(".role-ul-xuan").forEach(function (item, index) {
                if (item.dataset.roleCity == _this.dataset.cityindex) {
                    item.style["display"] = "block"
                } else {
                    item.style["display"] = "none"
                }
            })
            document.querySelectorAll(".role-bg-peopre-box").forEach(function (item, index) {
                if (item.dataset.roleCity == _this.dataset.cityindex) {
                    item.style["display"] = "block"
                } else {
                    item.style["display"] = "none"
                }
            })

        })
    },
    init: function () {
        this.bindEvent();
        this.data.timer = setInterval(function () {
            $(".role-bg-box2").fadeOut(5000, function () {
                $(".role-bg-box2").fadeIn(5000)
            });
        }, 10000);
        mySwiper.controller.control = mySwiper1
    }
}

var mySwiper1 = new Swiper('.swiper2', {
    loop: true,
    // 如果需要前进后退按钮
    centeredSlides: true,
    slidesPerView: 1,
    slidesPerView: "auto",
    // effect: 'fade',
})
var mySwiper = new Swiper('.swiper1', {
    loop: true,
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    slidesPerView: 6,
    slidesPerView: "auto",
    grid: {
        fill: 'column',
        rows: 1,
    },
    controller: {
        control: mySwiper1,
    },

})
var mySwiper4 = new Swiper('.swiper4', {
    loop: true,
    // 如果需要前进后退按钮
    centeredSlides: true,
    slidesPerView: 17,
    slidesPerView: "auto",
})
var mySwiper3 = new Swiper('.swiper3', {
    loop: true,
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    slidesPerView: 17,
    slidesPerView: "auto",
    grid: {
        fill: 'column',
        rows: 1,
    },
    controller: {
        control: mySwiper4,
    },

})
role.init();