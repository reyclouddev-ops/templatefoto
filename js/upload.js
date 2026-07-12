const Upload = {

    bind(slot) {

        const input =
            slot.querySelector("input");

        const img =
            slot.querySelector(".preview-image");

        const wrapper =
            slot.querySelector(".photo-wrapper");

        const upload =
            slot.querySelector(".upload-box");

        slot.addEventListener("click", () => {

            input.click();

        });

        input.addEventListener("change", e => {

            const file = e.target.files[0];

            if (!file) return;

            const reader = new FileReader();

            reader.onload = () => {

                img.src = reader.result;

                wrapper.style.display = "block";

                upload.style.display = "none";

                Editor.enable(img);

            };

            reader.readAsDataURL(file);

        });

    }

};
