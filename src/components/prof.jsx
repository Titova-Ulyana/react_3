import React from "react";

const Prof = () => {
    return (
<div>
    <div className="p-3">
            <div className="d-flex flex-row flex-wrap border m-auto p-3 w-50" style={{'minWidth':'300px'}}>

                <p className="w-50 text-primary" style={{'minWidth':'250px'}}>id:</p>
                <p className="w-50" style={{'minWidth':'300px'}}>14</p>

                <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Телефон:</p>
                <p className="w-50" style={{'minWidth':'300px'}}>+7-911-456-78-78</p>

                <p className="w-50 text-primary" style={{'minWidth':'300px'}}>email:</p>
                <p className="w-50" style={{'minWidth':'300px'}}>leonid@yandex.ru</p>

                <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Имя:</p>
                <p className="w-50" style={{'minWidth':'300px'}}>Леонид</p>

                <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Дата регистрации:</p>
                <p className="w-50" style={{'minWidth':'300px'}}>26-06-2015</p>

                <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Количество найденных животных:</p>
                <p className="w-50" style={{'minWidth':'300px'}}>2</p>

                <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Количество объявлений:</p>
                <p className="w-50" style={{'minWidth':'300px'}}>4</p>
            </div>


    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Изменить данные
    </button>
    
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">

            <div className="modal-body">
            
                <form style={{'minWidth':'300px'}}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Введите адрес электронной почты</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div  className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                    </div>
                </form>

                <form>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Введите номер телефона</label>
                        <input type="tel" className="form-control" id="phone" aria-describedby="emailHelp"/>
                        <div className="form-text">Используйте цифры, +, -.</div>
                    </div>
                </form>

            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            <button type="button" className="btn btn-primary">Сохранить изменения</button>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>

    );
};

export default Prof;