!function() {
    var {r, t, w} = {
        t: function Events() {
            var id, c, s, g, h = {
                c: (() => {
                    var bal = parseFloat(document.getElementById('blnc').textContent)
                    document.querySelectorAll('input[name="test"]').forEach(function(radio) {
                        radio.addEventListener('click', function() {
                            document.querySelectorAll('input[name="test"]').forEach(function(radio) {
                                radio.checked = false;
                            });
                            this.checked = true;
                            document.getElementById('isV').value = this.id;
                        });
                    });
                    document.querySelectorAll('input[name="test2"]').forEach(function(radio) {
                        radio.addEventListener('click', function() {
                            document.querySelectorAll('input[name="test2"]').forEach(function(radio) {
                                radio.checked = false;
                            });
                            this.checked = true;
                            document.getElementById('isP').value = this.id;
                        });
                    });
                    document.querySelectorAll('input[name="test3"]').forEach(function(radio) {
                        radio.addEventListener('click', function() {
                            document.querySelectorAll('input[name="test3"]').forEach(function(radio) {
                                radio.checked = false;
                            });
                            this.checked = true;
                            document.getElementById('isT').value = this.id;
                        });
                    });
                    document.querySelectorAll('input[name="test4"]').forEach(function(radio) {
                        radio.addEventListener('click', function() {
                            document.querySelectorAll('input[name="test4"]').forEach(function(radio) {
                                radio.checked = false;
                            });
                            this.checked = true;
                            document.getElementById('isR').value = this.id;
                        });
                    });
                    document.getElementById('rew').addEventListener('input', () => {
                        if(document.getElementById('rew').value < 0.1) {
                            document.getElementById('rew').style.borderBottom = '1.5px solid #df3f40';
                            if((document.getElementById('rew').value <= bal && (document.getElementById('rew').value > 1)) && document.getElementById('des').value.length > 10) {
                                document.getElementById('conf').style.backgroundColor = '#3390EC';
                                document.getElementById('conf').setAttribute('type', 'submit');
                            }
                            else {
                                document.getElementById('conf').style.backgroundColor = '#707579';
                                document.getElementById('conf').setAttribute('type', 'button');
                            }
                        }
                        else {
                            document.getElementById('rew').style.borderBottom = '1.5px solid #3390EC';
                            if((document.getElementById('rew').value <= bal && (document.getElementById('rew').value > 1)) && document.getElementById('des').value.length > 10) {
                                document.getElementById('conf').style.backgroundColor = '#3390EC';
                                document.getElementById('conf').setAttribute('type', 'submit');
                            }
                            else {
                                document.getElementById('conf').style.backgroundColor = '#707579';
                                document.getElementById('conf').setAttribute('type', 'button');
                            }
                        }
                    });
                    document.getElementById('des').addEventListener('input', () => {
                        if(document.getElementById('des').value.length < 10) {
                            document.getElementById('des').style.borderBottom = '1.5px solid #df3f40';
                            if((document.getElementById('rew').value <= bal && (document.getElementById('rew').value > 1)) && document.getElementById('des').value.length > 10) {
                                document.getElementById('conf').style.backgroundColor = '#3390EC';
                                document.getElementById('conf').setAttribute('type', 'submit');
                            }
                            else {
                                document.getElementById('conf').style.backgroundColor = '#707579';
                                document.getElementById('conf').setAttribute('type', 'button');
                            }
                        }
                        else {
                            document.getElementById('des').style.borderBottom = '1.5px solid #3390EC';
                            if((document.getElementById('rew').value <= bal && (document.getElementById('rew').value > 1)) && document.getElementById('des').value.length > 10) {
                                document.getElementById('conf').style.backgroundColor = '#3390EC';
                                document.getElementById('conf').setAttribute('type', 'submit');
                            }
                            else {
                                document.getElementById('conf').style.backgroundColor = '#707579';
                                document.getElementById('conf').setAttribute('type', 'button');
                            }
                        }
                    });
                })(c)
            };
        }()
    }
}();
