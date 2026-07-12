const Template = {

    create(total) {

        const preview = App.preview;

        preview.innerHTML = "";

        let columns = 2;

        switch (total) {

            case 4:
                columns = 2;
                break;

            case 8:
                columns = 2;
                break;

            case 12:
                columns = 3;
                break;

        }

        preview.style.gridTemplateColumns =
            `repeat(${columns},1fr)`;

        for (let i = 1; i <= total; i++) {

            const slot = this.createSlot(i);

            preview.appendChild(slot);

        }

    },

    createSlot(index) {

        const slot = create("div", "slot");

        slot.innerHTML = `

<input type="file" hidden accept="image/*">

<div class="photo-wrapper">

<img class="preview-image">

<div class="zoom-controls">

<button class="zoom-in">+</button>

<button class="zoom-out">−</button>

</div>

</div>

<div class="upload-box">

<i class="fa-solid fa-cloud-arrow-up"></i>

<span>Upload Foto ${index}</span>

</div>

`;

        Upload.bind(slot);

        return slot;

    }

};
