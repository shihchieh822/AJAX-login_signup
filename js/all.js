
/*註冊與登入頁面切換*/
var  signup = document.querySelector('.btn--signup');
var login = document.querySelector('.btn--login');

function signUpSwitch(e){
    var signup = document.querySelector('.container--signup');
    var login = document.querySelector('.container--login');

    signup.style.display ='block';
    login.style.display = 'none';
}

function logInSwitch(e) {
    var signup = document.querySelector('.container--signup');
    var login = document.querySelector('.container--login');

    signup.style.display = 'none';
    login.style.display = 'block';
}

/*註冊*/
var xhrsignup = new XMLHttpRequest();
var signupBtn = document.querySelector('#signupBtn');
signupBtn.addEventListener('click',registered,false);

function registered(e) {
    e.preventDefault()
  var signupEmaill =document.querySelector('.signup-email').value;
  var signupPassword =document.querySelector('.signup-password').value;
 xhrsignup.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
xhrsignup.setRequestHeader('Content-type','application/json');
var signUpAccount = {}
signUpAccount.email = signupEmaill
signUpAccount.password = signupPassword
var signdata = JSON.stringify(signUpAccount);
xhrsignup.send(signdata);
xhrsignup.onload = function () {
    var str = JSON.parse(xhrsignup.responseText).message;
    if (str == "帳號註冊成功"){
        alert (str);
    }else {
        alert(str);
    }
    
}

}

/*登入*/
var xhrlogin =new XMLHttpRequest();
var loginBtn =document.querySelector('#loginBtn');
loginBtn.addEventListener('click',signIn,false);

function signIn(e) {
    e.preventDefault;
    var loginEmail =document.querySelector('.login-email').value;
    var loginPassword =document.querySelector('.login-password').value;
    xhrlogin.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
    xhrlogin.setRequestHeader('Content-type','application/json');
    var loginAccount = {}
    loginAccount.email = loginEmail;
    loginAccount.password = loginPassword;
    var logindata =JSON.stringify(loginAccount)
    xhrlogin.send(loginAccount);

    xhrlogin.onload = function () {
        var loginStr =JSON.parse(xhrlogin.responseText).message;
        if(loginStr == '登入成功'){
            alert(loginStr);
        }else {
            alert(loginStr);
        }
    }

    
}



