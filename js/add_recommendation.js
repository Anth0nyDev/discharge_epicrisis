const boxRecommendation = document.querySelector('.recommendation')
const btnRec = document.querySelector('.add_recommendation')

let number = 0

btnRec.addEventListener('click', function(){
    number += 1
    let recHTML = `<div class="box">
    <p>${number})</p>
    <div class="input">
        <textarea cols="30" rows="1"></textarea>
        <img class="voice-trigger" src="./img/microphone.png">
    </div>
</div>`
    boxRecommendation.insertAdjacentHTML('beforeend', recHTML)
})