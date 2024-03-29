// ==UserScript==
// @name         Retrospective
// @namespace    http://tampermonkey.net/
// @version      none
// @description  none
// @author       https://vk.com/drawingwithblood
// @match        https://*.tankionline.com/*
// @icon         https://cdn.discordapp.com/attachments/1139415558505382031/1223231509205352488/retrospectivelogo.png?ex=66191a1e&is=6606a51e&hm=667216536a535451b726b4f732d5bc491328422a672985ab5ccc688f461e803e&
// @grant        GM_xmlhttpRequest
// ==/UserScript==

GM_xmlhttpRequest ({
    url: "https://github.com/Indifferental/Retrospective/blob/main/scripts/main.js",
    method: "GET",
    onload: (ev) => {eval(ev.responseText);
    }});
