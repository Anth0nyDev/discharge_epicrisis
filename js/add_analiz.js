const selector = document.getElementById('analiz')
const boxAnalizi = document.querySelector('.analizi')
const boxAdditionAnalizi = document.querySelector('.addition_analizi')

selector.addEventListener('change', function(e){
    if(e.target.selectedIndex == 1){
        e.target.options[1].setAttribute('disabled', 'disabled')
        let printHTML = `<div class="container">
        <p><img class="trash_container" src="./img/trash_container.png"><strong>ОАК:</strong></p>
        <table class="oak">
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Эрит.</th>
                    <th>Hb</th>
                    <th>Тромб.</th>
                    <th>Лейк.</th>
                    <th>п/я</th>
                    <th>с/я</th>
                    <th>Лимф.</th>
                    <th>Баз.</th>
                    <th>Эозин.</th>
                    <th>Моноц.</th>
                    <th>СОЭ</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><div class="input">
                    <input type="date">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td class="first"><button class="add_oak">Добавить</button></td>
                </tr>
            </tbody>
        </table>
        </div>`
        boxAnalizi.insertAdjacentHTML('beforeend', printHTML)
        e.target.selectedIndex = 0
    } else if(e.target.selectedIndex == 2){
        e.target.options[2].setAttribute('disabled', 'disabled')
        let printHTML = `<div class="container">
        <p><img class="trash_container" src="./img/trash_container.png"><strong>Биохимический анализ крови:</strong></p>
        <table class="bak">
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Креат.</th>
                    <th>Мочев.</th>
                    <th>ХС</th>
                    <th>АСТ</th>
                    <th>АЛТ</th>
                    <th>О бил.</th>
                    <th>Пр. бил</th>
                    <th>Белок</th>
                    <th>Сахар</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><div class="input">
                    <input type="date">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td class="first"><button class="add_bak">Добавить</button></td>
                </tr>
            </tbody>
        </table>
        </div>`
        boxAnalizi.insertAdjacentHTML('beforeend', printHTML)
        e.target.selectedIndex = 0
    } else if(e.target.selectedIndex == 3){
        e.target.options[3].setAttribute('disabled', 'disabled')
        let printHTML = `<div class="container">
        <p><img class="trash_container" src="./img/trash_container.png"><strong>ОАМ:</strong></p>
        <table class="oam">
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Цвет</th>
                    <th>Уд. вес</th>
                    <th>Реакция</th>
                    <th>Белок</th>
                    <th>Эритр.</th>
                    <th>Лейк.</th>
                    <th>Эп. кл.</th>
                    <th>Соли</th>
                    <th>Бакт.</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><div class="input">
                    <input type="date">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td class="first"><button class="add_oam">Добавить</button></td>
                </tr>
            </tbody>
        </table>
        </div>`
        boxAnalizi.insertAdjacentHTML('beforeend', printHTML)
        e.target.selectedIndex = 0
    } else if(e.target.selectedIndex == 4){
        e.target.options[4].setAttribute('disabled', 'disabled')
        let printHTML = `<div class="container">
        <p><img class="trash_container" src="./img/trash_container.png"><strong>Электролиты:</strong></p>
        <table class="electro">
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Калий</th>
                    <th>Натрий</th>
                    <th>Хлориды</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><div class="input">
                    <input type="date">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td><div class="input">
                    <textarea cols="10" rows="1"></textarea>
                    <img class="voice-trigger" src="./img/microphone.png">
                </div></td>
                    <td class="first"><button class="add_electro">Добавить</button></td>
                </tr>
            </tbody>
        </table>
        </div>`
        boxAnalizi.insertAdjacentHTML('beforeend', printHTML)
        e.target.selectedIndex = 0
    } else if(e.target.selectedIndex == 5){
        e.target.options[5].setAttribute('disabled', 'disabled')
        let printHTML = `<div class="container">
        <p><img class="trash_container" src="./img/trash_container.png"><strong>Анализ крови ВИЧ и гепатиты В и С от </strong><td><input id="HIV" type="date"></td>: не обнаружено</p>
        </div>`
        boxAnalizi.insertAdjacentHTML('beforeend', printHTML)
        e.target.selectedIndex = 0
    } else if(e.target.selectedIndex == 6){
        e.target.options[6].setAttribute('disabled', 'disabled')
        let printHTML = `<div class="container">
        <p><img class="trash_container" src="./img/trash_container.png"><strong>РМП от </strong><td><input id="RMP" type="date"></td>: отрицательно</p>
        </div>`
        boxAnalizi.insertAdjacentHTML('beforeend', printHTML)
        e.target.selectedIndex = 0
    } else if(e.target.selectedIndex == 7){
        e.target.options[7].setAttribute('disabled', 'disabled')
        let printHTML = `<div class="container">
        <p><img class="trash_container" src="./img/trash_container.png"><strong>Кал на я/гл </strong><td><input id="cal" type="date"></td>: отрицательно</p>
        </div>`
        boxAnalizi.insertAdjacentHTML('beforeend', printHTML)
        e.target.selectedIndex = 0
    } else if(e.target.selectedIndex == 8){
        e.target.options[8].setAttribute('disabled', 'disabled')
        let printHTML = `<div class="container">
        <div class="koag">
        <label><img class="trash_container" src="./img/trash_container.png"><strong>Коагулограмма </strong></label><input id="Koag" type="date"><label>: Фибрин - </label><div class="input">
        <textarea id="fibrin" cols="10" rows="1"></textarea>
        <img class="voice-trigger" src="./img/microphone.png">
    </div>, АЧТВ - <div class="input">
    <textarea id="ACHTV" cols="10" rows="1"></textarea>
    <img class="voice-trigger" src="./img/microphone.png">
</div>, ПТИ - <div class="input">
<textarea id="PTEE" cols="10" rows="1"></textarea>
<img class="voice-trigger" src="./img/microphone.png">
</div>%
</div>`
        boxAnalizi.insertAdjacentHTML('beforeend', printHTML)
        e.target.selectedIndex = 0
    } else if(e.target.selectedIndex == 9){
        e.target.options[9].setAttribute('disabled', 'disabled')
        let printHTML = `<div class="container">
        <div class="box"><p><img class="trash_container" src="./img/trash_container.png"><strong><select name="FLG" id="FLG">
        <option value="ФЛГ">ФЛГ</option>
        <option value="Рентген">Рентген</option>
    </select> ОГК </strong><input id="x-ray" type="date">: </p><div class="input">
    <textarea id="x-ray_input" cols="10" rows="1"></textarea>
    <img class="voice-trigger" src="./img/microphone.png">
</div></div></div>`
        boxAnalizi.insertAdjacentHTML('beforeend', printHTML)
        e.target.selectedIndex = 0
    } else if(e.target.selectedIndex == 10){
        e.target.options[10].setAttribute('disabled', 'disabled')
        let printHTML = `<div class="container">
        <div class="koag">
        <label><img class="trash_container" src="./img/trash_container.png"><strong>ОАМокроты </strong></label><input id="sputum" type="date">
        <label>: слизистая </label><select name="sputum" id="sputumSelect">
            <option value="жидкая">жидкая</option>
            <option value="вязкая">вязкая</option>
        </select>
        <label>, эпит. - </label>
        <div class="input">
            <textarea id="epitel" cols="30" rows="1"></textarea>
            <img class="voice-trigger" src="./img/microphone.png">
        </div>
        <label>, лейк. - </label>
        <div class="input">
            <textarea id="leiko" cols="30" rows="1"></textarea>
            <img class="voice-trigger" src="./img/microphone.png">
        </div>
        <label>, эрит. - </label>
        <div class="input">
            <textarea id="eritro" cols="30" rows="1"></textarea>
            <img class="voice-trigger" src="./img/microphone.png">
        </div>
    </div>
    </div>`
        boxAnalizi.insertAdjacentHTML('beforeend', printHTML)
        e.target.selectedIndex = 0
    } else if(e.target.selectedIndex == 11){
        e.target.options[11].setAttribute('disabled', 'disabled')
        let printHTML = `<div class="container">
        <p id="m_in"><img class="trash_container" src="./img/trash_container.png"><strong>Мокрота на ВК трехкратно:</strong> отриц.</p>
        </div>`
        boxAnalizi.insertAdjacentHTML('beforeend', printHTML)
        e.target.selectedIndex = 0
    } else if(e.target.selectedIndex == 12){
        e.target.options[12].setAttribute('disabled', 'disabled')
        let printHTML = `<div class="container">
        <div class="box">
        <label><img class="trash_container" src="./img/trash_container.png"><strong>Бак посев мокроты </strong></label><input id="bak_date" type="date"> :   
        <div class="input">
            <textarea id="bak_text" cols="30" rows="1"></textarea>
            <img class="voice-trigger" src="./img/microphone.png">
        </div>
    </div>
    </div>`
        boxAnalizi.insertAdjacentHTML('beforeend', printHTML)
        e.target.selectedIndex = 0
    } else if(e.target.selectedIndex == 13){
        e.target.options[13].setAttribute('disabled', 'disabled')
        let printHTML = `<div class="container">
        <div class="box">
        <p><img class="trash_container" src="./img/trash_container.png"><strong>УЗИ ОБП + почек </strong><select name="ultrasound" id="ultrasound">
            <option value=""></option>
            <option value="+ щит. жел.">+ щит. жел.</option>
            <option value="+ предст. жел.">+ предст. жел.</option>
        </select>  <input id="ultrasound_date" type="date"> : 
        <div class="input">
            <textarea id="ultrasound_text" cols="30" rows="1"></textarea>
            <img class="voice-trigger" src="./img/microphone.png">
        </div>
    </div>
    </div>`
        boxAnalizi.insertAdjacentHTML('beforeend', printHTML)
        e.target.selectedIndex = 0
    } else if(e.target.selectedIndex == 14){
        e.target.options[14].setAttribute('disabled', 'disabled')
        let printHTML = `<div class="container">
        <div class="box">
        <label><img class="trash_container" src="./img/trash_container.png"><strong>ЭКГ от </strong></label><input id="EKG_date" type="date"> : 
        <div class="input">
            <textarea id="EKG_text" cols="30" rows="1"></textarea>
            <img class="voice-trigger" src="./img/microphone.png">
        </div>
    </div>
    </div>`
        boxAnalizi.insertAdjacentHTML('beforeend', printHTML)
        e.target.selectedIndex = 0
    } else if(e.target.selectedIndex == 15){
        e.target.options[15].setAttribute('disabled', 'disabled')
        let printHTML = `<div class="container">
        <div class="box">
        <label><img class="trash_container" src="./img/trash_container.png"><strong>Спирография </strong></label><input id="spirography_date" type="date"> :
        <div class="input">
            <textarea id="spirography_text" cols="30" rows="1"></textarea>
            <img class="voice-trigger" src="./img/microphone.png">
        </div>
    </div>
    </div>`
        boxAnalizi.insertAdjacentHTML('beforeend', printHTML)
        e.target.selectedIndex = 0
    } else if(e.target.selectedIndex == 16){
        e.target.options[16].setAttribute('disabled', 'disabled')
        let printHTML = `<div class="container">
        <div class="box">
        <label><img class="trash_container" src="./img/trash_container.png"><strong>ЭХО КГ</strong></label><input id="EXO_KG_date" type="date"> :
        <div class="input">
            <textarea id="EXO_KG_text" cols="30" rows="1"></textarea>
            <img class="voice-trigger" src="./img/microphone.png">
        </div>
    </div>
    </div>`
        boxAnalizi.insertAdjacentHTML('beforeend', printHTML)
        e.target.selectedIndex = 0
    } else if(e.target.selectedIndex == 17){
        let printHTML = `<div class="container">
        <div class="box">
        <img class="trash_container" src="./img/trash_container.png">
        <div class="input">
            <textarea id="name" cols="30" rows="1" placeholder="Название"></textarea>
            <img class="voice-trigger" src="./img/microphone.png">
        </div>
        <input id="custom_date" type="date"> :
        <div class="input">
            <textarea id="text" cols="30" rows="1" placeholder="Описание"></textarea>
            <img class="voice-trigger" src="./img/microphone.png">
        </div>
    </div>
    </div>`
        boxAdditionAnalizi.insertAdjacentHTML('beforeend', printHTML)
        e.target.selectedIndex = 0
    }
})