let input = document.getElementsByTagName('input')


let validation = (e) => {
    e.preventDefault()

    // console.log(input[0].value)
    let email = e.target[0]
    let password = e.target[1]

    if (email.value === 'mamtha123@gmail.com' && password.value === '12345') {
        window.location = 'homepage.html'
    }
    else {
        let err = `border:1px solid red`
        email.style.cssText = err
        password.style.cssText = err
    }
}