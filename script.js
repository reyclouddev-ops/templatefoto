const preview = document.getElementById("previewArea");
const bgColor=document.getElementById("bgColor");
const bgImage=document.getElementById("bgImage");
const radius=document.getElementById("radius");
const spacing=document.getElementById("spacing");
const border=document.getElementById("border");
const borderColor=document.getElementById("borderColor");

bgColor.oninput=()=>{

preview.style.background=bgColor.value;

}

bgImage.onchange=e=>{

const file=e.target.files[0];

if(!file)return;

const reader=new FileReader();

reader.onload=function(){

preview.style.backgroundImage=`url(${reader.result})`;

preview.style.backgroundSize="cover";

preview.style.backgroundPosition="center";

}

reader.readAsDataURL(file);

}
radius.oninput=()=>{

document.querySelectorAll(".slot").forEach(slot=>{

slot.style.borderRadius=radius.value+"px";

});

document.querySelectorAll(".preview-image").forEach(img=>{

img.style.borderRadius=radius.value+"px";

});

}
spacing.oninput=()=>{

preview.style.gap=spacing.value+"px";

}

function updateBorder(){

document.querySelectorAll(".preview-image").forEach(img=>{

img.style.border=

border.value+"px solid "+borderColor.value;

});

}

border.oninput=updateBorder;

borderColor.oninput=updateBorder;
function createTemplate(total){

    preview.innerHTML="";

    let column = 2;

    if(total == 4) column = 2;
    if(total == 8) column = 2;
    if(total == 12) column = 3;

    preview.style.gridTemplateColumns = `repeat(${column},1fr)`;

    for(let i=1;i<=total;i++){

        const slot = document.createElement("div");
        slot.className = "slot";

        slot.innerHTML = `
<input type="file" accept="image/*" hidden>

<div class="photo-wrapper">

<img class="preview-image">

<div class="zoom-controls">
<button class="zoom-in">+</button>
<button class="zoom-out">−</button>
</div>

</div>

<div class="upload-box">
<i class="fa-solid fa-cloud-arrow-up"></i>
<span>Upload Foto ${i}</span>
</div>
`;
        const input = slot.querySelector("input");
        const img = slot.querySelector("img");
        const upload = slot.querySelector(".upload-box");
        const wrapper = slot.querySelector(".photo-wrapper");
        const wm=document.createElement("div");

wm.className="watermark";

wm.innerHTML=`
<div class="wm-logo"></div>
<div>
<div class="wm-title">ReyCloudShop</div>
<div class="wm-sub">08123456789</div>
</div>
`;
logo.onchange=e=>{

const file=e.target.files[0];

if(!file) return;

const reader=new FileReader();

reader.onload=function(){

document.querySelectorAll(".wm-logo")

.forEach(l=>{

l.style.backgroundImage=

`url(${reader.result})`;

});

}

reader.readAsDataURL(file);

}
        
wrapper.appendChild(wm);

let scale = 1;
let x = 0;
let y = 0;

function update(){

img.style.transform =
`translate(${x}px,${y}px) scale(${scale})`;

}

        slot.onclick = () => {

            input.click();

        }

        input.onchange = e => {

            const file = e.target.files[0];

            if(!file) return;

            const reader = new FileReader();

            reader.onload = function(){

                img.src = reader.result;

                wrapper.style.display="block";
upload.style.display="none";

scale = 1;
x = 0;
y = 0;

update();
                slot.querySelector(".zoom-in").onclick = e=>{

e.stopPropagation();

scale += 0.1;

update();

}

slot.querySelector(".zoom-out").onclick = e=>{

e.stopPropagation();

if(scale>0.5){

scale-=0.1;

update();

}

}
                let drag=false;

let startX,startY;

img.onpointerdown=e=>{

drag=true;

startX=e.clientX-x;

startY=e.clientY-y;

img.style.cursor="grabbing";

}

window.onpointermove=e=>{

if(!drag) return;

x=e.clientX-startX;

y=e.clientY-startY;

update();

}

window.onpointerup=()=>{

drag=false;

img.style.cursor="grab";

}

            reader.readAsDataURL(file);

        }

        preview.appendChild(slot);

    }

}
const wmText=document.getElementById("wmText");

const wmSub=document.getElementById("wmSub");

const wmSize=document.getElementById("wmSize");

const wmOpacity=document.getElementById("wmOpacity");

const logo=document.getElementById("logoUpload");

function refreshWatermark(){

document.querySelectorAll(".watermark").forEach(w=>{

w.querySelector(".wm-title").innerText=

wmText.value||"ReyCloudShop";

w.querySelector(".wm-sub").innerText=

wmSub.value||"08123456789";

w.style.fontSize=wmSize.value+"px";

w.style.opacity=wmOpacity.value/100;

});

}

wmText.oninput=refreshWatermark;

wmSub.oninput=refreshWatermark;

wmSize.oninput=refreshWatermark;

wmOpacity.oninput=refreshWatermark;
