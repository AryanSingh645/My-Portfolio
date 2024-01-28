let a = false;

// document.body.addEventListener("click", function(){
//     a = false;
//     b = false;
//     c = false;
//     document.getElementById("hero_name").style.transform = "translateY(0rem)";
//     document.getElementById("nav_bar").style.width = "435px";
//     document.getElementById("skills").classList.remove("animate__zoomIn");
//     document.getElementById("skills").classList.add("animate__zoomOut");
//     document.getElementById("skill-btn").style.color = "white";
//     document.getElementById("about").classList.remove("animate__zoomIn");
//     document.getElementById("about").classList.add("animate__zoomOut");
//     document.getElementById("about-btn").style.color = "white";
//     document.getElementById("contact").classList.remove("animate__zoomIn");
//     document.getElementById("contact").classList.add("animate__zoomOut");
//     document.getElementById("contact-btn").style.color = "white";

// })

function remainAnimation(){
    let stylesheet = document.styleSheets[1];
    let rules = stylesheet.cssRules;
    let keyframeRule;
    let keyframeRule_2;

    for(let i = 0; i < rules.length; i++){
        if(rules[i].name === "water-fill"){
            keyframeRule = rules[i];
            break;
        }
    }
    for(let i = 0; i < rules.length; i++){
        if(rules[i].name === "water-flow"){
            keyframeRule_2 = rules[i];
            break;
        }
    }

    if(keyframeRule){
        keyframeRule.deleteRule('0%');
        keyframeRule.appendRule('0% { background-position: 0px 200px; }');
        keyframeRule.deleteRule('100%');
        keyframeRule.appendRule('100% { background-position: 1500px 0rem; }');
        // keyframeRule.deleteRule('0%');
        // keyframeRule.appendRule('0% { background-position: 0px 200px; }');
        // keyframeRule.deleteRule('100% { background-position: 1500px 100px;}');
        // keyframeRule.appendRule('100% { background-position: 1500px 0rem; }');
    }
    if(keyframeRule_2){
        keyframeRule.deleteRule('100%');
        keyframeRule.appendRule('100% { background-position: 1500px 0rem; }');
    }
}
function changeAnimation(){
    let stylesheet = document.styleSheets[1];
    let rules = stylesheet.cssRules;
    let keyframeRule;
    let keyframeRule_2;

    for(let i = 0; i < rules.length; i++){
        if(rules[i].name == "water-fill"){
            keyframeRule = rules[i];
            break;
        }
    }
    for(let i = 0; i < rules.length; i++){
        if(rules[i].name == "water-flow"){
            keyframeRule_2 = rules[i];
            break;
        }
    }

    if(keyframeRule){
        keyframeRule.deleteRule('0%');
        keyframeRule.appendRule('0% { background-position: 0px 200px; }');
        keyframeRule.deleteRule('100%');
        keyframeRule.appendRule('100% { background-position: 1500px 100px; }');
        console.log('Inside function statements');
        // keyframeRule.deleteRule('0% { background-position: 0px 200px; }');
        // keyframeRule.appendRule('0% { background-position: 0px 200px; }');
        // keyframeRule.deleteRule('100% { background-position: 1500px 0rem; }');
        // keyframeRule.appendRule('100% { background-position: 1500px 100px; }');
        // console.log('Inside function statements');
    }
    if(keyframeRule_2){
        keyframeRule.deleteRule('100%');
        keyframeRule.appendRule('100% { background-position: 1500px 100px; }');
        console.log('Inside function_2 statements');
        // keyframeRule.deleteRule('100% { background-position: 1500px 0rem; }');
        // keyframeRule.appendRule('100% { background-position: 1500px 100px; }');
        // console.log('Inside function_2 statements');
    }
    console.log('Inside function_2');
}


