var ValidForm = {
    patterns: {
        email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
        password: /^[A-ZА-ЯЁІЇa-zа-яёії0-9]{3,}$/,
        text: /^[aA-zZ0-9аА-яЯ ёЁЇїІіЄє,\.\s\-\+\(\)"\!\№\$\%\*\;\s\:\—\?]+|^$/,
        integer: /^[0-9]+$/,
        fullname: /^[а-яА-ЯёЁa-zA-Z\s-]{2,100}$/,


        // login: /^[aA-zZ0-9аА-яЯ ]+$/,
        // ip: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
        // float: /^\d*(\.?|,?)\d*$/,
        // textarea: /^[aA-zZ0-9аА-яЯ ёЁЇїІіЄє,\.\s\-\+\(\)"\!\№\$\%\*\;\s\:\—\?]{3,155}|^$/
    },
    message: {
        emptyField: 'Не указаны данные!',
        password: 'Некорректный пароль',
        email: 'Неверный формат Email',
        text: 'Введены недопустимые символы',
        integer: 'Только целое число',
        fullname: 'Некорректное имя',

        // passField: 'Пароль слишком прост',
        // passVerification: 'Пароли не совпадают',
        // passVerificationEmpty: 'Подтвердите пароль',
        // login: 'Недопустимый Логин, только бувквы цыфры _.',
        // checkboxField: 'Необходимо отметить',
        // subdomain: 'Недопустимый формат доменa',
        // date: 'Неверный формат даты. dd-mm-yyyy',
        // ip: 'Неверный формат ip',
        // float: 'Можно вводить только числа',
        // textarea: 'Данное поле должно содержать минимум 2 символа'
    },

    validateInput: function (input) {
        var value = input.val();
        input.removeClass('true');
        var result = false;
        if (!value.length && input.attr('required')) {
            input.attr('placeholder', ValidForm.message.emptyField).addClass('error').val('');
        } else {
            var pattern = input.attr('data-pattern');
            var isValid = value.search(ValidForm.patterns[pattern]) != -1;
            if (!isValid) {
                input.attr('placeholder', ValidForm.message[pattern]).addClass('error').val('');
            } else {
                input.addClass('true');
                result = true;
            }
        }
        return result;
    },

    focusInput: function (input) {
        var placeholder = input.attr('data-placeholder');
        if (input.hasClass('error')) input.removeClass('error').attr('placeholder', placeholder);
        if (placeholder) input.attr('placeholder', placeholder);
    },

    focusOutInput: function (input) {
        ValidForm.validateInput(input);
    },

    submit: function (e, $submit) {
        var form = $submit.closest('form');
        var inputs = form.find('input[data-pattern]');
        var checkBox = form.find('[type="checkbox"][required]');
        var isValid = true;
        inputs.each(function () {
            var isValidInput = ValidForm.validateInput($(this));
            if (!isValidInput) isValid = false;
        });
        checkBox.each(function () {
            if (!this.checked) {
                isValid = false;
                $(this).addClass('error');
            }
        });
        if (!isValid) {
            e.preventDefault();
        } else {
            console.log('submit');
        }
    },
};