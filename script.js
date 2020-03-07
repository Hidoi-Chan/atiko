let popupButton = document.getElementById("to_contact_us");
let close = document.getElementById("popup_close");

popupButton.onclick = function () {
    document.querySelector(".popup").style.display = "block";
};

close.onclick = function () {
    document.querySelector(".popup").style.display = "";
};