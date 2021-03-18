const selectedOption = document.querySelector('.selected-option')
const selectValue = document.querySelector('.select-value')
const optionContainer = document.querySelector('.options')
const optionList = document.querySelectorAll('.option')


const selectedOption2 = document.querySelector('.selected-option2')
const selectValue2 = document.querySelector('.select-value2')
const optionContainer2 = document.querySelector('.options2')
const optionList2 = document.querySelectorAll('.option2')

const selectedOption3 = document.querySelector('.selected-option3')
const selectValue3 = document.querySelector('.select-value3')
const optionContainer3 = document.querySelector('.options3')
const optionList3 = document.querySelectorAll('.option3')

const selectedOption4 = document.querySelector('.selected-option4')
const selectValue4 = document.querySelector('.select-value4')
const optionContainer4 = document.querySelector('.options4')
const optionList4 = document.querySelectorAll('.option4')

const selectedOption5 = document.querySelector('.selected-option5')
const selectValue5 = document.querySelector('.select-value5')
const optionContainer5 = document.querySelector('.options5')
const optionList5 = document.querySelectorAll('.option5')

/** Toggle function */
const selectToggle = () => {
    if (optionContainer.dataset.toggle == 'collapsed') {
        optionContainer.dataset.toggle = ''
    } else {
        optionContainer.dataset.toggle = 'collapsed'
    }
}

const selectToggle2 = () => {
    if (optionContainer2.dataset.toggle == 'collapsed') {
        optionContainer2.dataset.toggle = ''
    } else {
        optionContainer2.dataset.toggle = 'collapsed'
    }
}

const selectToggle3 = () => {
    if (optionContainer3.dataset.toggle == 'collapsed') {
        optionContainer3.dataset.toggle = ''
    } else {
        optionContainer3.dataset.toggle = 'collapsed'
    }
}

const selectToggle4 = () => {
    if (optionContainer4.dataset.toggle == 'collapsed') {
        optionContainer4.dataset.toggle = ''
    } else {
        optionContainer4.dataset.toggle = 'collapsed'
    }
}

const selectToggle5 = () => {
    if (optionContainer5.dataset.toggle == 'collapsed') {
        optionContainer5.dataset.toggle = ''
    } else {
        optionContainer5.dataset.toggle = 'collapsed'
    }
}



/** When click on selected-option */
selectedOption.addEventListener('click', selectToggle)

selectedOption2.addEventListener('click', selectToggle2)

selectedOption3.addEventListener('click', selectToggle3)

selectedOption4.addEventListener('click', selectToggle4)

selectedOption5.addEventListener('click', selectToggle5)

/** This function update select value */
const updateSelectValue = (option) => {
    selectValue.innerText = option.innerText;
}
const updateSelectValue2 = (option2) => {
    selectValue2.innerText = option2.innerText;
}

const updateSelectValue3 = (option3) => {
    selectValue3.innerText = option3.innerText;
}

const updateSelectValue4 = (option4) => {
    selectValue4.innerText = option4.innerText;
}

const updateSelectValue5 = (option5) => {
    selectValue5.innerText = option5.innerText;
}

optionList.forEach((option) => {
    option.addEventListener('click', (e) => {
        updateSelectValue(option)
        selectToggle()
    })
})

optionList2.forEach((option2) => {
    option2.addEventListener('click', (e) => {
        updateSelectValue2(option2)
        selectToggle2()
    })
})

optionList3.forEach((option3) => {
    option3.addEventListener('click', (e) => {
        updateSelectValue3(option3)
        selectToggle3()
    })
})

optionList4.forEach((option4) => {
    option4.addEventListener('click', (e) => {
        updateSelectValue4(option4)
        selectToggle4()
    })
})

optionList5.forEach((option5) => {
    option5.addEventListener('click', (e) => {
        updateSelectValue5(option5)
        selectToggle5()
    })
})

//Modal