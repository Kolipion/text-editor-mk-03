emailjs.init({
    publicKey: "8s5AdO0IZ99pi8O8d"
});

document.getElementById("save").addEventListener("click", function(){

    const text = document.getElementById("editor").value;

    emailjs.send(
        "service_yimquql",
        "template_k5wrj1k",
        {
            message: text
        }
    ).then(() => {
        alert("Gespeichert");
    });
