$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "xsx小仙女" && pwd == "111111") {
        $('#h').text("Let's go！~(～￣▽￣)～");
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "countdown.html";
        }, 2000);
    } else {
        alert("X﹏X");
    }
});
