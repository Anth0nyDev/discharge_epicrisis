document.addEventListener('click', function(e){
    if(e.target.className == 'trash_container'){
        const trashContainer = e.target
        const container = trashContainer.closest('.container')
        if(container.querySelector('.oak')){
            selector.options[1].removeAttribute('disabled')
        } else if(container.querySelector('.bak')){
            selector.options[2].removeAttribute('disabled')
        } else if(container.querySelector('.oam')){
            selector.options[3].removeAttribute('disabled')
        } else if(container.querySelector('.electro')){
            selector.options[4].removeAttribute('disabled')
        } else if(container.querySelector('#HIV')){
            selector.options[5].removeAttribute('disabled')
        } else if(container.querySelector('#RMP')){
            selector.options[6].removeAttribute('disabled')
        } else if(container.querySelector('#cal')){
            selector.options[7].removeAttribute('disabled')
        } else if(container.querySelector('#Koag')){
            selector.options[8].removeAttribute('disabled')
        } else if(container.querySelector('#x-ray')){
            selector.options[9].removeAttribute('disabled')
        } else if(container.querySelector('#sputum')){
            selector.options[10].removeAttribute('disabled')
        } else if(container.querySelector('#m_in')){
            selector.options[11].removeAttribute('disabled')
        } else if(container.querySelector('#bak_date')){
            selector.options[12].removeAttribute('disabled')
        } else if(container.querySelector('#ultrasound')){
            selector.options[13].removeAttribute('disabled')
        } else if(container.querySelector('#EKG_date')){
            selector.options[14].removeAttribute('disabled')
        } else if(container.querySelector('#spirography_date')){
            selector.options[15].removeAttribute('disabled')
        } else if(container.querySelector('#EXO_KG_date')){
            selector.options[16].removeAttribute('disabled')
        }
        container.remove()
    }
})