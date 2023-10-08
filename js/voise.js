const recognizer = new webkitSpeechRecognition()
recognizer.interimResults = true
recognizer.lang = 'ru-Ru'

let textContainer

document.addEventListener('click', function(e){
    if(e.target.className == 'voice-trigger'){
        const voiceTrigger = e.target
        if(window.getComputedStyle(voiceTrigger).opacity == 1){
            const parent = voiceTrigger.closest('.input')
            textContainer = parent.querySelector('textarea')
            recognizer.start()
            textContainer.setAttribute("placeholder", "Говорите...")

            const allVoice = document.querySelectorAll('.voice-trigger')
            for(let i=0; i < allVoice.length; i++){
                const itemVoice = allVoice[i]
                itemVoice.style.opacity = "0.4"
            }
        } else {
            recognizer.stop()
            textContainer.setAttribute("placeholder", "")

            const allVoice = document.querySelectorAll('.voice-trigger')
            for(let i=0; i < allVoice.length; i++){
                const itemVoice = allVoice[i]
                itemVoice.style.opacity = "1"
            }
        }
    }
})

recognizer.onresult = function (event) {
    let result = event.results[event.resultIndex]
    if (result.isFinal){
        textContainer.value += result[0].transcript.replaceAll('.','') + ' '
        textContainer.setAttribute("placeholder", "")
        textContainer.style.height = 0
        textContainer.style.height = textContainer.scrollHeight + "px"
        
        const allVoice = document.querySelectorAll('.voice-trigger')
        for(let i=0; i < allVoice.length; i++){
            const itemVoice = allVoice[i]
            itemVoice.style.opacity = "1"
        }
    }
}