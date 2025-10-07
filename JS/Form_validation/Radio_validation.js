function myRadioFunc(e) {
    e.preventDefault();
    let radiodata = document.myRadio.content;
    console.log('🚀 ~ radiodata:', radiodata);

    for (let i = 0; i < radiodata.length; i++) {
        if (radiodata[i].checked === true) {
            document.getElementById("Message").innerHTML = "";
            return true;
        }
    }

    document.getElementById("Message").innerHTML = "Please select an option.";
    return false;
}