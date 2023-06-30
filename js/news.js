var newsDom = {
    dom: {},
    data: {
        timer: null,
        typeObj: {
            news: "新闻",
            announcement: "公告",
            activity: "活动"
        },
        baseUrl: "http://127.0.0.1:8888",
        useUrl1: "/v1/consultation/weigthConsultation",
        useUrl2: "/v1/consultation/newConsultation/0" //查询最新咨询，后接path参数表示去多少
    },
    bindEvent: function () {
        var that = this
        $(".xuan-box>div").on("click", "button", function (event) {
            document.querySelectorAll(".xuan-box>div>button").forEach(function (item, index) {
                item.classList.remove("news-btn-active");
            })
            event.target.classList.add("news-btn-active")
            if (event.target.dataset.newsbtn == 2) {
                document.querySelectorAll(".news-ul-box>ul>li").forEach(function (item, index) {
                    if (item.dataset.newsulIndex == 1) {
                        item.style["display"] = "flex";
                    } else {
                        item.style["display"] = "none"
                    }
                })
            }
            else if (event.target.dataset.newsbtn == 1) {
                document.querySelectorAll(".news-ul-box>ul>li").forEach(function (item, index) {
                    item.style["display"] = "flex";
                })
            }
            else if (event.target.dataset.newsbtn == 3) {
                document.querySelectorAll(".news-ul-box>ul>li").forEach(function (item, index) {
                    if (item.dataset.newsulIndex == 2) {
                        item.style["display"] = "flex";
                    } else {
                        item.style["display"] = "none"
                    }
                })
            } else if (event.target.dataset.newsbtn == 4) {
                document.querySelectorAll(".news-ul-box>ul>li").forEach(function (item, index) {
                    if (item.dataset.newsulIndex == 3) {
                        item.style["display"] = "flex";
                    } else {
                        item.style["display"] = "none"
                    }
                })

            }
        });
        $(".more-news-box").click(function () {
            clearInterval(that.data.timer);
            $(this).text("加载中...");
            that.data.timer = setInterval(function () {
                $(".more-news-box").text("加载更多");
            }, 2000)
        });
        window.addEventListener("scroll", function () {
            if ($(window).scrollTop() > 200) {
                $(".overhead-box").fadeIn(300)
            } else {
                $(".overhead-box").fadeOut(300)
            }

        })
        $(".overhead-box").click(function () {
            window.scrollTo($(window).scrollLeft(), 0)
        })
    },
    // 处理时间方法
    strTime: function (time) {
        let timeStr = new Date(time * 1);
        let year = timeStr.getFullYear();
        let month = timeStr.getMonth() + 1;
        let day = timeStr.getDate();
        return [year, month, day]
    },

    init: function () {
        var that = this
        $.get(this.data.baseUrl + this.data.useUrl1, function (data) {
            let htmlStr = template("temp1", {
                arr: data.data.slice(0, 3),
                typeObj: that.data.typeObj,
                baseUrl: that.data.baseUrl,
                timeStr: that.strTime
            })
            $(".news-top-box>div").html(htmlStr)

        })
        $.get(this.data.baseUrl + this.data.useUrl2, function (data) {
            if (data.status == "success") {
                let htmlStr = template("temp2", {
                    arr: data.data,
                    baseUrl: that.data.baseUrl
                })
                $(".news-ul-box>ul").html(htmlStr)
            }
        })
        this.bindEvent();
    }
}
newsDom.init()