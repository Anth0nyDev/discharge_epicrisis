let countOak = 1
let countBak = 1
let countOam = 1
let countElectro = 1

document.addEventListener('click', function(e){
    if(e.target.className == 'add_oak'){
        const addBtnOak = e.target
        const tableOak = addBtnOak.closest('tbody')
        addBtnOak.remove()
        const tableHTML = `<tr>
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
        <td><button class="add_oak">Добавить</button><button class="del_oak">Удалить</button></td>
        </tr>`
        countOak ++
        tableOak.insertAdjacentHTML('beforeend', tableHTML)
    } else if(e.target.className == 'add_bak'){
        const addBtnBak = e.target
        const tableBak = addBtnBak.closest('tbody')
        addBtnBak.remove()
        const tableHTML = `<tr>
        <td><input type="date"></td>
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
        <td><button class="add_bak">Добавить</button><button class="del_bak">Удалить</button></td>
        </tr>`
        countBak ++
        tableBak.insertAdjacentHTML('beforeend', tableHTML)
    } else if(e.target.className == 'add_oam'){
        const addBtnOam = e.target
        const tableOam = addBtnOam.closest('tbody')
        addBtnOam.remove()
        const tableHTML = `<tr>
        <td><input type="date"></td>
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
        <td><button class="add_oam">Добавить</button><button class="del_oam">Удалить</button></td>
        </tr>`
        countOam ++
        tableOam.insertAdjacentHTML('beforeend', tableHTML)
    } else if(e.target.className == 'add_electro'){
        const addBtnE = e.target
        const tableE = addBtnE.closest('tbody')
        addBtnE.remove()
        const tableHTML = `<tr>
        <td><input type="date"></td>
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
        <td><button class="add_electro">Добавить</button><button class="del_electro">Удалить</button></td>
        </tr>`
        countElectro ++
        tableE.insertAdjacentHTML('beforeend', tableHTML)
    }
})

document.addEventListener('click', function(e){
    if(e.target.className == 'del_oak'){
        const delBtn = e.target
        const parent = delBtn.closest('tr')
        parent.remove()
        countOak -= 1
        if(countOak < 2){
            const first = document.querySelector('.date_list .oak tbody tr .first')
            first.innerHTML = `<button class="add_oak">Добавить</button>`
        }
    } else if(e.target.className == 'del_bak'){
        const delBtn = e.target
        const parent = delBtn.closest('tr')
        parent.remove()
        countBak -= 1
        if(countBak < 2){
            const first = document.querySelector('.date_list .bak tbody tr .first')
            first.innerHTML = `<button class="add_bak">Добавить</button>`
        }
    } else if(e.target.className == 'del_oam'){
        const delBtn = e.target
        const parent = delBtn.closest('tr')
        parent.remove()
        countOam -= 1
        if(countOam < 2){
            const first = document.querySelector('.date_list .oam tbody tr .first')
            first.innerHTML = `<button class="add_oam">Добавить</button>`
        }
    } else if(e.target.className == 'del_electro'){
        const delBtn = e.target
        const parent = delBtn.closest('tr')
        parent.remove()
        countElectro -= 1
        if(countElectro < 2){
            const first = document.querySelector('.date_list .electro tbody tr .first')
            first.innerHTML = `<button class="add_electro">Добавить</button>`
        }
    }
})