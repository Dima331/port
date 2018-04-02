
const formWelcome = (function () {
    return {
        init: function () {
            new Vue({
                el: '.back',
                data: {
                    name: '',
                    password: '',
                    picked: 'Нет',
                    checked: true,
                    w: window.innerWidth,
                    Error: {
                        IsLogin: false,
                        IsPassword: false,
                        IsChecked: false,
                        IsPicked: false
                    },
                    FormMargin: {
                        FormLogin: false,
                        FormPassword: false,
                        FormChecked: false,
                        FormPicked: false
                    },
                    display: {
                        display: 'none'
                    }
                },
                methods: {
                    come: function (name, password, checked, picked) {
                        console.log(window.innerWidth);
                        this.display.display = 'none';
                        this.Error.IsLogin = false;
                        this.Error.IsPassword = false;
                        this.Error.IsChecked = false;
                        this.Error.IsPicked = false;
                        this.FormMargin.FormLogin = false;
                        this.FormMargin.FormPassword = false;
                        this.FormMargin.FormChecked = false;
                        this.FormMargin.FormPicked = false;

                        if (this.w > 851) {
                            if (!name) {
                                this.Error.IsLogin = true;
                            }
                            if (!password) {
                                this.Error.IsPassword = true;
                            }
                            if (!checked) {
                                this.Error.IsChecked = true;
                            }
                            if (picked == "Нет") {
                                this.Error.IsPicked = true;
                            }
                            if (name && password) {
                                if (name == "111" && password == "111") {
                                    //преход в админку
                                    console.log("Hellow)");
                                } else {
                                    this.display.display = 'block';
                                }
                            }
                        } if(this.w < 851) {

                            console.log(window.innerWidth);
                            if (!name) {
                                this.Error.IsLogin = true;
                                this.FormMargin.FormLogin = true;
                            }
                            if (!password) {
                                this.Error.IsPassword = true;
                                this.FormMargin.FormPassword = true;
                            }
                            if (!checked) {
                                this.Error.IsChecked = true;
                                this.FormMargin.FormChecked = true;
                            }
                            if (picked == "Нет") {
                                this.Error.IsPicked = true;
                                this.FormMargin.FormPicked = true;
                            }
                            if (name && password) {
                                if (name == "111" && password == "111") {
                                    //преход в админку
                                    console.log("Hellow)");
                                } else {
                                    this.display.display = 'block';
                                }
                            }
                        }
                    }
                }
            });
        },
    };
}());
module.exports = formWelcome;