var namebox = document.getElementById("namebox")
var name__error = document.getElementById("name__error")

var passwordbox = document.getElementById("passwordbox")
var password__error = document.getElementById("password__error")

var confirmpasswordbox = document.getElementById("confirmpasswordbox")
var confirmpassword__error = document.getElementById("confirmpassword__error")

var btn = document.getElementById("btn")

var form = document.getElementById("myform");

btn.addEventListener("click",function(event){
    event.preventDefault()

    var nameRule = /^(?=.{6,16}$)[A-Za-z]+[0-9]*$/ //starts with char , num is optional , min 6 max 16 
    var passwordRule = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,16}$/  // starts with char, num ,special char min 6 ,max16

    var username=namebox.value
    var password1=passwordbox.value
    var password2=confirmpasswordbox.value

    if(username ==='')
    {
        name__error.textContent="Name field is empty"
    }
    else if(!nameRule.test(username))
    {
        name__error.textContent="Enter valid name"
    }
    else
    {
        name__error.textContent=""
    }

    if(password1==='')
    {
        password__error.textContent="Password field is empty"
    }
    else if(!passwordRule.test(password1))
    {
        password__error.textContent="Enter valid password"
    }
    else
    {
        password__error.textContent=""
    }

    if(password2==='')
    {
        confirmpassword__error.textContent="Password dosent match"
    }
    else if(password2 != password1)
    {
        confirmpassword__error.textContent="Password dosent match"
    }
    else
    {
        confirmpassword__error.textContent=""
        alert("✅ Form submitted successfully!");
    }
})
