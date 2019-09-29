const fs = require("fs");
eval(fs.readFileSync("Akemon/js/rpg_windows.js").toString());
eval(fs.readFileSync("Akemon/js/plugins/DollBattleSystem/battle/Window_Command.js").toString());

describe("Window_PartyCommand()", () => {
    var partyCommand = new Window_PartyCommand();
    partyCommand.initialize();
    partyCommand.setup();
    expect(partyCommand._list).toEqual(["fight, doll, item, escape"]);
});

describe("Window_ActorCommand()", () => {
    
});