var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var textbox=document.getElementById("textbox");

function start() {
    textbox.innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);

    textbox.innerHTML=Content;
    if (Content=="tire minha selfie")
    {console.log("tirando selfie...")
    speak();}
}
function speak(){
    var synth=window.speechSynthesis;
    speakData=document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()  {takeselfie();
        save();
        
    }, 5000);

}
function save(){
    link=document.getElementById("link");
    Image=document.getElementById("selfieimage").src;
    link.href=Image;
    link.click();
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    Image_format:'png',
    jpeg_quality:90
});
function takeselfie(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="selfieimage"src="'+data_uri+'"/>';
    });
}