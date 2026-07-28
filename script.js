emailjs.init({
    publicKey: "t_HBf_gztN5fNCVX0"
});

document.getElementById("save").addEventListener("click", function(){

    const text = document.getElementById("editor").value;

    emailjs.send(
        "service_yimquql",
        "template_lrsgp8n",
        {
            message: text
        }
    ).then(() => {
        alert("Gespeichert");
    });