document.getElementById("skill-btn").onclick = function(){
    if(a == false){

        let circular_progressbar_html = document.querySelector(".circular_progressbar.html");
        let circular_progressbar_python = document.querySelector(".circular_progressbar.python");
        let circular_progressbar_uiux = document.querySelector(".circular_progressbar.uiux");
        
        let startValue_html = 0, endValue_html = 90;
        let startValue_python = 0, endValue_python = 70;
        let startValue_uiux = 0, endValue_uiux = 30;

        circular_progressbar_html.style.background = `conic-gradient(rgb(69, 208, 236) ${startValue_html * 3.6}deg, white 0deg)`;
        document.querySelector(".text_html").textContent = `${startValue_html}%`;

        let water_fill = document.getElementsByClassName("container-water");
        for(let i = 0; i < water_fill.length; i++){
            const parentEle = water_fill[i].parentElement;
            const child_ele = parentEle.children[3];
            if(child_ele.innerText == "Python"){
                water_fill[i].classList.add("water_fill_python");
            }
            else{
                water_fill[i].classList.add("water_fill");
            }
            water_fill[i].addEventListener("animationend", function handleAnimation(){
                if(child_ele.innerText == "Python"){
                    water_fill[i].style.animation = 'water-flow-python 5s linear infinite';
                }
                else{
                    water_fill[i].style.animation = 'water-flow 5s linear infinite';
                }
            })
        }

        const circular_time_html = setInterval(() => {
            startValue_html++;
            circular_progressbar_html.style.background = `conic-gradient(rgb(69, 208, 236) ${startValue_html * 3.6}deg, white 0deg)`;
            document.querySelector(".text_html").textContent = `${startValue_html}%`;
            if(startValue_html == endValue_html){
                clearInterval(circular_time_html);
            } 
        }, 50);

        const circular_time_python = setInterval(() => {
            startValue_python++;
            circular_progressbar_python.style.background = `conic-gradient(rgb(69, 208, 236) ${startValue_python * 3.6}deg, white 0deg)`;
            document.querySelector(".text_python").textContent = `${startValue_python}%`;
            if(startValue_python == endValue_python){
                clearInterval(circular_time_python);
            } 
        }, 25);
        const circular_time_uiux = setInterval(() => {
            startValue_uiux++;
            circular_progressbar_uiux.style.background = `conic-gradient(rgb(69, 208, 236) ${startValue_uiux * 3.6}deg, white 0deg)`;
            document.querySelector(".text_uiux").textContent = `${startValue_uiux}%`;
            if(startValue_uiux == endValue_uiux){
                clearInterval(circular_time_uiux);
            } 
        }, 25);
        circular_progressbar_html.parentElement.classList.add("animate__ZoomIn");
        circular_progressbar_python.parentElement.classList.add("animate__ZoomIn");
        circular_progressbar_uiux.parentElement.classList.add("animate__ZoomIn");

        document.getElementById("nav_bar").style.width = "663px";
        document.getElementById("about").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById("hero_name").style.transition = "all 0.5s";
        document.getElementById("hero_name").style.transform = "translateY(-11rem)";
        document.getElementById("skills").classList.remove("animate__zoomOut");
        document.getElementById("skills").classList.add("animate__zoomIn");
        document.getElementById("skills").style.display = "flex";
        document.getElementById("skill-btn").style.color = "#09E6F6";
        document.getElementById("about").classList.remove("animate__zoomIn");
        document.getElementById("contact").classList.remove("animate__zoomIn");
        document.getElementById("about").classList.add("animate__zoomOut");
        document.getElementById("contact").classList.add("animate__zoomOut");
        document.getElementById("about-btn").style.color = "white";
        document.getElementById("contact-btn").style.color = "white";
        a = true;
        b = false;
        c = false;
    }
    else if(a == true){
        document.getElementById("hero_name").style.transform = "translateY(0rem)";
        document.getElementById("nav_bar").style.width = "435px";
        document.getElementById("skills").classList.remove("animate__zoomIn");
        document.getElementById("skills").classList.add("animate__zoomOut");
        document.getElementById("skill-btn").style.color = "white";
        let circular_progressbar_html = document.querySelector(".circular_progressbar.html");
        let circular_progressbar_python = document.querySelector(".circular_progressbar.python");
        let circular_progressbar_uiux = document.querySelector(".circular_progressbar.uiux");
        circular_progressbar_html.parentElement.classList.remove("animate__ZoomIn");
        circular_progressbar_python.parentElement.classList.remove("animate__ZoomIn");
        circular_progressbar_uiux.parentElement.classList.remove("animate__ZoomIn");

        let water_fill = document.getElementsByClassName("container-water");
        for(let i=0; i<water_fill.length; i++){
            const parentEle = water_fill[i].parentElement;
            const child_ele = parentEle.children[3];
            if(child_ele.innerText == "Python"){
                water_fill[i].classList.remove("water_fill_python");
                water_fill[i].style.animation = 'water-fill-python 5s linear normal';
            }
            else{
                water_fill[i].classList.remove("water_fill");
                water_fill[i].style.animation = 'water-fill 5s linear normal';
            }
            // water_fill[i].style.background = 'url("11zon_resized_2.png") repeat-x 0px 200px';
        }
        // document.getElementById("skills").style.display = "none";
        a = false;
    }
}
let b = false;
document.getElementById("about-btn").onclick = function(){
    if(b == false){
        document.getElementById("nav_bar").style.width = "663px";
        document.getElementById("skills").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById("hero_name").style.transition = "all 0.5s";
        document.getElementById("hero_name").style.transform = "translateY(-11rem)";
        document.getElementById("about").classList.remove("animate__zoomOut");
        document.getElementById("about").classList.add("animate__zoomIn");
        document.getElementById("about").style.display = "flex";
        document.getElementById("about-btn").style.color = "#09E6F6";
        b = true;
        // document.getElementById("hero_name").style.transform = "translateY(0rem)";
        document.getElementById("skills").classList.remove("animate__zoomIn");
        document.getElementById("contact").classList.remove("animate__zoomIn");
        document.getElementById("skills").classList.add("animate__zoomOut");
        document.getElementById("contact").classList.add("animate__zoomOut");
        // document.getElementById("skills").style.display = "none";
        document.getElementById("skill-btn").style.color = "white";
        document.getElementById("contact-btn").style.color = "white";
        a = false;
        c = false;
    }
    else if(b == true){
        document.getElementById("hero_name").style.transform = "translateY(0rem)";
        document.getElementById("about").classList.remove("animate__zoomIn");
        document.getElementById("nav_bar").style.width = "435px";
        document.getElementById("about").classList.add("animate__zoomOut");
        document.getElementById("about-btn").style.color = "white";
        // document.getElementById("about").style.display = "none";
        b = false;
    }
}
let c = false;
document.getElementById("contact-btn").onclick = function(){
    if(c == false){
        document.getElementById("nav_bar").style.width = "663px";
        document.getElementById("skills").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("hero_name").style.transition = "all 0.5s";
        document.getElementById("hero_name").style.transform = "translateY(-11rem)";
        document.getElementById("contact").classList.remove("animate__zoomOut");
        document.getElementById("contact").classList.add("animate__zoomIn");
        document.getElementById("contact").style.display = "flex";
        document.getElementById("contact").style.alignItems = "center";
        document.getElementById("contact-btn").style.color = "#09E6F6";
        c = true;
        // document.getElementById("hero_name").style.transform = "translateY(0rem)";
        document.getElementById("skills").classList.remove("animate__zoomIn");
        document.getElementById("about").classList.remove("animate__zoomIn");
        document.getElementById("skills").classList.add("animate__zoomOut");
        document.getElementById("about").classList.add("animate__zoomOut");
        // document.getElementById("skills").style.display = "none";
        document.getElementById("skill-btn").style.color = "white";
        document.getElementById("about-btn").style.color = "white";
        a = false;
        b = false;
    }
    else if(c == true){
        document.getElementById("hero_name").style.transform = "translateY(0rem)";
        document.getElementById("contact").classList.remove("animate__zoomIn");
        document.getElementById("contact").classList.add("animate__zoomOut");
        document.getElementById("contact-btn").style.color = "white";
        document.getElementById("nav_bar").style.width = "435px";
        // document.getElementById("about").style.display = "none";
        c = false;
    }
}




