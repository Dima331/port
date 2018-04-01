
const formWork = (function () {
    return {
        init: function () {
            new Vue({
                el: '.communications',
                data: {
                    name: '',
                    email: '',
                    message: '',
                    w: window.innerWidth,
                    Error: {
                        IsName: false,
                        IsEmail: false,
                        IsMessage: false
                    },
                    FormMargin: {
                        FormName: false,
                        FormEmail: false,
                        FormMessage: false
                    }
                },
                methods: {
                    send: function (name, email, message,event) {
                        event.preventDefault();
                        console.log(window.innerWidth);
                        //this.display.display = 'none';
                        this.Error.IsName = false;
                        this.Error.IsEmail = false;
                        this.Error.IsMessage = false;
                        this.FormMargin.FormName = false;
                        this.FormMargin.FormEmail = false;
                        this.FormMargin.FormMessage = false;

                        if (this.w > 851) {
                            if (!name) {
                                this.Error.IsName = true;
                            }
                            if (!email) {
                                this.Error.IsEmail = true;
                            }
                            if (!message) {
                                this.Error.IsMessage = true;
                            }
                        } if(this.w < 851) {
                            
                            console.log('ksdjkjksd');
                            console.log(window.innerWidth);
                            if (!name) {
                                this.Error.IsName = true;
                                this.FormMargin.FormName = true;
                            }
                            if (!email) {
                                this.Error.IsEmail = true;
                                this.FormMargin.FormEmail = true;
                            }
                            if (!message) {
                                this.Error.IsMessage = true;
                                this.FormMargin.FormMessage = true;
                            }
                        }
                    },
                    clear: function(name,email, message, event){
                        event.preventDefault();
                        this.name = '';
                        this.email = '';
                        this.message = '';
                        
                    }
                }
            });
        },
    };
}());
module.exports = formWork;