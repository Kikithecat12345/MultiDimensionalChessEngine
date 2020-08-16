/**
 * createScreen.js
 * Contains the CreateScreen class.
 */
class CreateScreen {
    constructor(createScreen) {
        this._createScreen = createScreen;
        this._creation = new Creation()
        this.currentStep = 0;
        this.steplist = [false, false, false, false, false, false, false, false];
        //shogilike, multimove, multiplayer, customboard, custompieces, towerpieces, weirdrules, spectatorrules
    }
    find(i) {
        return this._createScreen.find(i);
    }
    findChild(i) {
        return this.find("> " + i)
    }
    step1() {
        if (this.find(" div.step1 input[tag=name]").val() == "") {
            this.find(" div.step1 div#errorText").append("<p id=\"errorText\">Please add a name.</p>");
        } else if (this.find(" div.step1 textarea").val() == "") {
            this.find(" div.step1 div#errorText").append("<p id=\"errorText\">Please add a description.</p>");
        } else {
            this._creation.name[0] = this.find(" div.step1 input[tag=name]").val();
            this._creation.name[1] = this.find(" div.step1 textarea").val();
            this.findChild(".step1").hide();
            this.findChild(".step2").show();
        }
    }
    step1reset() {
        this._creation.name[0] = this.find(" div.step1 input[tag=name]").val("");
        this._creation.name[1] = this.find(" div.step1 textarea").val("");
    }
    step2() {

    }
    step2reset() {
        $("form > input#square[type=radio]").prop("checked", true);
        $("form > input#shogilike[type=checkbox]").prop("checked", false);
        $("form > input#multimove[type=checkbox]").prop("checked", false);
        $("form > input#multiplayer[type=checkbox]").prop("checked", false);
        $("form > input#customboard[type=checkbox]").prop("checked", false);
        $("form > input#custompieces[type=checkbox]").prop("checked", false);
        $("form > input#towerpieces[type=checkbox]").prop("checked", false);
        $("form > input#weirdrules[type=checkbox]").prop("checked", false);
        $("form > input#spectatorrules[type=checkbox]").prop("checked", false);

    }
    step2back() {
        this.findChild(".step1").show();
        this.findChild(".step2").hide();
    }
}