document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
    e.preventDefault();
    fname = document.querySelector("#firstname");
    lname = document.querySelector("#lastname");
    email = document.querySelector("#email");
    tel = document.querySelector("#tel");
    errbox = document.querySelector("#errbox");
    if (fname.value.trim().length < 3)
    {
        errbox.innerText = "First name must be at least 3 characters";
        errbox.style.display = "block";
    }
    else if (lname.value.trim().length < 3)
    {
        errbox.innerText = "Last name must be at least 3 characters";
        errbox.style.display = "block";
    }
    else if (tel.value.trim().length < 3 || !(tel.value[0] == '+' || !isNaN(tel.value[0])) || isNaN(tel.value.substr(1, tel.value.length - 1)))
    {
        errbox.innerText = "Invalid phone number";
        errbox.style.display = "block";
    }
    else
    {
        errbox.style.display = "none";
        e.currentTarget.submit();
    }
});