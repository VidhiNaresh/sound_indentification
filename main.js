function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9WobFlpo8/model.json', modelReady);

}

function modelReady() {
    classifier.classify(gotResult);
}
var cat =0;
var dog =0;
function gotResult(error, results) {
   if(error){
    console.error(error);
   }
   else{
    console.log(results);
random_number_r=Math.floor(Math.random()*255)+1;
random_number_g=Math.floor(Math.random()*255)+1;
random_number_b=Math.floor(Math.random()*255)+1;

document.getElementById("animal_voices").innerHTML="detected voice is of "+results[0].label;
document.getElementById("detected").innerHTML="detected dog - "+dog+"detected cat - "+cat;
document.getElementById("animal_voices").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("detected").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

img= document.getElementById("animals_images");

if(results[0].label=="barking") {
    img.src="dog.png"
    dog=dog+1;
}
else if(results[0].label=="meowing") {
        img.src="cat.png"
        cat=cat+1;
    }
    else{
        img.src="audio_img.png"
    }

   }
}