/**
 * Multiverse Fairy Chess Engine
 * Made by Kikithecat12345
 * Thanks to MrMelon for answering all my questions and stuff
 */

$(document).ready(function() {
    const mainMenu = $(".mainMenu");
    const createScreen = $(".createScreen");
    const optionsMenu = $(".optionsMenu");
    createScreen.hide();
    optionsMenu.hide();
    const chessEngine = new ChessEngine(mainMenu, createScreen, optionsMenu);
    // For debug purposes
    window.chessEngine = chessEngine;
 });


