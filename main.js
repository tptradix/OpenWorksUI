!function() {
    document.body.onselectstart = function() { return false; }
    const chx = ["modules", "cash", "root"];
    const list = ["Android", "iPhone", "Safari", "iPad", "Chrome", "Opera"];
    const modal = document.querySelector('.modals');
    const closeBtn = document.querySelector('.modal__btn');
    const mobileClose = document.querySelector('.mobile-close');
    const exit = document.querySelector(".form__btn");
    let isCrypto = document.getElementById('cp');
    let onev = document.querySelector('.one_v_l');
    let ch1 = document.getElementById('i_pc');
    let form_c = document.querySelector('.c_form');
    let cp_amount = document.getElementById('cp_amount');
    let cryptobot = document.querySelector('.cp_pay');
    let cryptobotb = document.getElementById('cp');
    const openBtn = document.querySelector('.acp');
    const openBtns = document.querySelectorAll('[id^=iws]');
    const openBtnLs = document.querySelectorAll('.acp-l');
    const wsts = document.querySelectorAll('[id^=infT]');
    const iws = document.querySelectorAll('[id^=iws]');
    const tws = document.querySelectorAll('[id^=tws]');
    const pws = document.querySelectorAll('[id^=pws]');
    const drows = document.querySelectorAll('[id^=row]');
    
    const disableScroll = () => {
        let pagePosition = window.scrollY;
        document.body.classList.add('disable-scroll');
        document.body.dataset.position = pagePosition;
        document.body.style.top = -pagePosition + 'px';
    }

    const enableScroll = () => {
        let pagePosition = parseInt(document.body.dataset.position, 10);
        document.body.style.top = 'auto';
        document.body.classList.remove('disable-scroll');
        window.scroll({ top: pagePosition, left: 0 });
        document.body.removeAttribute('data-position');
    }

    const openModalDesktop = () => {
        modal.classList.add('is-open');
        disableScroll();
    }

    const closeModal = () => {
        modal.classList.remove('is-open');
        disableScroll();
    }

    const openModalMobile = () => {
        modal.classList.add('is-open');
        disableScroll();
        setTimeout(() => {
            modal.querySelector('.modal').classList.add('visible');
        }, 100);
    }

    const closeModalMobile = () => {
        modal.querySelector('.modal').classList.remove('visible');
        setTimeout(() => {
            modal.classList.remove('is-open');
            enableScroll();
        }, 300);
    }

    const openModalDesktopL = () => {
        modal.classList.add('is-open');
        disableScroll();
    }

    const closeModalL = () => {
        modal.classList.remove('is-open');
        disableScroll();
    }

    const openModalMobileL = () => {
        modal.classList.add('is-open');
        disableScroll();
        setTimeout(() => {
            modal.querySelector('.modal').classList.add('visible');
        }, 300);
    }

    const closeModalMobileL = () => {
        modal.querySelector('.modal').classList.remove('visible');
        setTimeout(() => {
            modal.classList.remove('is-open');
            enableScroll();
        }, 400);
    }

    const handleBtnClick = (index) => {
        openModalDesktopL();
        openModalMobileL();
    }

    const handleBtnLClick = (index) => {
        openModalDesktop();
        openModalMobile();
    }

    openBtn.addEventListener('click', () => {
        openModalDesktop();
        openModalMobile();
    });

    openBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            handleBtnClick(index);
        });
    });

    openBtnLs.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            handleBtnLClick(index);
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal();
            closeModalL();
        }
    });

    closeBtn.addEventListener('click', () => {
        closeModal();
        closeModalL();
    });

    mobileClose.addEventListener('swiped-down', () => {
        closeModalMobile();
        closeModalMobileL();
    });

    mobileClose.addEventListener('click', () => {
        closeModalMobile();
        closeModalMobileL();
    });

    cryptobotb.addEventListener('click', () => {
        onev.style.display = 'none';
        ch1.innerHTML = "CryptoBot";
        form_c.style.display = 'block';
    });

    document.querySelector('.acp').addEventListener('click', () => {
        onev.style.display = 'block';
        document.querySelector('.pay_d').style.display = 'none';
        form_c.style.display = 'none';
    });

    mobileClose.addEventListener('click', () => {
        document.querySelector('.pay_d').style.display = 'none';
        form_c.style.display = 'none';
    });

    cp_amount.addEventListener('input', () => {
        let ncpa = parseFloat(cp_amount.value);
        if (ncpa > 1 && ncpa < 1000) {
            cryptobot.style.background = '#3390EC';
            cryptobot.setAttribute('type', 'submit');
        } else {
            cryptobot.style.background = '#707579';
            cryptobot.setAttribute('type', 'button');
        }
    });

    openBtns.forEach((btn, index) => {
        const wst = wsts[index].textContent;
        const iwst = iws[index];
        const twst = tws[index];
        const pwst = pws[index];
        const drow = drows[index];
        if (wst.indexOf("CryptoBot") !== -1) {
            btn.addEventListener('click', () => {
                openModalDesktopL();
                openModalMobileL();
            });
            modal.addEventListener('click', (e) => {
                if (e.target == modal) {
                    closeModalL();
                }
            });
            closeBtn.addEventListener('click', () => {
                closeModalL();
            });
            iwst.src = 'https://tptradix.github.io/OpenWorksUI/img/cash.png';
            twst.innerHTML = 'Receive';
            pwst.innerHTML = 'In proccess';
            drow.style.display = 'inline-block';
        }
    });

    iws.forEach((iwst, index) => {
        iwst.addEventListener('click', () => {
            const wst = wsts[index].textContent;
            document.querySelector('.pay_d').style.display = 'grid';
            form_c.style.display = 'none';
            ch1.innerHTML = "Receive";
            document.querySelector('.acpt_i').href = wst;
            document.getElementById('del_f').value = document.querySelector('.at_id_' + (index + 1)).textContent.split(' ').join('');
            console.log(document.getElementById('del_f').value);
        });
    });

    document.getElementById('re').addEventListener('click', () => {
        window.location.reload();
    });

    document.getElementById('market').addEventListener('click', () => {
        document.getElementById('show_w_1').style.display = 'inline';
        setTimeout(() => {
            document.getElementById('show_w_1').style.display = 'none';
        }, 1000);
    });

    document.getElementById('tprf').addEventListener('click', () => {
        const to_opacity = document.querySelector('.body_st');
        let opacity = 1;
        const timer = setInterval(() => {
            if (opacity <= 0) {
                clearInterval(timer);
                to_opacity.style.display = 'none';
                show();
            } else {
                opacity -= 0.2;
                to_opacity.style.opacity = opacity;
            }

            function show() {
                setInterval(() => {
                    document.querySelector('.body_st').style.opacity = 1;
                    document.querySelector('.body_st').style.display = 'block';
                }, 1000);
            }
        }, 10);
    });
}();
