const App = {

    preview: null,

    init() {

        this.preview = document.getElementById("previewArea");

        UI.init();

        Watermark.init();

        Settings.init();

        Download.init();

        Storage.load();

    }

};

window.addEventListener("DOMContentLoaded", () => {

    App.init();

});
