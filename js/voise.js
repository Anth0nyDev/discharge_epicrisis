document.addEventListener('click', function(e){
    if(e.target.className == 'voice-trigger'){
        const voiceTrigger = e.target
        const parent = voiceTrigger.closest('.input')
        const searchInput = parent.querySelector('textarea')

        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (window.SpeechRecognition) {
            var recognition = new SpeechRecognition()
            recognition.interimResults = true
            recognition.lang = 'ru-RU'
            recognition.addEventListener('result', _transcriptHandler);
            recognition.onerror = function(event) {
                console.log(event.error)
                if(event.error == 'no-speech'){
                    voiceTrigger.classList.remove('active')
                }
            }
        } else {
            voiceTrigger.remove()
        }

        listenStart()

        function listenStart(e){
            searchInput.setAttribute("placeholder", "Говорите...")
            voiceTrigger.classList.add('active')
            recognition.start();
        }
        
        function _parseTranscript(e) {
            return Array.from(e.results).map(function (result) { return result[0] }).map(function (result) { return result.transcript }).join('')
        }
        
        function _transcriptHandler(e) {
            let speechOutput = _parseTranscript(e)
            searchInput.value = speechOutput.firstLetterToUppercase()
            searchInput.setAttribute("placeholder", "")
            voiceTrigger.classList.remove('active')
            searchInput.style.height = 0
            searchInput.style.height = searchInput.scrollHeight + "px"
        }
        String.prototype.firstLetterToUppercase = function() {
            return this[0].toUpperCase() + this.slice(1);
        }
    }
})