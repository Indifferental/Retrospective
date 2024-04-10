// ==UserScript==
// @name         Retrospective
// @namespace    http://tampermonkey.net/
// @version      none
// @description  none
// @author       https://vk.com/drawingwithblood
// @match        https://*.tankionline.com/*
// @icon         https://i.imgur.com/c4YqBSx.png
// @grant        GM_xmlhttpRequest
// ==/UserScript==

GM_xmlhttpRequest ({
    url: "https://raw.githubusercontent.com/Indifferental/Retrospective/main/scripts/main.js?token=GHSAT0AAAAAACNOBPXWK44RKPE6BAWNPIW4ZQWLICQ",
    method: "GET",
    onload: (ev) => {eval(ev.responseText);
    }});
