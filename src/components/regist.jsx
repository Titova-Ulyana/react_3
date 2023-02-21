import React from "react";

const Regist = () => {
    return (
<div>
    <h2 className="text-center text-white bg-primary m-2">Регистрация</h2>
    <div className="p-3">
    <form className="w-50 m-auto border p-3 was-validated" style={{'minWidth':'300px;'}}>
        <div className="mb-3">
            <label for="name" className="form-label">Введите имя:</label>
            <input type="text" className="form-control" id="name" required/>
            <div id="emailHelp1" className="form-text">Используйте кириллические буквы</div>
        </div>

        <div className="mb-3">
            <label for="phone" className="form-label">Введите свой телефон:</label>
            <input type="tel" className="form-control" id="phone" required/>
            <div  className="form-text">Используйте цифры, +, -.</div>
        </div>

        <div className="mb-3">
            <label for="email" className="form-label">Введите адрес электронной почты</label>
            <input type="email" className="form-control" id="email" required/>
            <div  className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
        </div>

        <div className="mb-3">
            <label for="password" className="form-label">Введите пароль:</label>
            <input type="password" className="form-control" id="password"/>
            <div  className="form-text">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная буква, 1 - заглавная буква</div>
        </div>

        <div className="mb-3">
            <label for="confirm_password" className="form-label">Повторите пароль:</label>
            <input type="password" className="form-control" id="confirm_password"/>
            <div className="form-text"></div>
        </div>

        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="check" required/>
            <label className="form-check-label" for="check">Согласие на обработку персональных данных</label>
        </div>

        <input type="submit" className="btn btn-primary" value="Зарегистрироваться"/>
    </form>
    </div>
</div>

    );
};

export default Regist;