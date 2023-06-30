var word = {
    dom: {
        cityUl: document.querySelector(".city-ul-box"),
    },
    data: {},
    bindEvent: function () {
        $(".kai-shi-box1").click(function () {
            mySwiper.slideNext(1000)
        });
        this.dom.cityUl.addEventListener("click", function (event) {
            if (event.target.tagName == "P") {
                mySwiper.slideTo(event.target.dataset.cityindex)
            };
        });
        document.querySelectorAll(".kai-shi-box").forEach(function (item, index) {
            item.addEventListener("click", function () {
                var index1 = this.dataset.detailIndex
                document.querySelectorAll(".detail-big-box").forEach(function (item, index) {
                    console.log(item.detailCityIndex);
                    if (item.dataset.detailCityIndex == index1) {
                        item.style["display"] = "flex"
                    }
                })

            })
        });
        document.querySelectorAll(".detail-name-box>div").forEach(function (item, index) {
            item.addEventListener("click", function () {
                this.parentElement.parentElement.parentElement.style["display"] = "none"
            })
        })
    },
    init: function () {
        this.bindEvent()
    }
}
var mySwiper = new Swiper('.swiper1', {
    direction: 'vertical', // 垂直切换选项
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    mousewheel: true,
    speed: 1000,
    on: {
        slideChangeTransitionStart: function () {
            if (mySwiper.activeIndex == 0 || mySwiper.activeIndex == 5) {
                $(".city-ul-box").animate({
                    "right": "-151px"
                })
            } else {
                $(".city-ul-box").animate({
                    "right": "12px"
                })
            };
            $($(".city-ul-box")[0].children).each(function (index, item) {
                $(item).removeClass("city-ul-active")
            });
            $($(".city-ul-box")[0].children[mySwiper.activeIndex]).addClass("city-ul-active")
        },
    },
});
word.init();