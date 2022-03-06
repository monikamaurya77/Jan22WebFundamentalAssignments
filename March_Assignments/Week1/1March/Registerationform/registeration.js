function checkPassMatch() {
    var createPass = document.getElementById("crname");
    var reEnterPass = document.getElementById("rename");
    if ((createPass.value !== reEnterPass.value)) {
        createPass.value = ""
        createPass.placeholder = "Please enter same password!"  
        createPass.style.color = "#bf0704";
        reEnterPass.placeholder = "Please enter same password!";    
        reEnterPass.style.color = "#bf0704";
        reEnterPass.value = ""
    }
}
