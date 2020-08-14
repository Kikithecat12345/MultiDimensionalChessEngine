/**
 * chessEngine.js
 * contains the ChessEngine class.
 */
class ChessEngine {
    constructor(mainMenu, createScreen, optionsMenu) {
      this._mainMenu = mainMenu;
      this._createScreen = createScreen;
      this._optionsMenu = optionsMenu;
      this._options = new Options(optionsMenu);
    }
    create() {

    }
    play() {

    }
    options() {
        this._mainMenu.hide();
        this._optionsMenu.show();
    }
    home() {
        this._mainMenu.show();
        this._optionsMenu.hide();
        this._createScreen.hide();
    }
}



