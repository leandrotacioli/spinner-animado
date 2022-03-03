var pMessageLoading = "Carregando...";

function ShowSpinner(pMessage) {
    document.getElementById("containerSpinner").style.display = "block";

    if (pMessage && pMessage.length) {
        document.getElementById("spinnerMessage").innerHTML = pMessage;
    } else {
        document.getElementById("spinnerMessage").innerHTML = pMessageLoading;
    }
}

function HideSpinner() {
    document.getElementById("containerSpinner").style.display = "none";
    document.getElementById("spinnerMessage").innerHTML = pMessageLoading;
}