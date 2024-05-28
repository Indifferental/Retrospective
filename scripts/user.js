// ==UserScript==
// @name         Retrospective
// @namespace    http://tampermonkey.net/
// @version      none
// @description  none
// @author       https://vk.com/drawingwithblood
// @match        https://*.tankionline.com/*
// @icon         https://github.com/Indifferental/Retrospective/blob/main/source/logo.png?raw=true
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

GM_xmlhttpRequest ({
    url: "https://raw.githubusercontent.com/Indifferental/Retrospective/main/scripts/main.js",
    method: "GET",
    onload: (ev) => { eval(ev.responseText) } })
