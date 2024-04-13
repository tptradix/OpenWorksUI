!function() {
    let ldwp = document.querySelector('.ld_wp');
    let maind = document.querySelector('.main');
    setTimeout(() => {
        ldwp.style.display = 'none';
        maind.style.display = 'block';

    }, 2000);
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
    const openBtnL1 = document.getElementById('iws1');
    const openBtnL2 = document.getElementById('iws2');
    const openBtnL3 = document.getElementById('iws3');
    const openBtnL4 = document.getElementById('iws4');
    const openBtnL5 = document.getElementById('iws5');
    const openBtnL6 = document.getElementById('iws6');
    const openBtnL7 = document.getElementById('iws7');
    const openBtnL8 = document.getElementById('iws8');
    const openBtnL9 = document.getElementById('iws9');
    const openBtnL10 = document.getElementById('iws10');
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
    let drow1 = document.getElementById('row1');
    let wst1 = document.getElementById('infT1').textContent;
    let iwst1 = document.getElementById('iws1');
    let twst1 = document.getElementById('tws1');
    let pwst1 = document.getElementById('pws1');
    let drow2 = document.getElementById('row2');
    let wst2 = document.getElementById('infT2').textContent;
    let iwst2 = document.getElementById('iws2');
    let twst2 = document.getElementById('tws2');
    let pwst2 = document.getElementById('pws2');
    let wst3 = document.getElementById('infT3').textContent;
    let iwst3 = document.getElementById('iws3');
    let wst4 = document.getElementById('infT4').textContent;
    let iwst4 = document.getElementById('iws4');
    let wst5 = document.getElementById('infT5').textContent;
    let iwst5 = document.getElementById('iws5');
    let wst6 = document.getElementById('infT6').textContent;
    let iwst6 = document.getElementById('iws6');
    let wst7 = document.getElementById('infT7').textContent;
    let iwst7 = document.getElementById('iws7');
    let wst8 = document.getElementById('infT8').textContent;
    let iwst8 = document.getElementById('iws8');
    let wst9 = document.getElementById('infT9').textContent;
    let iwst9 = document.getElementById('iws9');
    let wst10 = document.getElementById('infT10').textContent;
    let iwst10 = document.getElementById('iws10');




	let disableScroll = function () {
		let pagePosition = window.scrollY;
		document.body.classList.add('disable-scroll');
		document.body.dataset.position = pagePosition;
		document.body.style.top = -pagePosition + 'px';
	}

	let enableScroll = function () {
		let pagePosition = parseInt(document.body.dataset.position, 10);
		document.body.style.top = 'auto';
		document.body.classList.remove('disable-scroll');
		window.scroll({ top: pagePosition, left: 0 });
		document.body.removeAttribute('data-position');
	}

	openBtn.addEventListener('click', () => {
		openModalDesktop();
		openModalMobile();
	});

	modal.addEventListener('click', (e) => {
		if (e.target == modal) {
			closeModal();
		}
	});

	closeBtn.addEventListener('click', () => {
		closeModal();
	});

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

	mobileClose.addEventListener('swiped-down', function (e) {
		closeModalMobile();
	});

	mobileClose.addEventListener('click', function (e) {
		closeModalMobile();
	});

    //n

    if (wst1.indexOf("CryptoBot") !== -1) {
        openBtnL1.addEventListener('click', () => {
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

        mobileClose.addEventListener('swiped-down', function (e) {
            closeModalMobileL();
        });

        mobileClose.addEventListener('click', function (e) {
            closeModalMobileL();
        });


        mobileClose.addEventListener('click', () => {
            onev.style.display = 'none';
            form_c.style.display = 'none';
            ch1.innerHTML = 'Payment Method'
            document.querySelector('.pay_d').style.display = 'none'
        });
    }

    //2
    if (wst2.indexOf("CryptoBot") !== -1) {
        openBtnL2.addEventListener('click', () => {
            openModalDesktopL2();
            openModalMobileL2();
        });

        modal.addEventListener('click', (e) => {
            if (e.target == modal) {
                closeModalL2();
            }
        });

        closeBtn.addEventListener('click', () => {
            closeModalL2();
        });

        const openModalDesktopL2 = () => {
            modal.classList.add('is-open');
            disableScroll();
        }

        const closeModalL2 = () => {
            modal.classList.remove('is-open');
            disableScroll();
        }

        const openModalMobileL2 = () => {
            modal.classList.add('is-open');
            disableScroll();
            setTimeout(() => {
                modal.querySelector('.modal').classList.add('visible');
            }, 300);
        }

        const closeModalMobileL2 = () => {
            modal.querySelector('.modal').classList.remove('visible');
            setTimeout(() => {
                modal.classList.remove('is-open');
                enableScroll();
            }, 400);
        }

        mobileClose.addEventListener('swiped-down', function (e) {
            closeModalMobileL2();
        });

        mobileClose.addEventListener('click', function (e) {
            closeModalMobileL2();
        });
    }


    mobileClose.addEventListener('click', () => {
        onev.style.display = 'none';
        form_c.style.display = 'none';
        ch1.innerHTML = 'Payment Method';
        document.querySelector('.pay_d').style.display = 'none'
    });

    //2
    if (wst3.indexOf("CryptoBot") !== -1) {
        openBtnL3.addEventListener('click', () => {
            openModalDesktopL3();
            openModalMobileL3();
        });

        modal.addEventListener('click', (e) => {
            if (e.target == modal) {
                closeModalL3();
            }
        });

        closeBtn.addEventListener('click', () => {
            closeModalL3();
        });

        const openModalDesktopL3 = () => {
            modal.classList.add('is-open');
            disableScroll();
        }

        const closeModalL3 = () => {
            modal.classList.remove('is-open');
            disableScroll();
        }

        const openModalMobileL3 = () => {
            modal.classList.add('is-open');
            disableScroll();
            setTimeout(() => {
                modal.querySelector('.modal').classList.add('visible');
            }, 300);
        }

        const closeModalMobileL3 = () => {
            modal.querySelector('.modal').classList.remove('visible');
            setTimeout(() => {
                modal.classList.remove('is-open');
                enableScroll();
            }, 400);
        }

        mobileClose.addEventListener('swiped-down', function (e) {
            closeModalMobileL3();
        });

        mobileClose.addEventListener('click', function (e) {
            closeModalMobileL3();
        });


        mobileClose.addEventListener('click', () => {
            onev.style.display = 'none';
            form_c.style.display = 'none';
            ch1.innerHTML = 'Payment Method';
            document.querySelector('.pay_d').style.display = 'none'
        });
    }

    if (wst4.indexOf("CryptoBot") !== -1) {
        openBtnL4.addEventListener('click', () => {
            openModalDesktopL4();
            openModalMobileL4();
        });

        modal.addEventListener('click', (e) => {
            if (e.target == modal) {
                closeModalL4();
            }
        });

        closeBtn.addEventListener('click', () => {
            closeModalL4();
        });

        const openModalDesktopL4 = () => {
            modal.classList.add('is-open');
            disableScroll();
        }

        const closeModalL4 = () => {
            modal.classList.remove('is-open');
            disableScroll();
        }

        const openModalMobileL4 = () => {
            modal.classList.add('is-open');
            disableScroll();
            setTimeout(() => {
                modal.querySelector('.modal').classList.add('visible');
            }, 300);
        }

        const closeModalMobileL4 = () => {
            modal.querySelector('.modal').classList.remove('visible');
            setTimeout(() => {
                modal.classList.remove('is-open');
                enableScroll();
            }, 400);
        }

        mobileClose.addEventListener('swiped-down', function (e) {
            closeModalMobileL4();
        });

        mobileClose.addEventListener('click', function (e) {
            closeModalMobileL4();
        });


        mobileClose.addEventListener('click', () => {
            onev.style.display = 'none';
            form_c.style.display = 'none';
            ch1.innerHTML = 'Payment Method';
            document.querySelector('.pay_d').style.display = 'none'
        });
    }

    if (wst5.indexOf("CryptoBot") !== -1) {
        openBtnL5.addEventListener('click', () => {
            openModalDesktopL5();
            openModalMobileL5();
        });

        modal.addEventListener('click', (e) => {
            if (e.target == modal) {
                closeModalL5();
            }
        });

        closeBtn.addEventListener('click', () => {
            closeModalL5();
        });

        const openModalDesktopL5 = () => {
            modal.classList.add('is-open');
            disableScroll();
        }

        const closeModalL5 = () => {
            modal.classList.remove('is-open');
            disableScroll();
        }

        const openModalMobileL5 = () => {
            modal.classList.add('is-open');
            disableScroll();
            setTimeout(() => {
                modal.querySelector('.modal').classList.add('visible');
            }, 300);
        }

        const closeModalMobileL5 = () => {
            modal.querySelector('.modal').classList.remove('visible');
            setTimeout(() => {
                modal.classList.remove('is-open');
                enableScroll();
            }, 400);
        }

        mobileClose.addEventListener('swiped-down', function (e) {
            closeModalMobileL5();
        });

        mobileClose.addEventListener('click', function (e) {
            closeModalMobileL5();
        });


        mobileClose.addEventListener('click', () => {
            onev.style.display = 'none';
            form_c.style.display = 'none';
            ch1.innerHTML = 'Payment Method';
            document.querySelector('.pay_d').style.display = 'none'
        });
    }

    if (wst6.indexOf("CryptoBot") !== -1) {
        openBtnL6.addEventListener('click', () => {
            openModalDesktopL6();
            openModalMobileL6();
        });

        modal.addEventListener('click', (e) => {
            if (e.target == modal) {
                closeModalL6();
            }
        });

        closeBtn.addEventListener('click', () => {
            closeModalL6();
        });

        const openModalDesktopL6 = () => {
            modal.classList.add('is-open');
            disableScroll();
        }

        const closeModalL6 = () => {
            modal.classList.remove('is-open');
            disableScroll();
        }

        const openModalMobileL6 = () => {
            modal.classList.add('is-open');
            disableScroll();
            setTimeout(() => {
                modal.querySelector('.modal').classList.add('visible');
            }, 300);
        }

        const closeModalMobileL6 = () => {
            modal.querySelector('.modal').classList.remove('visible');
            setTimeout(() => {
                modal.classList.remove('is-open');
                enableScroll();
            }, 400);
        }

        mobileClose.addEventListener('swiped-down', function (e) {
            closeModalMobileL6();
        });

        mobileClose.addEventListener('click', function (e) {
            closeModalMobileL6();
        });


        mobileClose.addEventListener('click', () => {
            onev.style.display = 'none';
            form_c.style.display = 'none';
            ch1.innerHTML = 'Payment Method';
            document.querySelector('.pay_d').style.display = 'none'
        });
    }

    if (wst7.indexOf("CryptoBot") !== -1) {
        openBtnL6.addEventListener('click', () => {
            openModalDesktopL7();
            openModalMobileL7();
        });

        modal.addEventListener('click', (e) => {
            if (e.target == modal) {
                closeModalL7();
            }
        });

        closeBtn.addEventListener('click', () => {
            closeModalL7();
        });

        const openModalDesktopL7 = () => {
            modal.classList.add('is-open');
            disableScroll();
        }

        const closeModalL7 = () => {
            modal.classList.remove('is-open');
            disableScroll();
        }

        const openModalMobileL7 = () => {
            modal.classList.add('is-open');
            disableScroll();
            setTimeout(() => {
                modal.querySelector('.modal').classList.add('visible');
            }, 300);
        }

        const closeModalMobileL7 = () => {
            modal.querySelector('.modal').classList.remove('visible');
            setTimeout(() => {
                modal.classList.remove('is-open');
                enableScroll();
            }, 400);
        }

        mobileClose.addEventListener('swiped-down', function (e) {
            closeModalMobileL7();
        });

        mobileClose.addEventListener('click', function (e) {
            closeModalMobileL7();
        });


        mobileClose.addEventListener('click', () => {
            onev.style.display = 'none';
            form_c.style.display = 'none';
            ch1.innerHTML = 'Payment Method';
            document.querySelector('.pay_d').style.display = 'none'
        });
    }



    cryptobotb.addEventListener('click', () => {
        onev.style.display = 'none';
        ch1.innerHTML = "CryptoBot";
        form_c.style.display = 'block'
    })

    document.querySelector('.acp').addEventListener('click', () => {
        onev.style.display = 'block';
        document.querySelector('.pay_d').style.display = 'none';
        form_c.style.display = 'none';
    })

    mobileClose.addEventListener('click', () => {
        document.querySelector('.pay_d').style.display = 'none';
        form_c.style.display = 'none';
    })

    cp_amount.addEventListener('input', () => {
        cp_amount = document.getElementById('cp_amount').value;
        let ncpa = parseFloat(cp_amount);
        if (ncpa > 1 && ncpa < 1000) {
            console.log(ncpa);
            cryptobot.style.background = '#3390EC';
            cryptobot.setAttribute('type', 'submit');
        }
        else {
            cryptobot.style.background = '#707579';
            cryptobot.setAttribute('type', 'button');
        }
    })

    if (wst1.indexOf("CryptoBot") !== -1) {
        iwst1.src = 'img/cash.png';
        twst1.innerHTML = 'Receive';
        pwst1.innerHTML = 'In proccess';
        drow1.style.display = 'inline-block';

    }

    if (wst1.indexOf('1') !== -1) {
        iwst1.src = 'img/reg.png';
        twst1.innerHTML = 'Registration';
        pwst1.innerHTML = 'Completed';
        drow1.style.display = 'inline-block';
    }

    if (wst1.indexOf('work') !== -1) {
        iwst1.src = 'img/work_case.png';
        twst1.innerHTML = 'Deal';
        pwst1.innerHTML = 'In process';
        drow1.style.display = 'inline-block';
    }

    if (wst2.indexOf("CryptoBot") !== -1) {
        iwst2.src = 'img/cash.png';
        twst2.innerHTML = 'Receive';
        pwst2.innerHTML = 'In proccess';
        drow2.style.display = 'inline-block';

    }

    if (wst2.indexOf('work') !== -1) {
        iwst2.src = 'img/work_case.png';
        twst2.innerHTML = 'Deal';
        pwst2.innerHTML = 'In process';
        drow2.style.display = 'inline-block';
    }

    if (wst3.indexOf("CryptoBot") !== -1) {
        document.getElementById('iws3').src = 'img/cash.png';
        document.getElementById('tws3').innerHTML = 'Receive';
        document.getElementById('pws3').innerHTML = 'In proccess';
        document.getElementById('row3').style.display = 'inline-block';

    }

    if (wst3.indexOf('work') !== -1) {
        document.getElementById('iws3').src = 'img/work_case.png';
        document.getElementById('tws3').innerHTML = 'Deal';
        document.getElementById('row3').style.display = 'In process';
        document.getElementById('row3').style.display = 'inline-block';
    }

    if (wst4.indexOf("CryptoBot") !== -1) {
        document.getElementById('iws4').src = 'img/cash.png';
        document.getElementById('tws4').innerHTML = 'Receive';
        document.getElementById('pws4').innerHTML = 'In proccess';
        document.getElementById('row4').style.display = 'inline-block';

    }

    if (wst4.indexOf('work') !== -1) {
        document.getElementById('iws4').src = 'img/work_case.png';
        document.getElementById('tws4').innerHTML = 'Deal';
        document.getElementById('row4').style.display = 'In process';
        document.getElementById('row4').style.display = 'inline-block';
    }

    if (wst5.indexOf('work') !== -1) {
        document.getElementById('iws5').src = 'img/work_case.png';
        document.getElementById('tws5').innerHTML = 'Deal';
        document.getElementById('row5').style.display = 'In process';
        document.getElementById('row5').style.display = 'inline-block';
    }

    if (wst5.indexOf("CryptoBot") !== -1) {
        document.getElementById('iws5').src = 'img/cash.png';
        document.getElementById('tws5').innerHTML = 'Receive';
        document.getElementById('pws5').innerHTML = 'In proccess';
        document.getElementById('row5').style.display = 'inline-block';

    }

    if (wst6.indexOf("CryptoBot") !== -1) {
        document.getElementById('iws6').src = 'img/cash.png';
        document.getElementById('tws6').innerHTML = 'Receive';
        document.getElementById('pws6').innerHTML = 'In proccess';
        document.getElementById('row6').style.display = 'inline-block';

    }

    if (wst6.indexOf('work') !== -1) {
        document.getElementById('iws6').src = 'img/work_case.png';
        document.getElementById('tws6').innerHTML = 'Deal';
        document.getElementById('row6').style.display = 'In process';
        document.getElementById('row6').style.display = 'inline-block';
    }

    if (wst7.indexOf("CryptoBot") !== -1) {
        document.getElementById('iws7').src = 'img/cash.png';
        document.getElementById('tws7').innerHTML = 'Receive';
        document.getElementById('pws7').innerHTML = 'In proccess';
        document.getElementById('row7').style.display = 'inline-block';

    }

    if (wst8.indexOf('work') !== -1) {
        document.getElementById('iws8').src = 'img/cash.png';
        document.getElementById('tws8').innerHTML = 'Receive';
        document.getElementById('pws8').innerHTML = 'In proccess';
        document.getElementById('row8').style.display = 'inline-block';
    }

    if (wst8.indexOf("CryptoBot") !== -1) {
        document.getElementById('iws8').src = 'img/cash.png';
        document.getElementById('tws8').innerHTML = 'Receive';
        document.getElementById('pws8').innerHTML = 'In proccess';
        document.getElementById('row8').style.display = 'inline-block';

    }

    if (wst9.indexOf("CryptoBot") !== -1) {
        document.getElementById('iws9').src = 'img/cash.png';
        document.getElementById('tws9').innerHTML = 'Receive';
        document.getElementById('pws9').innerHTML = 'In proccess';
        document.getElementById('row9').style.display = 'inline-block';

    }

    if (wst9.indexOf('work') !== -1) {
        document.getElementById('iws9').src = 'img/cash.png';
        document.getElementById('tws9').innerHTML = 'Receive';
        document.getElementById('pws9').innerHTML = 'In proccess';
        document.getElementById('row9').style.display = 'inline-block';
    }


    if (wst10.indexOf("CryptoBot") !== -1) {
        document.getElementById('iws10').src = 'img/cash.png';
        document.getElementById('tws10').innerHTML = 'Receive';
        document.getElementById('pws10').innerHTML = 'In proccess';
        document.getElementById('row10').style.display = 'inline-block';

    }

    if (wst10.indexOf('work') !== -1) {
        document.getElementById('iws10').src = 'img/cash.png';
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
                }, 100)
            }
        }, 10)
    });
}();