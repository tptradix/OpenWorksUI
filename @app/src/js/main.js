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
        $('.one_view_UN80Q').hide();
        $('#i_pc').html("CryptoBot");
        $('.form_BX795Y').show();
    });

    $('.acp').on('click', () => {
        $('.one_view_UN80Q').show();
      	$('#i_pc').html("Payment Method");
        $('.pay_DR24X').hide();
        $('.form_BX795Y').hide();
    });

    mobileClose.on('click', () => {
        $('.pay_DR24X').hide();
        $('.form_BX795Y').hide();
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
          $('.form_BX795Y').hide();
          $('.one_view_UN80Q').hide();
          $('.pay_DR24X').css('display', 'grid');
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

});
