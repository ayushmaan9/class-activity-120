function setup(){
  canvas=createCanvas(300,300)
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HLCrfbWp6/model.json',modelLoaded);
}
function modelLoaded() {
    console.log('Model Loaded!');
}
function draw(){
image(video,0,0,300,300);
x.classify(video,gotresult);
}
function gotresult(error,result){
  if(error){
console.error(error);

  }
  else{console.log(result);
    document.getElementById("result_object_name").innerHTML = result[0].label;
  
    document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}