const preview = document.getElementById("previewArea");

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
