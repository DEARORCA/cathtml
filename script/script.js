$(function(){
    class A1 {
        init(){
            this.menu();
            this.modal();
            this.slide();
        }
        menu(){
            $('.main-btn').on({
                mouseenter(){
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(300);
                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                }
                
            })
            $('.col').on({
                mouseleave(){
                    $('.sub').stop().slideUp(200);
                    $('.main-btn').removeClass('on');
                }
                
            })
            $('#family').on({
                change(){
                    if($(this).val() !== ''){
                    window.open($(this).val());
                    }
                }
            })
        };

        modal(){
            $('.npb').on({
                click(e){
                    e.preventDefault();
                    $('.modal').removeClass('close')
                    $('.modal').addClass('open')
                }
            })
            $('.btn-box').on({
                click(e){
                    e.preventDefault();
                    $('.modal').removeClass('open')
                    $('.modal').addClass('close')
                }
            })
        };

        slide(){
            let cnt = 0;

            function mainSlide(){
                $('.s-wrap').stop().animate({top:`${-100*cnt}%`}, 600, function(){
                    if (cnt>2) cnt=0;
                    $('.s-wrap').stop().animate({top:`${-100*cnt}%`}, 0)
                })
            }

            function nextCount(){
                cnt++;
                mainSlide();
            }

            function autoTimer(){
                setInterval(nextCount, 3000);
            }
            autoTimer();
        }

    }
    const a1 = new A1();
    a1.init();
})(jQuery);