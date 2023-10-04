document.addEventListener('input', function(e) {
    if(e.target.tagName == 'TEXTAREA'){
        const textareaHeight = e.target
        textareaHeight.style.height = 0
        textareaHeight.style.height = textareaHeight.scrollHeight + "px"
    }
})