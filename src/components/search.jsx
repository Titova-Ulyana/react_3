import React from "react";

const Searchs = () => {
    return (
<div>
    <h2 className="text-center text-white bg-primary m-2">Поиск по объявлениям</h2>
    <div className="p-3">
        <form className="w-50 m-auto border p-3" style={{'minWidth':'300px'}}>

            <div className="mb-3">
                <label for="district" className="form-label">Выберите район:</label>
                <select id="district" className="form-select">
                    <option>Приморский</option>
                    <option>Петроградский</option>
                    <option>Василиостровский</option>
                    <option>Центральный</option>
                    <option>Красногвардейский</option>
                    <option>Выборгский</option>
                    <option>Калининский</option>
                </select>
            </div>

            <div className="mb-3">
                <label for="password" className="form-label">Введите вид животного:</label>
                <input type="text" className="form-control" id="password"/>
            </div>
            <input type="submit" className="btn btn-primary" value="Войти"/>
        </form>
    </div>
</div>

    );
};

export default Searchs;