function newSet() {
    let elem = document.createElement('p');
    var type = document.getElementById("type").value;


    let distwarm = ["<br>200 free <br>200 kick <br>200 pull <br>200 IM<br>", "<br>5x 100 free  @1:30 <br>100 kick <br>", "<br>5x 200 free @10 seconds rest<br>"];
    var diswarm = distwarm[Math.floor(Math.random()*distwarm.length)];
    let distmain = ["<br>2x{ 400 @ 7.0, 100 drill 100 swim <br>100 free easy @1.0 <br>500 free @7.0 }<br>", "<br>2x{ 5x 200 free @ 3.0 <br>100 easy @ 2.0 }<br>", "<br>100 free <br>200 free <br>300 free <br>400 free <br>500 free <br>400 free <br>300 free <br>200 free<br>100 free<br>"];
    var dismain = distmain[Math.floor(Math.random()*distmain.length)];



    let spriwarm = ["<br>200 free build<br>100 free build<br>50 free build<br>4x 25 sprint @.25<br>", "<br>200 free moderate<br>10x25 sprint @.25<br>", "<br>100 free moderate<br>100 IM sprint<br>4x50 kick w/ board @1<br>"];
    var sprwarm = spriwarm[Math.floor(Math.random()*spriwarm.length)];
    let sprimain = ["<br>50x{ 25 choice sprint @.3 }<br>100 easy @2<br>10x{ 50 choice sprint @1 }<br>100 easy @2<br>5x{ 100 choice sprint @1.3 }<br>", "<br>500 (50 sprint 50 easy w/fins)<br>100 easy choice<br>12x 25 choice @.30<br>", "<br>20x 25 sprint @30<br>10x 50 sprint @40<br>4x 100 sprint @1.30<br>"];
    var sprmain = sprimain[Math.floor(Math.random()*sprimain.length)];



    let strowarm = ["<br>200 swim <br>200 kick <br>200 IM<br>", "<br>2x 200 IM<br>100 free<br>", "<br>300 (50 free 50 drill)<br>3x 100 IM <br>3x 50 kick<br>"];
    var strwarm = strowarm[Math.floor(Math.random()*strowarm.length)];
    let stromain = ["<br>2x{  100 free, rest 10<br>100IM, rest 10<br>200 free, rest 10<br>200IM, rest 10<br>300 free, rest 10<br>300 non-free, rest 1 minute }<br>", "<br>10x{ 100 IM @1.45 }<br>100 easy free<br>5x{ 200 IM @4.0 }<br>", "<br>10x{ 100 free @1.3<br>100 choice @10 sec rest}<br>"];
    var strmain = stromain[Math.floor(Math.random()*stromain.length)];



    let easwarm = ["<br>200 free<br>200 choice<br>", "<br>2x 100 choice<br>100 choice<br>", "<br>4x 50 choice<br>100 choice<br>50 choice<br>"];
    var eawarm = easwarm[Math.floor(Math.random()*easwarm.length)];
    let easmain = ["<br>10x{ 50 free @.5 }<br>10x{ 50 non-free @1 }<br>", "<br>10x{ 100 (50 free, 50 kick) @1<br>500 pull w/ paddles<br>", "<br>500 pull w/paddles<br>500 kick w/board or snorkel or on back<br>500 easy swim<br>"];
    var eamain = easmain[Math.floor(Math.random()*easmain.length)];



    let harwarm = ["<br>500 free<br>200 IM<br>200 kick<br>", "<br>200 IM<br>200 (50 free, 50 drill)<br>200 choice build<br>", "<br>3x 100 kick @1.45<br>3x 100 pull @1.3<br>3x 100 IM @1.45<br>"];
    var hawarm = harwarm[Math.floor(Math.random()*harwarm.length)];
    let harmain = ["<br>2x{ 10x 100 @1.25<br>100 easy choice }<br>", "<br>5x{ 200 free fast @3<br>100 easy free<br>200 free fast @2.5 }<br>", "<br>10x 100 @1.25<br>5x 200 @3<br>2x 400 @7<br>100 easy choice @2<br>500 fast pace<br>"];
    var hamain = harmain[Math.floor(Math.random()*harmain.length)];



    let cooldown = ["<br>100 easy free<hr>", "<br>500 easy pull<hr>", "<br>400 easy free<hr>", "<br>100 easy kick <br> 100 easy pull <br> 100 easy free<hr>"];
    var cooldownie = cooldown[Math.floor(Math.random()*cooldown.length)];






    
    if (type == 0) {
        alert("Please choose a workout type");
        return;
    }
    
    if (type == "distance") {
        elem.innerHTML= "Warm up" + diswarm + "<br>" + "Main Set" + dismain +  "<br>" + "Cooldown" + cooldownie;
    }

    if (type == "sprint") {
        elem.innerHTML= "Warm up" + sprwarm + "<br>" + "Main Set" + sprmain +  "<br>" + "Cooldown" + cooldownie;
    }

    if (type == "stroke") {
        elem.innerHTML= "Warm up" + strwarm + "<br>" + "Main Set" + strmain +  "<br>" + "Cooldown" + cooldownie;
    }

    if (type == "easy") {
        elem.innerHTML= "Warm up" + eawarm + "<br>" + "Main Set" + eamain +  "<br>" + "Cooldown" + cooldownie;
    }

    if (type == "hard") {
        elem.innerHTML= "Warm up" + hawarm + "<br>" + "Main Set" + hamain +  "<br>" + "Cooldown" + cooldownie;
    }
    
    set.append(elem);
}
