/**
 * Doll Battle Sy
 */

/*:
 * @plugindesc 
 * @author HardPlant
 * 
 * @help
 */

(function() {

    var parameters = PluginManager.parameters("DollBattleSystem");

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this. command, args);

        if (command === "DollBattleSytem") {
            switch(args[0]) {
                case 'start':
                    SceneManager.push(Scene_DollBattle);
                    break;
            }
        }
    }

})();