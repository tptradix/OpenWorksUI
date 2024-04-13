!function() {
    var {r, t, w} = {
        r: function() {
            setTimeout(() => {
                document.querySelector('.ld_wp').style.display = 'none';
                document.querySelector('.main').style.display = 'block';
            }, 3000);
        }(r),
        t: function Events() {
            var id, c, s, g, h = {
                c: (() => {
                    document.querySelectorAll('input[name="test"]').forEach(function(radio) {
                        radio.addEventListener('click', function() {
                            document.querySelectorAll('input[name="test"]').forEach(function(radio) {
                                radio.checked = false;
                                radio.removeAttribute('checked');
                            });
                            this.checked = true;
                            return console.log(this, this.checked);
                        });
                    });
                    document.querySelectorAll('input[name="test2"]').forEach(function(radio) {
                        radio.addEventListener('click', function() {
                            document.querySelectorAll('input[name="test2"]').forEach(function(radio) {
                                radio.checked = false;
                                radio.removeAttribute('checked');
                            });
                            this.checked = true;
                            return console.log(this, this.checked);
                        });
                    });
                    document.querySelectorAll('input[name="test3"]').forEach(function(radio) {
                        radio.addEventListener('click', function() {
                            document.querySelectorAll('input[name="test3"]').forEach(function(radio) {
                                radio.checked = false;
                                radio.removeAttribute('checked');
                            });
                            this.checked = true;
                            return console.log(this, this.checked);
                        });
                    });
                })(c)
            };
        }()
    }
}();