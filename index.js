/**
 * Multiverse Fairy Chess Engine
 * Made by Kikithecat12345
 * Thanks to MrMelon for answering all my questions and stuff
 */
var step2checks = [false, false];

function renderStartupMessage(option) {
  if (option instanceof Array) return option.map(line => '[--> ' + line + ' <--]').join('\n')
  else return '[--> ' + option + ' <--]'
}

$(document).ready(function() {
    const mainMenu = $(".mainMenu");
    const createScreen = $(".createScreen");
    const optionsMenu = $(".optionsMenu");
    createScreen.hide();
    optionsMenu.hide();
    const chessEngine = new ChessEngine(mainMenu, createScreen, optionsMenu);
    // For debug purposes
    window.chessEngine = chessEngine;
    var startupMessages = [
        "Heyo, Kiki here!",
        "And so the world chess championship begins.",
        "Peekaboo!",
        "Oh hi. Didn't see you there.",
        "$(\"chess\").makeBestMove();",
        "/^chess$/gi",
        "QGa32xGa39+",
        "*insert funny chess joke here*",
        "As seen on TV!",
        ["Don't run $(\"html\").delete()","Well, I guess you could?"],
        "Cheated cookies taste awful. Wait, wrong game...",
        "That's NumberWang!",
        ["/give @p diamond_block 64","   Wait, wrong game..."],
        "*funny easter egg*",
        "https://www.onpointcoding.net/"
    ]
    console.log(renderStartupMessage(startupMessages[Math.floor(Math.random()*startupMessages.length)]));
});


