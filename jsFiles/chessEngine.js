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
      this._create = new CreateScreen(createScreen);
      this.currentMenu = 0; // 0: menu 1: create 2: play 3: options
    }
    create() {
        this.currentMenu = 1;
        this._mainMenu.hide();
        this._createScreen.show();
        this._createScreen.find(".step1").show()
    }
    play() {
        this.currentMenu = 2;
    }
    options() {
        this.currentMenu = 3;
        this._mainMenu.hide();
        this._optionsMenu.show();
    }
    home() {
        this._homeText = $("button#home")
        switch (this.currentMenu) {
            case 1:
            case 2:
                this._homeText.html("<i class='fa fa-home'></i> Are you sure?");
                this.currentMenu = 3;
                break;
            case 3:
                this._homeText.html("<i class='fa fa-home'></i> Home");
                this._mainMenu.show();
                this._optionsMenu.hide();
                this._createScreen.hide();
                break;
            default:
                break; 
        }
    }
}