let ui = document.getElementById("ui");
let android = document.getElementById("android");
let front = document.getElementById("front-end");
let python = document.getElementById("python");
let skill_head = document.getElementById("skill_head");

ui.onclick = function(){
    skill_head.textContent = "UI/UX Designer";
    skill_head.style.width = "12rem";
    ui.style.backgroundColor = "#155E75";
    android.style.backgroundColor = "white";
    front.style.backgroundColor = "white";
    python.style.backgroundColor = "white";
}
android.onclick = function(){
    skill_head.textContent = "Android Developer";
    skill_head.style.width = "14.5rem";
    android.style.backgroundColor = "#155E75";
    ui.style.backgroundColor = "white";
    front.style.backgroundColor = "white";
    python.style.backgroundColor = "white";
}
front.onclick = function(){
    skill_head.textContent = "Front-End Developer";
    skill_head.style.width = "16.5rem";
    front.style.backgroundColor = "#155E75";
    ui.style.backgroundColor = "white";
    android.style.backgroundColor = "white";
    python.style.backgroundColor = "white";
}
python.onclick = function(){
    skill_head.textContent = "Python Programmer";
    skill_head.style.width = "15.25rem";
    python.style.backgroundColor = "#155E75";
    ui.style.backgroundColor = "white";
    front.style.backgroundColor = "white";
    android.style.backgroundColor = "white";
}



















