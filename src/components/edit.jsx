import React from "react";

const Edit = () => {
    return (
<div>
    <div class="p-3">
        <form class="w-50 m-auto border border-primary p-3 was-validated" style={{'minWidth':'300px;'}}>
            <div class="mb-3">
                <label for="kind" class="form-label">Введите вид животного:</label>
                <input type="text" class="form-control" id="kind" required/></div>

            <div class="mb-3 p-3 border">
                <label for="image1" class="form-label">Выберите файлы изображений:</label>
                <input type="file" class="form-control mb-3" id="image1"required/>
                <input type="file" class="form-control mb-3" id="image2"/>
                <input type="file" class="form-control mb-3" id="image3"/>
            </div>

            <div class="mb-3">
                <label for="chip" class="form-label">Электронный чип:</label>
                <input type="text" class="form-control" id="chip" required/></div>

            <div class="mb-3">
                <label for="description" class="form-label">Описание:</label>
                <textarea class="form-control" id="description" required></textarea></div>
                
            <input type="submit" class="btn btn-primary form-control" value={"Отправить"}/>
        </form>
    </div>
</div>

    );
};

export default Edit;