function cross() {
   let cancel = document.getElementById('popup');
   cancel.classList.replace('popup' ,'none');
}
function show(n) {
    let disp1 = document.getElementById('popup');
    disp1.classList.replace('none' ,'popup');
    let disp2 = document.getElementById('popup_img');
    disp2.src = document.getElementById(`img${n}`).src;

}