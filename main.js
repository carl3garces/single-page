function appendMailTo(){
    let message = document.getElementById("mailMessage").value;
    let subject = document.getElementById("mailSubject").value;
    console.log(subject);
    console.log(message);

    let mailtoAttr = document.getElementById("sendMail");
    mailtoAttr.setAttribute("href","mailto:kguevarra13@icloud.com?subject="+subject+"&body="+message);
}

let date = new Date();
let yearPos = document.getElementById("getYear");
let currYear = date.getFullYear();
yearPos.innerHTML = currYear;