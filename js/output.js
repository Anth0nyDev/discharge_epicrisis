const printBtn = document.querySelector('.print_btn')
const printBox = document.querySelector('.print_box')

printBtn.addEventListener('click', function(){
    //Очистка контейнера от прошлых записей, если они были
    printBox.style.display = 'block'
    printBox.innerHTML = ''

    let name = document.querySelector('#name').value
    let age = new Date(document.querySelector('#age').value).toLocaleDateString()
    let date1 = new Date(document.querySelector('#date1').value).toLocaleDateString()
    let date2 = new Date(document.querySelector('#date2').value).toLocaleDateString()
    let diagnos = document.querySelector('#diagnos').value
    let complications = document.querySelector('#complications').value
    let concomitantDiagnosis = document.querySelector('#concomitant_diagnosis').value

    let printHTML = `<p><strong>ОГБУЗ «Аларская Районная Больница» п. КУТУЛИК</strong></p>
    <p><strong><center>Выписной эпикриз</center></strong></p>
    <p>Пациент ${name}  ${age} г.р. находилась  на стационарном лечении  с ${date1} по ${date2} в терапевтическом отделении с диагнозом:</p>
    <p><strong>Диагноз клинический: </strong>${diagnos}</p>
    <p><strong>Осложнение: </strong>${complications}</p>
    <p><strong>Сопутствующий диагноз: </strong>${concomitantDiagnosis}</p>
    <p><strong><center>Данные обследования:</center></strong></p>`
    printBox.insertAdjacentHTML('beforeend', printHTML)
    if(document.querySelector('.oak') !== null){
        let ifPrintHTML = `<p><strong>ОАК:</strong></p>
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
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>`
        printBox.insertAdjacentHTML('beforeend', ifPrintHTML)
        const printTable = document.querySelector('.print_box .oak tbody')
        const oakTable = document.querySelectorAll('.date_list .oak tbody tr')
        for(let i = 0; i < oakTable.length; i++){
            let tableDateEl = oakTable[i].querySelector('td input').value
            const oakTableLine = oakTable[i].querySelectorAll('td textarea')
            let tableDate = new Date(tableDateEl).toLocaleDateString()
                let printTableHTML = `<tr>
                                <td>${tableDate}</td>
                                <td>${oakTableLine[0].value}</td>
                                <td>${oakTableLine[1].value}</td>
                                <td>${oakTableLine[2].value}</td>
                                <td>${oakTableLine[3].value}</td>
                                <td>${oakTableLine[4].value}</td>
                                <td>${oakTableLine[5].value}</td>
                                <td>${oakTableLine[6].value}</td>
                                <td>${oakTableLine[7].value}</td>
                                <td>${oakTableLine[8].value}</td>
                                <td>${oakTableLine[9].value}</td>
                                <td>${oakTableLine[10].value}</td>
                                </tr>`
                printTable.insertAdjacentHTML('beforeend', printTableHTML)
        }
    }
    if(document.querySelector('.bak') !== null){
        let ifPrintHTML = `<p><strong>Биохимический анализ крови:</strong></p>
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
                                                </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>`
        printBox.insertAdjacentHTML('beforeend', ifPrintHTML)
        const printTableBak = document.querySelector('.print_box .bak tbody')
        const bakTable = document.querySelectorAll('.date_list .bak tbody tr')
        for(let i = 0; i < bakTable.length; i++){
            let tableDateEl = bakTable[i].querySelector('td input').value
            const bakTableLine = bakTable[i].querySelectorAll('td textarea')
            let bakTableDate = new Date(tableDateEl).toLocaleDateString()
            let printTableHTML = `<tr>
                                <td>${bakTableDate}</td>
                                <td>${bakTableLine[0].value}</td>
                                <td>${bakTableLine[1].value}</td>
                                <td>${bakTableLine[2].value}</td>
                                <td>${bakTableLine[3].value}</td>
                                <td>${bakTableLine[4].value}</td>
                                <td>${bakTableLine[5].value}</td>
                                <td>${bakTableLine[6].value}</td>
                                <td>${bakTableLine[7].value}</td>
                                <td>${bakTableLine[8].value}</td>
                                </tr>`
            printTableBak.insertAdjacentHTML('beforeend', printTableHTML)
        }
    }
    if(document.querySelector('.oam') !== null){
        let ifPrintHTML = `<p><strong>ОАМ:</strong></p>
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
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>`
        printBox.insertAdjacentHTML('beforeend', ifPrintHTML)
        const printTableOam = document.querySelector('.print_box .oam tbody')
        const oamTable = document.querySelectorAll('.date_list .oam tbody tr')
        for(let i = 0; i < oamTable.length; i++){
            let tableDateEl = oamTable[i].querySelector('td input').value
            const oamTableLine = oamTable[i].querySelectorAll('td textarea')
            let oamTableDate = new Date(tableDateEl).toLocaleDateString()
            let printTableHTML = `<tr>
                                <td>${oamTableDate}</td>
                                <td>${oamTableLine[0].value}</td>
                                <td>${oamTableLine[1].value}</td>
                                <td>${oamTableLine[2].value}</td>
                                <td>${oamTableLine[3].value}</td>
                                <td>${oamTableLine[4].value}</td>
                                <td>${oamTableLine[5].value}</td>
                                <td>${oamTableLine[6].value}</td>
                                <td>${oamTableLine[7].value}</td>
                                <td>${oamTableLine[8].value}</td>
                                </tr>`
            printTableOam.insertAdjacentHTML('beforeend', printTableHTML)
        }
    }
    if(document.querySelector('.electro') !== null){
        let ifPrintHTML = `<p><strong>Электролиты:</strong></p>
        <table class="electro">
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Калий</th>
                                <th>Натрий</th>
                                <th>Хлориды</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>`
        printBox.insertAdjacentHTML('beforeend', ifPrintHTML)
        const printTableElectro = document.querySelector('.print_box .electro tbody')
        const electroTable = document.querySelectorAll('.date_list .electro tbody tr')
        for(let i = 0; i < electroTable.length; i++){
            let tableDateEl = electroTable[i].querySelector('td input').value
            const electroTableLine = electroTable[i].querySelectorAll('td textarea')
            let electroTableDate = new Date(tableDateEl).toLocaleDateString()
            let printTableHTML = `<tr>
                                <td>${electroTableDate}</td>
                                <td>${electroTableLine[0].value}</td>
                                <td>${electroTableLine[1].value}</td>
                                <td>${electroTableLine[2].value}</td>
                                </tr>`
            printTableElectro.insertAdjacentHTML('beforeend', printTableHTML)
        }
    }
    if(document.querySelector('#HIV') !== null){
        let dateHIV = new Date(document.querySelector('#HIV').value).toLocaleDateString()
        let ifPrintHTML = `<p><strong>Анализ крови ВИЧ и гепатиты В и С от ${dateHIV}</strong>: не обнаружено</p>`
        printBox.insertAdjacentHTML('beforeend', ifPrintHTML)
    }
    if(document.querySelector('#RMP') !== null){
        let dateRMP = new Date(document.querySelector('#RMP').value).toLocaleDateString()
        let ifPrintHTML = `<p><strong>РМП от ${dateRMP}</strong>: отрицательно</p>`
        printBox.insertAdjacentHTML('beforeend', ifPrintHTML)
    }
    if(document.querySelector('#cal') !== null){
        let dateCal = new Date(document.querySelector('#cal').value).toLocaleDateString()
        let ifPrintHTML = `<p><strong>Кал на я/гл ${dateCal}</strong>: отрицательно</p>`
        printBox.insertAdjacentHTML('beforeend', ifPrintHTML)
    }
    if(document.querySelector('#Koag') !== null){
        let dateKoag = new Date(document.querySelector('#Koag').value).toLocaleDateString()
        let fibrin = document.querySelector('#fibrin').value
        let ptee = document.querySelector('#PTEE').value
        let ACHTV = document.querySelector('#ACHTV').value
        let ifPrintHTML = `<p><strong>Коагулограмма ${dateKoag}</strong>: Фибрин - ${fibrin}, АЧТВ - ${ACHTV}, ПТИ - ${ptee}%</p>`
        printBox.insertAdjacentHTML('beforeend', ifPrintHTML)
    }
    if(document.querySelector('#x-ray') !== null){
        let flg = document.querySelector('#FLG').value
        let dateX = new Date(document.querySelector('#x-ray').value).toLocaleDateString()
        let xText = document.querySelector('#x-ray_input').value
        let ifPrintHTML = `<p><strong>${flg} ОГК ${dateX}</strong>: ${xText}</p>`
        printBox.insertAdjacentHTML('beforeend', ifPrintHTML)
    }
    if(document.querySelector('#sputum') !== null){
        let dateSputum = new Date(document.querySelector('#sputum').value).toLocaleDateString()
        let sputumSelect = document.querySelector('#sputumSelect').value
        let epitelInput = document.querySelector('#epitel').value
        let leikoInput = document.querySelector('#leiko').value
        let eritroInput = document.querySelector('#eritro').value
        let ifPrintHTML = `<p><strong>ОАМокроты ${dateSputum}</strong>: слизистая ${sputumSelect}, эпит. - ${epitelInput}, лейк. - ${leikoInput}, эрит. - ${eritroInput}</p>`
        printBox.insertAdjacentHTML('beforeend', ifPrintHTML)
    }
    if(document.querySelector('#m_in') !== null){
        let ifPrintHTML = `<p><strong>Мокрота на ВК трехкратно:</strong> отриц.</p>`
        printBox.insertAdjacentHTML('beforeend', ifPrintHTML)
    }
    if(document.querySelector('#bak_date') !== null){
        let dateBak = new Date(document.querySelector('#bak_date').value).toLocaleDateString()
        let bakInput = document.querySelector('#bak_text').value
        let ifPrintHTML = `<p><strong>Бак посев мокроты ${dateBak}</strong> : ${bakInput}</p>`
        printBox.insertAdjacentHTML('beforeend', ifPrintHTML)
    }
    if(document.querySelector('#ultrasound') !== null){
        let ultrasoundSelect = document.querySelector('#ultrasound').value
        let dateUltrasound = new Date(document.querySelector('#ultrasound_date').value).toLocaleDateString()
        let ultrasoundInput = document.querySelector('#ultrasound_text').value
        let ifPrintHTML = `<p><strong>УЗИ ОБП + почек ${ultrasoundSelect} ${dateUltrasound} : </strong>${ultrasoundInput}</p>`
        printBox.insertAdjacentHTML('beforeend', ifPrintHTML)
    }
    if(document.querySelector('#EKG_date') !== null){
        let dateEKG = new Date(document.querySelector('#EKG_date').value).toLocaleDateString()
        let ekgInput = document.querySelector('#EKG_text').value
        let ifPrintHTML = `<p><strong>ЭКГ от ${dateEKG} :</strong> ${ekgInput}</p>`
        printBox.insertAdjacentHTML('beforeend', ifPrintHTML)
    }
    if(document.querySelector('#spirography_date') !== null){
        let dateSpirography = new Date(document.querySelector('#spirography_date').value).toLocaleDateString()
        let spirographyInput = document.querySelector('#spirography_text').value
        let ifPrintHTML = `<p><strong>Спирография ${dateSpirography} :</strong> ${spirographyInput}</p>`
        printBox.insertAdjacentHTML('beforeend', ifPrintHTML)
    }
    if(document.querySelector('#EXO_KG_date') !== null){
        let dateEXOKG = new Date(document.querySelector('#EXO_KG_date').value).toLocaleDateString()
        let exokgInput = document.querySelector('#EXO_KG_text').value
        let ifPrintHTML = `<p><strong>ЭХО КГ ${dateEXOKG} :</strong> ${exokgInput}</p>`
        printBox.insertAdjacentHTML('beforeend', ifPrintHTML)
    }
    if(document.querySelector('.addition_analizi .box') !== null){
        const additionArr = document.querySelectorAll('.addition_analizi .box')
        for(let i = 0; i < additionArr.length; i++){
            let additionName = additionArr[i].querySelector('#name').value
            let additionDate = new Date(additionArr[i].querySelector('input').value).toLocaleDateString()
            let additionInput = additionArr[i].querySelector('#text').value
            let printAdditionHTML = `<p><strong>${additionName} ${additionDate}</strong> : ${additionInput}</p>`
            printBox.insertAdjacentHTML('beforeend', printAdditionHTML)
        }
    }

    let treatment = document.querySelector('#treatment').value

    printHTML = `<p><strong>Проведено лечение:</strong> ${treatment}</p>
        <p><strong>Рекомендовано:</strong></p>`
    printBox.insertAdjacentHTML('beforeend', printHTML)

    const recArr = document.querySelectorAll('.recommendation .box')
    for(let i = 0; i < recArr.length; i++){
        const recEl = recArr[i].querySelector('textarea').value
        let forPrintHTML = `<p>${i+1}. ${recEl}</p>`
        printBox.insertAdjacentHTML('beforeend', forPrintHTML)
    }

    printHTML = `<p align="right">Лечащий врач Никитина М.В.</p>
                <p align="right">Зам. гл. врача Рахматуллина А.А</p>`
    printBox.insertAdjacentHTML('beforeend', printHTML)
})