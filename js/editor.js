const Editor = {

    enable(img) {

        let scale = 1;
        let posX = 0;
        let posY = 0;

        let dragging = false;

        let startX = 0;
        let startY = 0;

        const update = () => {

            img.style.transform =
                `translate(${posX}px, ${posY}px) scale(${scale})`;

        };

        update();

        img.onpointerdown = (e) => {

            dragging = true;

            startX = e.clientX - posX;
            startY = e.clientY - posY;

            img.style.cursor = "grabbing";

        };

        window.addEventListener("pointermove", move);

        window.addEventListener("pointerup", up);

        function move(e){

            if(!dragging) return;

            posX = e.clientX - startX;
            posY = e.clientY - startY;

            update();

        }

        function up(){

            dragging = false;

            img.style.cursor = "grab";

        }

        const slot = img.closest(".slot");

        const zoomIn =
            slot.querySelector(".zoom-in");

        const zoomOut =
            slot.querySelector(".zoom-out");

        zoomIn.onclick = (e)=>{

            e.stopPropagation();

            scale += 0.1;

            update();

        };

        zoomOut.onclick = (e)=>{

            e.stopPropagation();

            scale = Math.max(0.5, scale - 0.1);

            update();

        };

        img.addEventListener("wheel",(e)=>{

            e.preventDefault();

            if(e.deltaY < 0){

                scale += 0.1;

            }else{

                scale = Math.max(0.5, scale - 0.1);

            }

            update();

        });

    }

};
