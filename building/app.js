let contdiv;
let wid;
let heit;
let name_input;
let building_type;
let house_color = "ffffff";
let roof_color = "ffffff";

window.addEventListener('load', ()=>{
    console.log("hello");
    contdiv = document.getElementById("container1");
    wid = (contdiv.clientWidth)/1.5;
    heit = (contdiv.clientHeight)/1.5;
    console.log(wid,heit);
    let inputColor = document.getElementById("color-base");
    inputColor.addEventListener("change", ()=>{
        house_color = document.getElementById("color-base").value;
    })

    let roofColor = document.getElementById("color-roof");
    roofColor.addEventListener("change", ()=>{
        roof_color = document.getElementById("color-roof").value;
    })

    let button = document.getElementById("submit-button");
    button.addEventListener("click", ()=>{
        name_input = document.getElementById("name").value;
        building_type = document.getElementById("zodiac-select").value;
        house_color = document.getElementById("color-base").value;
        roof_color = document.getElementById("color-roof").value;
        console.log(name_input, building_type, house_color, roof_color);
        let houseObj = {
            "name": name_input,
            "type": building_type,
            "baseColor": house_color,
            "roofColor": roof_color
        };

        let houseObjJSON = JSON.stringify(houseObj);
        console.log(houseObjJSON);


        fetch('/houses',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: houseObjJSON
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            //once we have confirmation that the message has been sent, get all latest messages
        })

        window.location.replace("public/index.html");

    })
});

fetch("/houses")
.then(res => res.json())
.then(data => {
    console.log(data);
})


function setup() {
    let canvas = createCanvas(windowHeight/1.5, windowWidth/2.7);
    canvas.parent("model1");
}
    
function draw() {
    background(255);
    fill(roof_color);
    triangle(75, 150, 327, 152, 200, 40);
    fill(house_color);
    rect(75,150,250,250);
    rect(150,250, 75,150);
    ellipse(160, 330, 10,10);
    // ellipse(60,60,30,30);
}