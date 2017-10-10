/**
 * Created by json(610330335@qq.com) .
 */
$(function() {
    //加载图
    var imgarr = ['images/bg1.jpg'];
    //app初始化
    var h5 = new PageSlider({
        pages: $('.page-wrap .page'),
        dev: 0, //
        // musicUrl: 'music/bg.mp3',
        baseUrl: 'http://migu.guoxinad.com.cn/migu_info/'
    });
    var address = '';
    var rightNum = 0;
    var leftNum = 5;
    var number = '';
    var coret = '';
    var corret2 = '';
    h5.wxShare('你是哪个咖位的特工', 'Emmmm，拿这种测试来考验我，是不是看中了我的特工潜能？', '你是哪个咖位的特工', h5.baseUrl, h5.baseUrl + 'images/jsshare.jpg');
    h5._loadimg(imgarr, function() {
        setTimeout(function() {
            $('.loading').addClass('none');
            $('.page1').removeClass('none');
            $('.inner').css('height', 25 * (document.querySelector("html").getBoundingClientRect().width) / 16 + "px");
            scrollFun.init();
        }, 100);
    });
    $('.btn_start').on('tap', function(ev) {
        ev.stopPropagation();
        answerFun.init();
        h5.moveTo(1, false);
    });
    var answerFun = (function() {
        function init() {
            //选择题目
            $('.btn_a_1').on('tap', function(ev) {
                var type = $(this).attr('data-tap');
                // console.log(type)
                if (type == 'true') {
                    $('.question').addClass('none');
                    $('.question1').removeClass('none');
                    ques1();
                    h5.moveTo(2, false);
                } else {
                    alert('您已答过，请勿重复回答！')
                }
            });
            $('.btn_b_1').on('tap', function(ev) {
                var type = $(this).attr('data-tap');
                // console.log(type);
                number = 2;
                if (type == 'true') {
                    $('.question').addClass('none');
                    $('.question2').removeClass('none');
                    ques2();
                    yaoFun.init();
                    h5.moveTo(2, false);
                } else {
                    alert('您已答过，请勿重复回答！')
                }
            });
            $('.btn_c_1').on('tap', function(ev) {
                var type = $(this).attr('data-tap');
                //console.log(type);
                number = 3;
                if (type == 'true') {
                    $('.question').addClass('none');
                    $('.question3').removeClass('none');
                    ques3();
                    yaoFun.init();
                    h5.moveTo(2, false);
                } else {
                    alert('您已答过，请勿重复回答！')
                }
            });
            $('.btn_d_1').on('tap', function(ev) {
                var type = $(this).attr('data-tap');
                //console.log(type)
                if (type == 'true') {
                    ques4();
                    daoFun.init();
                    $('.question').addClass('none');
                    $('.question4').removeClass('none');
                    h5.moveTo(2, false);
                } else {
                    alert('您已答过，请勿重复回答！')
                }
            });
            $('.btn_e_1').on('tap', function(ev) {
                var type = $(this).attr('data-tap');
                // console.log(type)
                if (type == 'true') {
                    $('.question').addClass('none');
                    $('.question5').removeClass('none');
                    ques5();
                    $('.drag_icon').each(function(index, ele) {
                        dragFn.init($(ele));
                    });
                    h5.moveTo(2, false);
                } else {
                    alert('您已答过，请勿重复回答！')
                }
            });
            $('.btn_a_2,.btn_b_2,.btn_c_2,.btn_d_2,.btn_e_2').on('tap', function(ev) {
                alert('您已答过，请勿重复回答！')
            });
        }

        function ques1() {
            $('.question1 .btn_tip').on('tap', function(ev) {
                ev.stopPropagation();
                $('.tk').addClass('none');
                $('.tk1_tip').removeClass('none');
            });
            $('.question1 .choice').on('tap', function(ev) {
                ev.stopPropagation();
                leftNum--;
                $('.btn_a_1').attr('data-tap', false)
                var index = $(this).index();
                var corret = $(this).closest('.question').attr('data-correct');
                // console.log(corret);
                if (index == corret) {
                    rightNum += 1;
                    $('.tk').addClass('none');
                    $('.tk1_right').removeClass('none');
                } else {
                    $('.tk').addClass('none');
                    $('.tk1_wrong').removeClass('none');
                }
                console.log('rightNum:' + rightNum);
                console.log('leftNum:' + leftNum);
            });
            $('.question1 .btn_pass').on('tap', function(ev) {
                ev.stopPropagation();
                h5.moveTo(1, false);
            });
            $('.tk1 .btn_next').on('tap', function(ev) {
                ev.stopPropagation();
                $('.btn_a_1').addClass('none');
                $('.btn_a_2').removeClass('none');
                $('.tk').addClass('none');
                $('.icon2').removeClass('pulse').addClass('none');
                h5.moveTo(1, false);
                if (leftNum == 0) {
                    $('.page2 .tips1').addClass('none');
                    $('.page2 .tips2').removeClass('none');
                }
            });
        }

        function ques2() {
            var corret = RandomNumBoth(1, 9);
            console.log(corret);
            $('.question2 .choice').eq(corret - 1).append('<img class="icon2 none" src="images/icon2.png" alt=""/>');
            $('.question2 .btn_tip').on('tap', function(ev) {
                ev.stopPropagation();
                $('.tk').addClass('none');
                $('.tk2_tip').removeClass('none');
            });
            $('.question2 .choice').on('tap', function(ev) {
                ev.stopPropagation();
                leftNum--;
                $('.btn_b_1').attr('data-tap', false)
                var index = $(this).index();
                if (index == corret) {
                    rightNum += 1;
                    $('.tk').addClass('none');
                    $('.tk2_right').removeClass('none');
                } else {
                    $('.tk').addClass('none');
                    $('.tk2_wrong').removeClass('none');
                }
                console.log('rightNum:' + rightNum);
                console.log('leftNum:' + leftNum);
            });
            $('.question2 .btn_pass').on('tap', function(ev) {
                ev.stopPropagation();
                $('.question2 .choice').html('');
                h5.moveTo(1, false);
            });
            $('.tk2 .btn_next').on('tap', function(ev) {
                ev.stopPropagation();
                $('.btn_b').addClass('none');
                $('.btn_b_2').removeClass('none');
                $('.tk').addClass('none');
                if (leftNum == 0) {
                    $('.page2 .tips1').addClass('none');
                    $('.page2 .tips2').removeClass('none');
                }
                h5.moveTo(1, false);
            });
        }

        function ques3() {
            var corret = RandomNumBoth(1, 6);
            coret = corret;
            console.log(coret);
            $('.question3 .btn_tip').on('tap', function(ev) {
                ev.stopPropagation();
                $('.tk').addClass('none');
                $('.tk3_tip').removeClass('none');
            });
            $('.question3 .choice').on('tap', function(ev) {
                ev.stopPropagation();
                leftNum--;
                $('.btn_c_1').attr('data-tap', false)
                var index = $(this).index();
                if (index == corret) {
                    rightNum += 1;
                    $('.tk').addClass('none');
                    $('.tk3_right').removeClass('none');
                } else {
                    $('.tk').addClass('none');
                    $('.tk3_wrong').removeClass('none');
                }
                console.log('rightNum:' + rightNum);
                console.log('leftNum:' + leftNum);
            });
            $('.question3 .btn_pass').on('tap', function(ev) {
                ev.stopPropagation();
                $('.question3 .choice').removeClass('active pulse');
                h5.moveTo(1, false);
            });
            $('.tk3 .btn_next').on('tap', function(ev) {
                ev.stopPropagation();
                $('.btn_c').addClass('none');
                $('.btn_c_2').removeClass('none');
                $('.tk').addClass('none');
                if (leftNum == 0) {
                    $('.page2 .tips1').addClass('none');
                    $('.page2 .tips2').removeClass('none');
                }
                h5.moveTo(1, false);
            });
        }

        function ques4() {
            var arr = [2, 5]
            var corret = arr[RandomNumBoth(0, 1)];
            corret2 = corret;
            $('.question4 .btn_tip').on('tap', function(ev) {
                ev.stopPropagation();
                $('.tk').addClass('none');
                $('.tk4_tip').removeClass('none');
            });
            $('.question4 .choice').on('tap', function(ev) {
                ev.stopPropagation();
                leftNum--;
                $('.btn_d_1').attr('data-tap', false)
                var index = $(this).index();
                if (index == corret) {
                    rightNum += 1;
                    $('.tk').addClass('none');
                    $('.tk4_right').removeClass('none');
                } else {
                    $('.tk').addClass('none');
                    $('.tk4_wrong').removeClass('none');
                }
                console.log('rightNum:' + rightNum);
                console.log('leftNum:' + leftNum);
            });
            $('.question4 .btn_pass').on('tap', function(ev) {
                ev.stopPropagation();
                $('.question4 .choice').removeClass('active');
                h5.moveTo(1, false);
            });
            $('.tk4 .btn_next').on('tap', function(ev) {
                ev.stopPropagation();
                $('.btn_d').addClass('none');
                $('.btn_d_2').removeClass('none');
                $('.tk').addClass('none');
                if (leftNum == 0) {
                    $('.page2 .tips1').addClass('none');
                    $('.page2 .tips2').removeClass('none');
                }
                h5.moveTo(1, false);
            });
        }

        function ques5() {
            $('.question5 .btn_tip').on('tap', function(ev) {
                ev.stopPropagation();
                $('.tk').addClass('none');
                $('.tk5_tip').removeClass('none');
            });
            $('.question5 .btn_pass').on('tap', function(ev) {
                ev.stopPropagation();
                h5.moveTo(1, false);
            });
            $('.tk5 .btn_next').on('tap', function(ev) {
                ev.stopPropagation();
                leftNum--;
                var type = $(this).closest('div').hasClass('tk5_right_box');
                if (type) {
                    rightNum++;
                }
                //console.log(rightNum)
                $('.btn_e').addClass('none');
                $('.btn_e_2').removeClass('none');
                $('.tk').addClass('none');
                if (leftNum == 0) {
                    $('.page2 .tips1').addClass('none');
                    $('.page2 .tips2').removeClass('none');
                }
                h5.moveTo(1, false);
            });
        }

        function RandomNumBoth(Min, Max) {
            var Range = Max - Min;
            var Rand = Math.random();
            var num = Min + Math.round(Rand * Range); //四舍五入
            return num;
        }
        return {
            init: init
        };
    })();
    var yaoFun = (function() {
        var SHAKE_THRESHOLD = 1200;
        var last_update = 0;
        var x;
        var y;
        var z;
        var last_x;
        var last_y;
        var last_z;
        var count = 0;
        var isplay = false;
        var shake = document.getElementById('shake');

        function init() {
            SHAKE_THRESHOLD = 1200;
            last_update = 0;
            x;
            y;
            z;
            last_x;
            last_y;
            last_z;
            count = 0;
            isplay = false;
            shake = document.getElementById('shake');
            document.addEventListener("WeixinJSBridgeReady", function() {
                shake.play();
                shake.pause();
            }, false);
            if (window.DeviceMotionEvent) {　　　　
                window.addEventListener('devicemotion', deviceMotionHandler, true); //devicemotion               
            }
        }

        function deviceMotionHandler(eventData) {　　
            var acceleration = eventData.accelerationIncludingGravity;　　
            var curTime = new Date().getTime();　　
            var diffTime = curTime - last_update;　　
            if (diffTime > 100) {　　　　
                last_update = curTime;　　　　
                x = acceleration.x;　　　　
                y = acceleration.y;　　　　
                z = acceleration.z;　　　　
                var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;　　　　
                if (speed > SHAKE_THRESHOLD) {
                    if (!isplay) {
                        isplay = true;
                        yaoAfterAjax();
                    } else {
                        //$('.tk-load').removeClass('none');
                    }　　　　
                }　　　　
                last_x = x;　　　　
                last_y = y;　　　　
                last_z = z;　　
            }
        }

        function yaoAfterAjax() {
            shake.play();
            setTimeout(function() {
                shake.pause();
            }, 1400);
            setTimeout(function() {
                // alert(number)
                if (number == 2) {
                    $('.icon2').removeClass('none').addClass('pulse');
                } else if (number == 3) {
                    $('.question3 .choice').eq(coret - 1).addClass('active pulse');
                }
                //alert("isplay:" + isplay)
            }, 500);
        }
        return {
            init: init
        };
    })();
    var daoFun = (function() {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
        var isiOS = !! u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

        function init() {
            window.addEventListener('deviceorientation', function(e) {
                var x = Math.round(e.beta);
                var y = Math.round(e.gamma);
                var z = Math.round(e.alpha);
                // document.title = "x:" + x + "y:" + y + "z:" + z;
                if (isiOS) {
                    if (x < -40 && x > -140) {
                        $('.question4 .choice').eq(corret2 - 1).addClass('active');
                    } else {
                        $('.question4 .choice').removeClass('active');
                    }
                } else if (isAndroid) {
                    if (x < -40 && x > -140) {
                        $('.question4 .choice').eq(corret2 - 1).addClass('active');
                    } else {
                        $('.question4 .choice').removeClass('active');
                    }
                }
            });
        }
        return {
            init: init
        };
    })();
    var dragFn = (function(obj) {
        var jq = jQuery.noConflict();
        var zndex = 100;
        var html = document.querySelector("html");
        var width = html.getBoundingClientRect().width;
        var rem = parseInt(width / 16);
        // console.log(rem)
        function init(obj) {
            this.dragger(obj);
        }
        return {
            init: init,
            dragger: function(obj) {
                //手指距离元素的X距离
                var disX = 0;
                //手指距离元素的Y距离
                var disY = 0;
                //拖动过程中元素的left值
                var L = '';
                //拖动过程中元素的top值
                var T = '';
                //当前元素的初始X坐标
                var X = '';
                //当前元素的初始Y坐标
                var Y = '';
                var typeshit = false;
                var typetong = false;
                jq(obj).on('touchstart', function(ev) {
                    if (jq(this).hasClass('t5_b')) {
                        typetong = true;
                    }
                    if (jq(this).hasClass('t5_d')) {
                        typeshit = true;
                    }
                    var This = jq(this);
                    zndex += 1;
                    This.css('zIndex', zndex)
                    //转原生事件，原生下获取手指操作的集合
                    var touch = ev.originalEvent.changedTouches[0];
                    disX = touch.pageX - jq(this).position().left;
                    disY = touch.pageY - jq(this).position().top;
                    X = jq(this).position().left;
                    Y = jq(this).position().top;
                    jq(document).on('touchmove', function(ev) {
                        var touch = ev.originalEvent.changedTouches[0];
                        L = touch.pageX - disX;
                        T = touch.pageY - disY;
                        jq(obj).css('left', L);
                        jq(obj).css('top', T);
                    });
                    jq(document).on('touchend', function() {
                        console.log('typeshit:' + typeshit)
                        if (typeshit) {
                            if (L > 6 * rem && L < 13 * rem && T > 2 * rem && T < 5 * rem) {
                                $(obj).addClass('active');
                                $('.t5_b').addClass('none');
                                $(obj).css({
                                    'left': 10.15 * rem + 'px',
                                    'top': 2 * rem + 'px'
                                });
                                setTimeout(function() {
                                    $('.tk').addClass('none');
                                    $('.tk5_right').removeClass('none');
                                }, 500)
                            } else {
                                jq(obj).css({
                                    'left': X,
                                    'top': Y
                                });
                                setTimeout(function() {
                                    $('.tk').addClass('none');
                                    $('.tk5_wrong').removeClass('none');
                                }, 500)
                            }
                        } else if (typetong) {
                            console.log(L, T)
                            if (L > 0 * rem && L < 5 * rem && T > 6 * rem && T < 12 * rem) {
                                $(obj).addClass('active');
                                $('.t5_d').addClass('none');
                                $(obj).css({
                                    'left': 2 * rem + 'px',
                                    'top': 7.25 * rem + 'px'
                                });
                                setTimeout(function() {
                                    $('.tk').addClass('none');
                                    $('.tk5_right').removeClass('none');
                                }, 500)
                            } else {
                                jq(obj).css({
                                    'left': X,
                                    'top': Y
                                });
                                setTimeout(function() {
                                    $('.tk').addClass('none');
                                    $('.tk5_wrong').removeClass('none');
                                }, 500)
                            }
                        } else {
                            jq(obj).css({
                                'left': X,
                                'top': Y
                            });
                            setTimeout(function() {
                                $('.tk').addClass('none');
                                $('.tk5_wrong').removeClass('none');
                            }, 500)
                        }
                        type1 = false;
                        type2 = false;
                        console.log('rightNum:' + rightNum);
                        console.log('leftNum:' + leftNum);
                        jq(document).off();
                    });
                    return false;
                });
            },
        }
    })();
    $('.page2 .tips2').on('tap', function(ev) {
        console.log('rightNum:' + rightNum);
        if (rightNum == 0 || rightNum == 1) {
            $('.board .results').addClass('none');
            $('.board .one').removeClass('none');
            h5.wxShare('你是哪个咖位的特工', '我已成功获得滴，好人卡咖位特工称号，55555，再一次我肯定可以！', '你是哪个咖位的特工', h5.baseUrl, h5.baseUrl + 'images/jsshare.jpg');
        } else if (rightNum == 2) {
            $('.board .results').addClass('none');
            $('.board .two').removeClass('none');
            h5.wxShare('你是哪个咖位的特工', '我已成功获得我没有freestyle咖位特工称号，讲真，起名的那个人你出来，看我不打..', '你是哪个咖位的特工', h5.baseUrl, h5.baseUrl + 'images/jsshare.jpg');
        } else if (rightNum == 3) {
            $('.board .results').addClass('none');
            $('.board .three').removeClass('none');
            h5.wxShare('你是哪个咖位的特工', '我已成功获得第一集就领盒饭咖位特工称号，看什么看~虽然我距离王牌特工还差那么一点点，但是我觉得你肯定不行！', '你是哪个咖位的特工', h5.baseUrl, h5.baseUrl + 'images/jsshare.jpg');
        } else if (rightNum == 4) {
            $('.board .results').addClass('none');
            $('.board .four').removeClass('none');
            h5.wxShare('你是哪个咖位的特工', '我已成功获得不坑你坑谁咖位特工称号，你敢来挑战我吗？', '你是哪个咖位的特工', h5.baseUrl, h5.baseUrl + 'images/jsshare.jpg');
        } else if (rightNum == 5) {
            $('.board .results').addClass('none');
            $('.board .five').removeClass('none');
            h5.wxShare('你是哪个咖位的特工', '我已成功获得KINGSMAN咖位特工称号，毫 发 无 损 通 过 测 验 ，快 来 膜 拜 我 ！', '你是哪个咖位的特工', h5.baseUrl, h5.baseUrl + 'images/jsshare.jpg');
        }
        h5.moveTo(3, false);
    });
    //横屏提示
    setChange();
    window.addEventListener('orientationchange', function(e) {
        setChange()
    });

    function setChange() {
        // document.title=window.orientation
        var pop = document.querySelector('#orientLayer');
        if (window.orientation == 90 || window.orientation == -90) {
            pop.style.display = "block";
        } else {
            pop.style.display = "none";
        }
    }
    //选择地址
    $('.btn_address').on('tap', function(ev) {
        ev.stopPropagation();
        address = $(this).attr('data-val');
        console.log(address);
        $(this).addClass('active').siblings('.btn_address').removeClass('active');
    });
    $('.btn_info').on('tap', function(ev) {
        $('.btnsa,.results').addClass('none');
        $('.btnsb,.user_box').removeClass('none');
    });
    //留资
    $('.btn_sub').on('tap', function(ev) {
        ev.stopPropagation();
        var name = $('.name').val();
        var tel = $('.phone').val();
        console.log(address)
        if (name == '' || name == '姓名') {
            alert('请输入您的姓名!');
            return false;
        } else if (tel == '电话' || !checkMobile(tel)) {
            alert('请输入正确的联系电话!');
            return false;
        } else if (address == '') {
            alert('请选择地址');
            return false;
        } else {
            $.ajax({
                url: 'index.php?mod=index&ac=info',
                type: 'POST',
                data: {
                    username: name,
                    phone: tel,
                    address: address
                },
                dataType: 'json',
                beforeSend: function() {
                    $('.tk-load').removeClass('none');
                },
                success: function(data) {
                    $('.tk').addClass('none');
                    var ran = Math.random();
                    if (data.result == true) {
                        alert('信息提交成功!');
                        setTimeout(function() {
                            // window.location.href = "http://movie.miguvideo.com/lovev/subject/newbie.jsp"
                        }, 1000)
                    } else {
                        if (data.error == 1) {
                            alert('参数不全!');
                        } else if (data.error == 2) {
                            alert('手机号格式非法!');
                        } else if (data.error == 3) {
                            alert('入库失败!');
                        } else if (data.error == 404) {
                            alert('非法访问!');
                        } else if (data.error == 4) {
                            alert('手机号已存在!');
                        }
                        setTimeout(function() {
                            window.location.href = "index.html?" + ran
                        }, 1000)
                    }
                }
            })
        }
    });
    //重置
    $('.btn_reset').on('tap', function(ev) {
        ev.stopPropagation();
        address = '';
        $("input[type=reset]").trigger("click");
        $('.btn_address').removeClass('active');
    });
    // 返回首页
    $('.btn_again').on('tap', function(ev) {
        ev.stopPropagation();
        var ran = Math.random();
        setTimeout(function() {
            window.location.href = "index.html?" + ran;
        }, 200)
    });
    //分享弹层
    $('.btn_share').on('tap', function(ev) {
        ev.stopPropagation();
        $('.tk_share').removeClass('none');
    });
    $(document).on('tap', function() {
        $('.tk_share').addClass('none')
    });
    $('.btn_rule').on('tap', function() {
        $('.tk_rule').removeClass('none')
    });
    $('.btn_close,.btn_back,.btn_cancel').on('tap', function() {
        $(this).closest('.tk').addClass('none')
    });
    setRem();
    window.addEventListener("orientationchange", setRem);
    window.addEventListener("resize", setRem);

    function setRem() {
        var html = document.querySelector("html");
        var width = html.getBoundingClientRect().width;
        html.style.fontSize = width / 16 + "px";
    }
    $(document).ready(function() {
        $('body').height($('body')[0].clientHeight);
    });
    if (/Android [4-6]/.test(navigator.appVersion)) {
        window.addEventListener("resize", function() {
            if (document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
                window.setTimeout(function() {
                    document.activeElement.scrollIntoViewIfNeeded();
                }, 0);
            }
        })
    }
    //滚动效果
    var scrollFun = (function() {
        var box1 = document.querySelector('.box1');
        var inner1 = box1.querySelector('.inner1');
        var box2 = document.querySelector('.box2');
        var inner2 = box2.querySelector('.inner2');
        var box3 = document.querySelector('.box3');
        var inner3 = box3.querySelector('.inner3');
        var box4 = document.querySelector('.box4');
        var inner4 = box4.querySelector('.inner4');
        var start = 0;
        var isEnd = false;

        function init() {
            setScroll(box1, inner1, 0);
            setScroll(box2, inner2, 0);
            setScroll(box3, inner3, 0);
            setScroll(box4, inner4, 0);
        }

        function setScroll(box, inner, back) {
            mScroll({
                el: box,
                start: function(e) {
                    //console.log("手指按下要执行的函数");
                    var innerTop = Math.round(css(inner, "translateY")) - 5;
                    var minTop = box.clientHeight - inner.offsetHeight;
                    // console.log('minTop:' + minTop)
                    // console.log('innerTop:' + innerTop)
                    if (minTop >= innerTop) {
                        //console.log("用户是在底部进行拖拽的");
                        isEnd = true;
                    } else {
                        isEnd = false;
                    }
                },
                offBar: false,
                move: function(e) {
                    //console.log("发生滚动的时候，执行的函数")
                },
                end: function(e) {
                    //console.log("手指抬起要执行的函数");
                    var innerTop = Math.round(css(inner, "translateY")) - 5;
                    var minTop = box.clientHeight - inner.offsetHeight;
                    if (isEnd && minTop >= innerTop) {
                        // console.log("可以加载更多");
                        //clearInterval(inner.timer);//清除定时阻止滑屏函数回弹动画
                        document.querySelector('#scrollBar').style.opacity = 0;
                        isEnd = false;
                    }
                },
                over: function() {
                    //console.log("滚动结束");
                },
                back: back
            });
        }

        function mScroll(init) {
            if (!init.el) {
                return;
            }
            var box = init.el;
            var wrap = init.el;
            var inner = init.el.children[0];
            var scrollBar = document.createElement("div");
            var startPoint = 0;
            var startEl = 0;
            var lastY = 0;
            var lastDis = 0;
            var lastTime = 0;
            var lastTimeDis = 0;
            var back = init.back;
            // var back = 0;
            var maxTranslate = wrap.clientHeight - inner.offsetHeight;
            scrollBar.id = "scrollBar";
            if (!init.offBar) {
                var scale = wrap.clientHeight / inner.offsetHeight;
                var winH = $(window).height();
                // console.log('winH' + winH)
                /*if (winH < 1000) {
                    inner.style.height = 1200 + 'px';
                    $('.iconsBom').css({
                        'bottom': '110px'
                    })
                }*/
                inner.style.minHeight = "100%";
                scrollBar.style.cssText = "width:4px;background:rgba(0,0,0,.5);position:absolute;right:0;top:0;border-radius:2px;opacity:0;transition:.3s opacity;";
                wrap.appendChild(scrollBar);
            }
            css(inner, "translateZ", 0.01);
            inner.addEventListener('touchstart', function(e) {
                maxTranslate = wrap.clientHeight - inner.offsetHeight;
                // console.log('clientHeight:'+wrap.clientHeight)
                // console.log('offsetHeight:'+inner.offsetHeight)
                // console.log('maxTranslate:'+maxTranslate)
                if (!init.offBar) {
                    if (maxTranslate >= 0) {
                        scrollBar.style.display = "none";
                    } else {
                        scrollBar.style.display = "block";
                    }
                    scale = wrap.clientHeight / inner.offsetHeight;
                    scrollBar.style.height = wrap.clientHeight * scale + "px";
                }
                clearInterval(inner.timer);
                startPoint = e.changedTouches[0].pageY;
                startEl = css(inner, "translateY");
                lastY = startEl;
                lastTime = new Date().getTime();
                lastTimeDis = lastDis = 0;
                (init.offBar) || (scrollBar.style.opacity = 1);
                init.start && init.start.call(box, e);
            });
            inner.addEventListener('touchmove', function(e) {
                var nowTime = new Date().getTime();
                var nowPoint = e.changedTouches[0].pageY;
                var dis = nowPoint - startPoint;
                var translateY = startEl + dis;
                if (translateY > back) {
                    translateY = back
                } else if (translateY < maxTranslate - back) {
                    translateY = maxTranslate - back;
                }
                css(inner, "translateY", translateY);
                (init.offBar) || css(scrollBar, "translateY", -translateY * scale);
                lastDis = translateY - lastY;
                lastY = translateY;
                lastTimeDis = nowTime - lastTime;
                lastTime = nowTime;
                init.move && init.move.call(box, e);
            });
            inner.addEventListener('touchend', function(e) {
                var type = "easeOut";
                var speed = Math.round(lastDis / lastTimeDis * 10);
                speed = lastTimeDis <= 0 ? 0 : speed;
                var target = Math.round(speed * 30 + css(inner, "translateY"));
                if (target > 0) {
                    target = 0;
                    type = "backOut";
                } else if (target < maxTranslate) {
                    target = maxTranslate;
                    type = "backOut";
                }
                // css(inner, "translateY",target);
                MTween({
                    el: inner,
                    target: {
                        translateY: target
                    },
                    time: Math.round(Math.abs(target - css(inner, "translateY")) * 0.8),
                    type: type,
                    callBack: function() {
                        (init.offBar) || (scrollBar.style.opacity = 0);
                        init.over && init.over.call(box, e); //滚动结束监听
                    },
                    callIn: function() {
                        var translateY = css(inner, "translateY");
                        init.offBar || css(scrollBar, "translateY", -translateY * scale);
                        init.move && init.move.call(box, e); //并发执行 滚动监听
                    }
                });
                init.end && init.end.call(box, e);
            });
        }
        return {
            init: init
        };
    })();

    function checkMobile(s) {
        if (s.length != 11) return false;
        var partten = /(^13\d{9}$)|(^14)[5,7]\d{8}$|(^15\d{9}$)|(^17\d{9}$)|(^18\d{9}$)/g;
        return partten.test(s);
    }
    /* 阻止ios默认活动*/
    document.addEventListener('touchmove', stopSlide, false);
    // $('.page_my_not').on('touchmove', function() { //释放默认事件
    //     document.removeEventListener('touchmove', stopSlide, false);
    // }).on('touchend', function() {
    //     document.addEventListener('touchmove', stopSlide, false);
    // });
    function stopSlide(e) { //阻止页面默认行为
        var e = window.event || e;
        e.stopPropagation();
        e.preventDefault();
    };
});