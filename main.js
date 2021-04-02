function preload() {


}

function setup() {
    canvas= createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,10,30,570,460);
    fill('#34eb4c');
    stroke('#0022ff');
    rect(10,30,570,20);
    rect(10,470,570,20);
    ellipse(10,260,20,460);
    ellipse(580,260,20,460);
    }

    function takeSnapshot() {
        save('your_image.jpg');
    }