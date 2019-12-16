function newSet() {
    let elem = document.createElement('p');
    var type = document.getElementById("type").value;
    
    let dist = ["100 free <br> 100 breast","100 back"];
    var dis = dist[Math.floor(Math.random()*dist.length)];



    let spri = [];
    var spr = ""



    let stro = [];
    var str =  ""



    let eas = [];
    var ea =  ""



    let har = [];
    var ha =  ""



    
    if (type == 0) {
        alert("Please choose a workout type");
        return;
    }
    
    if (type == "distance") {
        elem.innerHTML=dis;
    }

    if (type == "sprint") {
        elem.innerHTML=spr;
    }

    if (type == "stroke") {
        elem.innerHTML=str;
    }

    if (type == "easy") {
        elem.innerHTML=ea;
    }

    if (type == "hard") {
        elem.innerHTML=ha;
    }
    
    set.append(elem);
}
