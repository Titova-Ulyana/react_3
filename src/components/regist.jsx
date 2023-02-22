import React, { useState } from "react";

const Regist = () => {

    const [user_reg,setUser_reg] = useState();
    //console.log(user_reg)
    return (
<div>
    <div className="p-3">
    <form className="w-50 m-auto border p-3 was-validated" style={{'minWidth':'300px;'}}>
        <div className="mb-3">
            <label for="name" className="form-label">Введите имя:</label>
            <input type="text" className="form-control" id="name" required onChange={(e)=>setUser_reg({...user_reg, name:e.target.value})}/>
            <div id="emailHelp1" className="form-text">Используйте кириллические буквы</div>
        </div>

        <div className="mb-3">
            <label for="phone" className="form-label">Введите свой телефон:</label>
            <input type="tel" className="form-control" id="phone" required onChange={(e)=>setUser_reg({...user_reg, phone:e.target.value})}/>
            <div  className="form-text">Используйте цифры, +, -.</div>
        </div>

        <div className="mb-3">
            <label for="email" className="form-label">Введите адрес электронной почты</label>
            <input type="email" className="form-control" id="email" required onChange={(e)=>setUser_reg({...user_reg, email:e.target.value})}/>
            <div  className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
        </div>

        <div className="mb-3">
            <label for="password" className="form-label">Введите пароль:</label>
            <input type="password" className="form-control" id="password" required onChange={(e)=>setUser_reg({...user_reg, password:e.target.value})}/>
            <div  className="form-text">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная буква, 1 - заглавная буква</div>
        </div>

        <div className="mb-3">
            <label for="confirm_password" className="form-label">Повторите пароль:</label>
            <input type="password" className="form-control" id="confirm_password" required onChange={(e)=>setUser_reg({...user_reg, confirm_password:e.target.value})}/>
            <div className="form-text"></div>
        </div>

        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="check" required onChange={(e)=>setUser_reg({...user_reg, check:e.target.value})}/>
            <label className="form-check-label" for="check">Согласие на обработку персональных данных</label>
        </div>

        <input type="submit" className="btn btn-primary" value="Зарегистрироваться"/>
    </form>
    </div>
</div>

    );
};

export default Regist;