import React from "react";
import css from '../css/add.css';


const Add = () => {
    return (
<div>
<link rel="stylesheet" href={css}/>
    <h2 className="text-center text-white bg-primary m-2">Добавление нового объявления</h2>
    <div className="p-3">
        <form className="w-50 m-auto border border-primary p-3 was-validated" style={{'minWidth':'300px;'}}>

            <div className="mb-3">
                <label for="name" className="form-label">Введите ваше имя</label>
                <input type="text" className="form-control" id="name" required/>
                <div  className="form-text">Используйте кириллические буквы.</div>
            </div>

            <div className="mb-3">
                <label for="phone" className="form-label">Введите свой телефон:</label>
                <input type="text" className="form-control" id="phone" required/>
                <div  className="form-text">Используйте цифры, +, -.</div>
            </div>

            <div className="mb-3">
                <label for="email" className="form-label">Введите адрес электронной почты</label>
                <input type="email" className="form-control" id="email" required/>
                <div  className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
            </div>

            <div className="mb-3">
                <label for="kind" className="form-label">Введите вид животного:</label>
                <input type="text" className="form-control" id="kind" required/></div>

            <div className="mb-3 form-check border p-3">
                <input type="checkbox" className="form-check-input m-3" id="exampleCheck1"/>
                <label className="form-check-label m-3" for="exampleCheck1">Пройти автоматическую регистрацию</label>
                <label for="password" className="form-label hidden">Введите пароль:</label>
                <input type="password" className="form-control hidden" id="password"/>
                <div  className="form-text hidden">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная буква, 1 - заглавная буква</div>
                <label for="confirm_password" className="form-label hidden">Повторите пароль пароль:</label>
                <input type="password" className="form-control hidden" id="confirm_password"/>



            </div>

            <div className="mb-3 p-3 border">
                <label for="image1" className="form-label">Выберите файлы изображений:</label>
                <input type="file" className="form-control mb-3" id="image1" required/>
                <input type="file" className="form-control mb-3" id="image2"/>
                <input type="file" className="form-control mb-3" id="image3"/>
            </div>

            <div className="mb-3">
                <label for="chip" className="form-label">Электронный чип:</label>
                <input type="text" className="form-control" id="chip" required/></div>

            <div className="mb-3">
                <label for="description" className="form-label">Описание:</label>
                <textarea className="form-control" id="description" required></textarea></div>

            <div className="mb-3 form-check p-3">
                <input type="checkbox" className="form-check-input" id="check1" required/>
                <label className="form-check-label" for="check1">Подтвердить согласие на обработку персональных данных</label>
            </div>

            <input type="submit" className="btn btn-primary" value="Зарегистрировать"/>
        </form>
    </div>
</div>

    );
};

export default Add;