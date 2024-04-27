(function() {
    document.body.onselectstart = () => false;

    const chx = ["modules", "cash", "root"];
    const list = ["Android", "iPhone", "Safari", "iPad", "Chrome", "Opera"];

    const modal = document.querySelector('.modals');
    const closeBtn = document.querySelector('.modal__btn');
    const mobileClose = document.querySelector('.mobile-close');
    const cryptobotb = document.getElementById('cp');
    const form_c = document.querySelector('.c_form');
    const cp_amount = document.getElementById('cp_amount');
    const onev = document.querySelector('.one_v_l');
    const ch1 = document.getElementById('i_pc');

    const openBtn = document.querySelector('.acp');
    const openBtns = document.querySelectorAll('[id^="iws"]');

    const disableScroll = () => {
        const pagePosition = window.scrollY;
        document.body.classList.add('disable-scroll');
        document.body.dataset.position = pagePosition;
        document.body.style.top = -pagePosition + 'px';
    };

    const enableScroll = () => {
        const pagePosition = parseInt(document.body.dataset.position, 10);
        document.body.style.top = 'auto';
        document.body.classList.remove('disable-scroll');
        window.scroll({ top: pagePosition, left: 0 });
        document.body.removeAttribute('data-position');
    };

    const openModal = () => {
        modal.classList.add('is-open');
        disableScroll();
    };

    const closeModal = () => {
        modal.classList.remove('is-open');
        enableScroll();
    };

    const openModalMobile = () => {
        openModal();
        setTimeout(() => {
            modal.querySelector('.modal').classList.add('visible');
        }, 100);
    };

    const closeModalMobile = () => {
        modal.querySelector('.modal').classList.remove('visible');
        setTimeout(() => {
            closeModal();
        }, 300);
    };

    openBtn.addEventListener('click', () => {
        openModal();
        openModalMobile();
    });

    modal.addEventListener('click', (e) => {
        if (e.target == modal || e.target == closeBtn) {
            closeModal();
        }
    });

    mobileClose.addEventListener('swiped-down', () => {
        closeModalMobile();
    });

    mobileClose.addEventListener('click', () => {
        closeModalMobile();
    });

    cryptobotb.addEventListener('click', () => {
        onev.style.display = 'none';
        ch1.innerHTML = "CryptoBot";
        form_c.style.display = 'block';
    });

    openBtns.forEach((btn, index) => {
        const wst = document.getElementById(`infT${index + 1}`).textContent;
        const iwst = document.getElementById(`iws${index + 1}`);
        const twst = document.getElementById(`tws${index + 1}`);
        const pwst = document.getElementById(`pws${index + 1}`);
        const drow = document.getElementById(`row${index + 1}`);

        if (wst.includes("CryptoBot")) {
            btn.addEventListener('click', () => {
                openModal();
                openModalMobile();
            });

            iwst.src = 'https://tptradix.github.io/OpenWorksUI/img/cash.png';
            twst.innerHTML = 'Receive';
            pwst.innerHTML = 'In process';
            drow.style.display = 'inline-block';
        }

        iwst.addEventListener('click', () => {
            document.querySelector('.pay_d').style.display = 'grid';
            form_c.style.display = 'none';
            ch1.innerHTML = "Receive";
            document.querySelector('.acpt_i').href = document.getElementById(`infT${index + 1}`).textContent;
            document.getElementById('del_f').value = document.querySelector(`.at_id_${index + 1}`).textContent.split(' ').join('');
            console.log(document.getElementById('del_f').value);
        });
    });

    cp_amount.addEventListener('input', () => {
        const ncpa = parseFloat(cp_amount.value);
        if (ncpa > 1 && ncpa < 1000) {
            console.log(ncpa);
            cryptobot.style.background = '#3390EC';
            cryptobot.setAttribute('type', 'submit');
        } else {
            cryptobot.style.background = '#707579';
            cryptobot.setAttribute('type', 'button');
        }
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
})();
