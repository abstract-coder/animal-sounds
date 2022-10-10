function my_start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classfier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/p7w7joyJw/model.json", model_loaded);
}

function model_loaded() {
    console.log("Model is loaded.");
    classfier.classify(got_results);
}

var duck = 0;
var cat= 0;
var cow= 0;
var pig= 0;

function got_results(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);


        document.getElementById("results").innerHTML = "The animal I hear is : " + results[0].label;

        document.getElementById("accuracy").innerHTML= "Accuracy: " + (results[0].confidence*100).toFixed(2) + "%";

       
        if(results[0].label == "Cat"){
            document.getElementById("animal-pic").src= "cat.png";
            cat= cat+1;
            document.getElementById("score").innerText= "Cat: "+cat+ " Pig: " + pig + " Duck: "+ duck+ " Cow: " + cow;
        }
        else if(results[0].label == "Pig"){
            document.getElementById("animal-pic").src= "pig.png";
            pig= pig+1;
            document.getElementById("score").innerText= "Cat: "+cat+ " Pig: " + pig + " Duck: "+ duck+ " Cow: " + cow;


        }
        else if(results[0].label == "Duck"){
            document.getElementById("animal-pic").src= "Cute-Duck-PNG.png";
            duck= duck+1;
            document.getElementById("score").innerText= "Cat: "+cat+ " Pig: " + pig + " Duck: "+ duck+ " Cow: " + cow;

        }
        else if(results[0].label == "Cow"){
            document.getElementById("animal-pic").src= "cow.png";
            cow= cow+1;
            document.getElementById("score").innerText= "Cat: "+cat+ " Pig: " + pig + " Duck: "+ duck+ " Cow: " + cow;

        }
        else{
            document.getElementById("animal-pic").src= "listen.png";

        }

    }
}