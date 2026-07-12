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
            <input
                type="file"
                accept="image/*"
                hidden
                id="file${i}"
            >

            <img class="preview-image" id="img${i}">

            <div class="upload-box">

                <i class="fa-solid fa-cloud-arrow-up"></i>

                <span>Upload Foto ${i}</span>

            </div>
        `;

        const input = slot.querySelector("input");
        const img = slot.querySelector("img");
        const upload = slot.querySelector(".upload-box");

        slot.onclick = () => {

            input.click();

        }

        input.onchange = e => {

            const file = e.target.files[0];

            if(!file) return;

            const reader = new FileReader();

            reader.onload = function(){

                img.src = reader.result;

                img.style.display = "block";

                upload.style.display = "none";

            }

            reader.readAsDataURL(file);

        }

        preview.appendChild(slot);

    }

}
