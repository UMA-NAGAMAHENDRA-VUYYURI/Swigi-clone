function SendMail(){
    var params={
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value  
    }
    emailjs.send("service_t8gkgs9", "template_s9l32nl", params) .then(function(res){
            alert("Message sent successfully!" + res.status);
    })
 }