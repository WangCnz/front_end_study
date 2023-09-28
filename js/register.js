const username = document.querySelector('[name=username]')
const phone = document.querySelector('[name=phone]')
const message = document.querySelector('[name=message]')
const password = document.querySelector('[name=password]')
const password2 = document.querySelector('[name=password2]')
const next = document.querySelector('.login .info .next')
const code = document.querySelector('.login .info .info-message .code')
const contract = document.querySelector('.login .info-contract .icon-queren')
const info = document.querySelector('.login .info')
let codeState = true

function verifyUsername() {
    const reg = /^[a-zA-Z0-9-_]{6,10}$/
    if (!reg.test(username.value)) {
        username.nextElementSibling.innerText = '昵称长度为6到10个字符'
        return false
    } else {
        username.nextElementSibling.innerText = ''
        return true
    }
}
username.addEventListener('change', verifyUsername)

function verifyPhone() {
    const reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
    if (!reg.test(phone.value)) {
        phone.nextElementSibling.innerText = '请输入正确的11位手机号'
        return false
    } else {
        phone.nextElementSibling.innerText = ''
        return true
    }
}
phone.addEventListener('change', verifyPhone)

function verifyMessage() {
    const reg = /^\d{6}$/
    if (!reg.test(message.value)) {
        message.nextElementSibling.innerText = '请输入正确的验证码'
        return false
    } else {
        message.nextElementSibling.innerText = ''
        return true
    }
}
message.addEventListener('change', verifyMessage)

function verifyPassword() {
    const reg = /^[a-zA-Z0-9-_]{6,20}$/
    if (!reg.test(password.value)) {
        password.nextElementSibling.innerText = '设置6至20位字母、数字和符号组合'
        return false
    } else {
        password.nextElementSibling.innerText = ''
        return true
    }
}
password.addEventListener('change', verifyPassword)

function verifyPassword2() {
    if ((password2.value !== password.value) || !password2.value) {
        password2.nextElementSibling.innerText = '两次密码输入不一致'
        return false
    } else {
        password2.nextElementSibling.innerText = ''
        return true
    }
}
password2.addEventListener('change', verifyPassword2)

code.addEventListener('click', function () {
    if (codeState) {
        codeState = false
        code.innerText = '05秒后重新获取'
        let i = 5
        let timerID = setInterval(function () {
            i--
            code.innerText = `0${i}秒后重新获取`
            if (i === 0) {
                clearInterval(timerID)
                code.innerText = '重新获取'
                codeState = true
            }
        }, 1000)
    }
})

contract.addEventListener('click', function () {
    this.classList.toggle('icon-queren2')
})


info.addEventListener('submit', function (e) {
    if (!contract.classList.contains('icon-queren2')) {
        alert('同意协议未勾选')
        e.preventDefault()
    }
    if(!verifyUsername()) {
        e.preventDefault()
    }
    if(!verifyPhone()) {
        e.preventDefault()
    }
    if(!verifyMessage()) {
        e.preventDefault()
    }
    if(!verifyPassword()) {
        e.preventDefault()
    }
    if(!verifyPassword2()) {
        e.preventDefault()
    }
})