!function() {
    document.body.onselectstart = function() { return false; }
	const chx = ["modules", "cash", "root"]
	const list = ["Android", "iPhone", "Safari", "iPad", "Chrome", "Opera"]
	var d = function(chx) {
		var d = (navigator.userAgent); var ug = ["agent:", d]
		if (d != null) {
			return console.log(d)
			var temp = function(chx) {
				data = [{
					"locale": d,
					"check": chx[1],
					"nl": list
				}]

			}(chx);
		} else {
			window.location.replace("https://vercel.com");
		}

	}(chx);

   
	const openBtn = document.querySelector('.acp');
    const modal = document.querySelector('.modals');
    const closeBtn = document.querySelector('.modal__btn');
    const mobileClose = document.querySelector('.mobile-close');
    const form_c = document.querySelector('.c_form');
    const cp_amount = document.getElementById('cp_amount');
    const cryptobot = document.querySelector('.cp_pay');

    let disableScroll = function () {
    let pagePosition = window.scrollY;
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
    };

    let enableScroll = function () {
    let pagePosition = parseInt(document.body.dataset.position, 10);
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

    const handleOpen = (event) => {
    const investmentOption = event.target.closest('[data-investment]');
    if (investmentOption) {
        const investmentText = investmentOption.dataset.investmentText;
        const investmentId = investmentOption.id;
        openModal();
        // Update form content based on investment details
        document.getElementById('i_pc').innerHTML = investmentText;
        // (Optional) Handle investment specific logic here (if needed)
    } else {
        // Handle generic open action (e.g., show payment options)
        onev.style.display = 'block';
        document.querySelector('.pay_d').style.display = 'none';
        form_c.style.display = 'none';
    }
    };

    openBtn.addEventListener('click', handleOpen);
    cryptobot.addEventListener('click', handleOpen);  // Combined listener

    modal.addEventListener('click', (e) => {
    if (e.target == modal) {
        closeModal();
    }
    });

    closeBtn.addEventListener('click', closeModal);

    mobileClose.addEventListener('click', () => {
    form_c.style.display = 'none';
    document.querySelector('.pay_d').style.display = 'none';
    });

    cp_amount.addEventListener('input', () => {
    const enteredAmount = parseFloat(cp_amount.value);
    if (enteredAmount > 1 && enteredAmount < 1000) {
        cryptobot.style.background = '#3390EC';
        cryptobot.setAttribute('type', 'submit');
    } else {
        cryptobot.style.background = '#707579';
        cryptobot.setAttribute('type', 'button');
    }
    });


    if (wst1.indexOf("CryptoBot") !== -1) {
        iwst1.src = 'https://tptradix.github.io/OpenWorksUI/img/cash.png';
        twst1.innerHTML = 'Receive';
        pwst1.innerHTML = 'In proccess';
        drow1.style.display = 'inline-block';

    }

    if (wst1.indexOf('1') !== -1) {
        iwst1.src = 'https://tptradix.github.io/OpenWorksUI/img/reg.png';
        twst1.innerHTML = 'Registration';
        pwst1.innerHTML = 'Completed';
        drow1.style.display = 'inline-block';
    }

    if (wst1.indexOf('work') !== -1) {
        iwst1.src = 'https://tptradix.github.io/OpenWorksUI/img/work_case.png';
        twst1.innerHTML = 'Deal';
        pwst1.innerHTML = 'In process';
        drow1.style.display = 'inline-block';
    }

    if (wst2.indexOf("CryptoBot") !== -1) {
        iwst2.src = 'https://tptradix.github.io/OpenWorksUI/img/cash.png';
        twst2.innerHTML = 'Receive';
        pwst2.innerHTML = 'In proccess';
        drow2.style.display = 'inline-block';

    }

    if (wst2.indexOf('work') !== -1) {
        iwst2.src = 'https://tptradix.github.io/OpenWorksUI/img/work_case.png';
        twst2.innerHTML = 'Deal';
        pwst2.innerHTML = 'In process';
        drow2.style.display = 'inline-block';
    }

    if (wst3.indexOf("CryptoBot") !== -1) {
        document.getElementById('iws3').src = 'https://tptradix.github.io/OpenWorksUI/img/cash.png';
        document.getElementById('tws3').innerHTML = 'Receive';
        document.getElementById('pws3').innerHTML = 'In proccess';
        document.getElementById('row3').style.display = 'inline-block';

    }

    if (wst3.indexOf('work') !== -1) {
        document.getElementById('iws3').src = 'https://tptradix.github.io/OpenWorksUI/img/work_case.png';
        document.getElementById('tws3').innerHTML = 'Deal';
        document.getElementById('row3').style.display = 'In process';
        document.getElementById('row3').style.display = 'inline-block';
    }

    if (wst4.indexOf("CryptoBot") !== -1) {
        document.getElementById('iws4').src = 'https://tptradix.github.io/OpenWorksUI/img/cash.png';
        document.getElementById('tws4').innerHTML = 'Receive';
        document.getElementById('pws4').innerHTML = 'In proccess';
        document.getElementById('row4').style.display = 'inline-block';

    }

    if (wst4.indexOf('work') !== -1) {
        document.getElementById('iws4').src = 'https://tptradix.github.io/OpenWorksUI/img/work_case.png';
        document.getElementById('tws4').innerHTML = 'Deal';
        document.getElementById('row4').style.display = 'In process';
        document.getElementById('row4').style.display = 'inline-block';
    }

    if (wst5.indexOf('work') !== -1) {
        document.getElementById('iws5').src = 'https://tptradix.github.io/OpenWorksUI/img/work_case.png';
        document.getElementById('tws5').innerHTML = 'Deal';
        document.getElementById('row5').style.display = 'In process';
        document.getElementById('row5').style.display = 'inline-block';
    }

    if (wst5.indexOf("CryptoBot") !== -1) {
        document.getElementById('iws5').src = 'https://tptradix.github.io/OpenWorksUI/img/cash.png';
        document.getElementById('tws5').innerHTML = 'Receive';
        document.getElementById('pws5').innerHTML = 'In proccess';
        document.getElementById('row5').style.display = 'inline-block';

    }

    if (wst6.indexOf("CryptoBot") !== -1) {
        document.getElementById('iws6').src = 'https://tptradix.github.io/OpenWorksUI/img/cash.png';
        document.getElementById('tws6').innerHTML = 'Receive';
        document.getElementById('pws6').innerHTML = 'In proccess';
        document.getElementById('row6').style.display = 'inline-block';

    }

    if (wst6.indexOf('work') !== -1) {
        document.getElementById('iws6').src = 'https://tptradix.github.io/OpenWorksUI/img/work_case.png';
        document.getElementById('tws6').innerHTML = 'Deal';
        document.getElementById('row6').style.display = 'In process';
        document.getElementById('row6').style.display = 'inline-block';
    }

    if (wst7.indexOf("CryptoBot") !== -1) {
        document.getElementById('iws7').src = 'https://tptradix.github.io/OpenWorksUI/img/cash.png';
        document.getElementById('tws7').innerHTML = 'Receive';
        document.getElementById('pws7').innerHTML = 'In proccess';
        document.getElementById('row7').style.display = 'inline-block';

    }

    if (wst8.indexOf('work') !== -1) {
        document.getElementById('iws8').src = 'https://tptradix.github.io/OpenWorksUI/img/cash.png';
        document.getElementById('tws8').innerHTML = 'Receive';
        document.getElementById('pws8').innerHTML = 'In proccess';
        document.getElementById('row8').style.display = 'inline-block';
    }

    if (wst8.indexOf("CryptoBot") !== -1) {
        document.getElementById('iws8').src = 'https://tptradix.github.io/OpenWorksUI/img/cash.png';
        document.getElementById('tws8').innerHTML = 'Receive';
        document.getElementById('pws8').innerHTML = 'In proccess';
        document.getElementById('row8').style.display = 'inline-block';

    }

    if (wst9.indexOf("CryptoBot") !== -1) {
        document.getElementById('iws9').src = 'https://tptradix.github.io/OpenWorksUI/img/cash.png';
        document.getElementById('tws9').innerHTML = 'Receive';
        document.getElementById('pws9').innerHTML = 'In proccess';
        document.getElementById('row9').style.display = 'inline-block';

    }

    if (wst9.indexOf('work') !== -1) {
        document.getElementById('iws9').src = 'https://tptradix.github.io/OpenWorksUI/img/cash.png';
        document.getElementById('tws9').innerHTML = 'Receive';
        document.getElementById('pws9').innerHTML = 'In proccess';
        document.getElementById('row9').style.display = 'inline-block';
    }


    if (wst10.indexOf("CryptoBot") !== -1) {
        document.getElementById('iws10').src = 'https://tptradix.github.io/OpenWorksUI/img/cash.png';
        document.getElementById('tws10').innerHTML = 'Receive';
        document.getElementById('pws10').innerHTML = 'In proccess';
        document.getElementById('row10').style.display = 'inline-block';

    }

    if (wst10.indexOf('work') !== -1) {
        document.getElementById('iws10').src = 'https://tptradix.github.io/OpenWorksUI/img/cash.png';
        document.getElementById('tws10').innerHTML = 'Receive';
        document.getElementById('pws10').innerHTML = 'In proccess';
        document.getElementById('row10').style.display = 'inline-block';
    }


    if (wst1.indexOf("CryptoBot") !== -1) {
        iwst1.addEventListener('click', () => {
            document.querySelector('.pay_d').style.display = 'grid';
            form_c.style.display = 'none';
            ch1.innerHTML = "Receive";
            document.querySelector('.acpt_i').href = document.getElementById('infT1').textContent;
            document.getElementById('del_f').value = document.querySelector('.at_id_1').textContent;

        });
    }

    if (wst2.indexOf("CryptoBot") !== -1) {
        iwst2.addEventListener('click', () => {
            document.querySelector('.pay_d').style.display = 'grid';
            form_c.style.display = 'none';
            ch1.innerHTML = "Receive";
            document.querySelector('.acpt_i').href = document.getElementById('infT2').textContent;
            document.getElementById('del_f').value = document.querySelector('.at_id_2').textContent.split(' ').join('');
            console.log(document.getElementById('del_f').value)
        });
    }

    if (wst3.indexOf("CryptoBot") !== -1) {
        iwst3.addEventListener('click', () => {
            document.querySelector('.pay_d').style.display = 'grid';
            form_c.style.display = 'none';
            ch1.innerHTML = "Receive";
            document.querySelector('.acpt_i').href = document.getElementById('infT3').textContent;
            document.getElementById('del_f').value = document.querySelector('.at_id_3').textContent.split(' ').join('');
            console.log(document.getElementById('del_f').value)
        });
    }

    if (wst4.indexOf("CryptoBot") !== -1) {
        iwst4.addEventListener('click', () => {
            document.querySelector('.pay_d').style.display = 'grid';
            form_c.style.display = 'none';
            ch1.innerHTML = "Receive";
            document.querySelector('.acpt_i').href = document.getElementById('infT4').textContent;
            document.getElementById('del_f').value = document.querySelector('.at_id_4').textContent.split(' ').join('');
            console.log(document.getElementById('del_f').value)
        });
    }

    if (wst5.indexOf("CryptoBot") !== -1) {
        iwst5.addEventListener('click', () => {
            document.querySelector('.pay_d').style.display = 'grid';
            form_c.style.display = 'none';
            ch1.innerHTML = "Receive";
            document.querySelector('.acpt_i').href = document.getElementById('infT5').textContent;
            document.getElementById('del_f').value = document.querySelector('.at_id_5').textContent.split(' ').join('');
            console.log(document.getElementById('del_f').value)
        });
    }

    if (wst6.indexOf("CryptoBot") !== -1) {
        iwst6.addEventListener('click', () => {
            document.querySelector('.pay_d').style.display = 'grid';
            form_c.style.display = 'none';
            ch1.innerHTML = "Receive";
            document.querySelector('.acpt_i').href = document.getElementById('infT6').textContent;
            document.getElementById('del_f').value = document.querySelector('.at_id_6').textContent.split(' ').join('');
            console.log(document.getElementById('del_f').value)
        });
    }

    if (wst7.indexOf("CryptoBot") !== -1) {
        iwst7.addEventListener('click', () => {
            document.querySelector('.pay_d').style.display = 'grid';
            form_c.style.display = 'none';
            ch1.innerHTML = "Receive";
            document.querySelector('.acpt_i').href = document.getElementById('infT7').textContent;
            document.getElementById('del_f').value = document.querySelector('.at_id_7').textContent.split(' ').join('');
            console.log(document.getElementById('del_f').value)
        });
    }

    if (wst8.indexOf("CryptoBot") !== -1) {
        iwst8.addEventListener('click', () => {
            document.querySelector('.pay_d').style.display = 'grid';
            form_c.style.display = 'none';
            ch1.innerHTML = "Receive";
            document.querySelector('.acpt_i').href = document.getElementById('infT8').textContent;
            document.getElementById('del_f').value = document.querySelector('.at_id_8').textContent.split(' ').join('');
            console.log(document.getElementById('del_f').value)
        });
    }

    if (wst9.indexOf("CryptoBot") !== -1) {
        iwst9.addEventListener('click', () => {
            document.querySelector('.pay_d').style.display = 'grid';
            form_c.style.display = 'none';
            ch1.innerHTML = "Receive";
            document.querySelector('.acpt_i').href = document.getElementById('infT9').textContent;
            document.getElementById('del_f').value = document.querySelector('.at_id_9').textContent.split(' ').join('');
            console.log(document.getElementById('del_f').value)
        });
    }

    if (wst10.indexOf("CryptoBot") !== -1) {
        iwst10.addEventListener('click', () => {
            document.querySelector('.pay_d').style.display = 'grid';
            form_c.style.display = 'none';
            ch1.innerHTML = "Receive";
            document.querySelector('.acpt_i').href = document.getElementById('infT10').textContent;
            document.getElementById('del_f').value = document.querySelector('.at_id_10').textContent.split(' ').join('');
            console.log(document.getElementById('del_f').value)
        });
    }

    document.getElementById('re').addEventListener('click', () => {
        window.location.reload();
    });

    document.getElementById('market').addEventListener('click', () => {
        document.getElementById('show_w_1').style.display = 'inline';
        setTimeout(function() {
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
                show()
            } else {
                opacity -= 0.2;
                to_opacity.style.opacity = opacity;
            }
            function show() {
                setInterval(() => {
                    document.querySelector('.body_st').style.opacity = 1;
                    document.querySelector('.body_st').style.display = 'block';
                }, 1000)
            }
        }, 10)
    });
}();
