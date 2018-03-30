
const formWelcome = (function () {
    return {
        init: function () {
            new Vue({
                el: '.back',
                data: {
                    message: 'Привет, Vue!',
                    name: '',
                    password: '',
                    picked: 'Нет',
                    checked: true,
                    display: {
                        display: 'none'
                    },
                    error: {
                        border: '0px solid red'
                    },
                },
                //Добавить код для появление блоков, если нет переменной.
                //
                methods: {
                    come: function (name, password, checked, picked) {
                        if (!name) {
                            alert("Нет логина");
                            this.error.border = '2px solid red';
                            
                        }
                        if (!password) {
                            alert("Нет пароля");
                            this.error.border = '2px solid red';
                        }
                        if (!checked) {
                            alert("Нет чека");

                        }
                        if (picked == "Нет") {
                            alert("Нет радио");
                        }

                        
                        if (name && password) {
                            if (name == "111" && password == "111") {
                                //Сдесь код перехода страницы
                            } else {
                                this.display.display = 'block';
                            }
                        }


                    }
                }
            });


        },
    };
}());
module.exports = formWelcome;