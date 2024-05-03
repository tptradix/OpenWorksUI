$(function() {
    const modal = $('.modals');
    const closeBtn = $('.modal__btn');
    const mobileClose = $('.mobile-close');
    const cryptobotb = $('#cp');
    const cp_amount = $('#cp_amount');
    const cryptobot = $('.cp_pay');
    const openBtn = $('.acp');
    const openBtns = $('[id^=iws]');
    const wsts = $('[id^=infT]');
    const iws = $('[id^=iws]');
    const tws = $('[id^=tws]');
    const pws = $('[id^=pws]');
    const drows = $('[id^=row]');

    const disableScroll = () => {
        const pagePosition = window.scrollY;
        $('body').addClass('disable-scroll').data('position', pagePosition).css('top', -pagePosition + 'px');
    };

    const enableScroll = () => {
        const pagePosition = parseInt($('body').data('position'), 10);
        $('body').css('top', 'auto').removeClass('disable-scroll');
        window.scroll({ top: pagePosition, left: 0 });
        $('body').removeData('position');
    };

    const openModalDesktop = () => {
        modal.addClass('is-open');
        disableScroll();
    };

    const closeModal = () => {
        modal.removeClass('is-open');
        enableScroll();
    };

    const openModalMobile = () => {
        modal.addClass('is-open');
        disableScroll();
        setTimeout(() => {
            modal.find('.modal').addClass('visible');
        }, 100);
    };

    const closeModalMobile = () => {
        modal.find('.modal').removeClass('visible');
        setTimeout(() => {
            modal.removeClass('is-open');
            enableScroll();
        }, 300);
    };

    const handleBtnClick = () => {
        openModalDesktop();
        openModalMobile();
    };

    openBtn.on('click', () => {
        openModalDesktop();
        openModalMobile();
    });

    openBtns.each(function(index) {
        $(this).on('click', () => {
            handleBtnClick(index);
        });
    });

    modal.on('click', (e) => {
        if ($(e.target).hasClass('modals')) {
            closeModal();
        }
    });

    closeBtn.on('click', () => {
        closeModal();
    });

    mobileClose.on('swiped-down click', () => {
        closeModalMobile();
    });

    cryptobotb.on('click', () => {
        $('.one_v_l').hide();
        $('#i_pc').html("CryptoBot");
        $('.c_form').show();
    });

    $('.acp').on('click', () => {
        $('.one_v_l').show();
      	$('#i_pc').html("Payment Method");
        $('.pay_d').hide();
        $('.c_form').hide();
    });

    mobileClose.on('click', () => {
        $('.pay_d').hide();
        $('.c_form').hide();
    });

    cp_amount.on('input', () => {
        const ncpa = parseFloat(cp_amount.val());
        if (ncpa > 1 && ncpa < 1000) {
            cryptobot.css('background', '#3390EC').attr('type', 'submit');
        } else {
            cryptobot.css('background', '#707579').attr('type', 'button');
        }
    });

    openBtns.each(function(index) {
        const wst = wsts.eq(index).text();
        const iwst = iws.eq(index);
        const twst = tws.eq(index);
        const pwst = pws.eq(index);
        const drow = drows.eq(index);
        if (wst.indexOf("CryptoBot") !== -1) {
            iwst.attr('src', 'https://tptradix.github.io/OpenWorksUI/img/cash.png');
            twst.html('Receive');
            pwst.html('In process');
            drow.css('display', 'inline-block');
        } else if (wst.indexOf("work") !== -1) {
            iwst.attr('src', 'https://tptradix.github.io/OpenWorksUI/img/work_case.png');
            twst.html('Deal');
            pwst.html('In process');
            drow.css('display', 'inline-block');
        } else {
            iwst.attr('src', 'https://tptradix.github.io/OpenWorksUI/img/reg.png');
            twst.html('Registration');
            pwst.html('Completed');
            drow.css('display', 'inline-block');
            $(".at_id_" + (index)).css('display', 'none')
        }
    });

    iws.each(function(index) {
      $(this).on('click', () => {
        const wst = wsts.eq(index).text();
        if (wst.indexOf("CryptoBot") !== -1) {
          $('.c_form').hide();
          $('.one_v_l').hide();
          $('.pay_d').css('display', 'grid');
          $('#i_pc').html("Receive");
          $('.acpt_i').attr('href', wst);
          $('#del_f').val($('.at_id_' + (index)).text().split(' ').join(''));

        }
      });
    });

    $('#re').on('click', () => {
        window.location.reload();
    });

    document.body.onselectstart = () => { return false; }

    $(function() {  
    $(window).on('hashchange', function() {
        var hash = window.location.hash;
        $('#app').hide();
        $('#profiles').hide();
        route(hash);
    });
    
    function route(hash) {
        switch(hash) {
            case '#profile':
                $('#app').hide();
                $('#ads').hide();
                $('#profiles').show();
            	window.Telegram.WebApp.BackButton.show()
                window.Telegram.WebApp.MainButton.hide()
            	Telegram.WebApp.onEvent('backButtonClicked', () => {
                	window.location.hash = '#app'
                })
                break;
            case '#app':
                $('#profiles').hide();
                $('#ads').hide();
                $('#app').show();
            	window.Telegram.WebApp.BackButton.hide()
                window.Telegram.WebApp.MainButton.hide()
                break;
            case '#ads':
                $('#profiles').hide();
                $('#app').hide();
                $('#ads').show();
                window.Telegram.WebApp.BackButton.show()
            	Telegram.WebApp.onEvent('backButtonClicked', () => {
                	window.location.hash = '#profile'
                })

                let tg = window.Telegram.WebApp;
                tg.MainButton.setText("Submit");
                tg.MainButton.isActive = false;
                tg.MainButton.color = '#737373'
                tg.MainButton.show();

                $('input[name="test"], input[name="test2"], input[name="test3"], input[name="test4"]').on('click', function() {
                    $('input[name="' + this.name + '"]').prop('checked', false);
                    $(this).prop('checked', true);
                    $('#is' + this.name.charAt(4).toUpperCase()).val(this.id);
                });
            
                $('#rew, #des').on('input', function() {
                    var bal = parseFloat($('#blnc').text());
                    var rewValue = parseFloat($('#rew').val());
                    var desLength = $('#des').val().length;
                    var conf = $('#conf');
                    var mainButton = window.Telegram.WebApp.MainButton;
            
                    if (rewValue < 0.1 || desLength < 10) {
                        $(this).css('borderBottom', '1.5px solid #df3f40');
                    } else {
                        $(this).css('borderBottom', '1.5px solid #3390EC');
                    }
            
                    if ((rewValue <= bal && rewValue > 1) && desLength > 10) {
                        conf.css('backgroundColor', '#3390EC');
                        conf.attr('type', 'submit');
                        mainButton.isActive = true;
                        mainButton.color = '#31b545';
                        Telegram.WebApp.onEvent("mainButtonClicked", () => {
                            document.getElementById("send_p").submit();
                        });
                    } else {
                        conf.css('backgroundColor', '#707579');
                        conf.attr('type', 'button');
                        mainButton.isActive = false;
                        mainButton.color = '#737373';
                    }
                });
                break;
            default:
                $('#profiles').hide();
                $('#ads').hide();
                $('#app').show();
            	window.Telegram.WebApp.BackButton.hide()
                window.Telegram.WebApp.MainButton.hide()
        }
    }

    route(window.location.hash);
    }());

});

