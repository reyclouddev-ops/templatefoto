const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);

function create(tag, className = "") {

    const el = document.createElement(tag);

    if (className) el.className = className;

    return el;

}
