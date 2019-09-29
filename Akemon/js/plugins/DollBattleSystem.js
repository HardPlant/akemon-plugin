/*:
 * @plugindesc 인형 배틀 시스템
 * @author HardPlant
 * 
 * @help
 */

function DollPartyManagement() {

}
 /**
  * Plugin Start
  * 
  */

(function() {
    
    /**
     * 용어 설정
     */
    var parameters = PluginManager.parameters("DollBattleSystem");

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        
        if (command === "DollBattleSystem") {
            switch(args[0]) {
                case 'term':
                    $dataSystem.terms.commands[$dataSystem.terms.commands.indexOf("Fight")] = "Doll"; //fight
                    $dataSystem.terms.commands[$dataSystem.terms.commands.indexOf("Magic")] = "Fight"; //fight
                    break;
            }
        }
    }
    /**
     * 게임 특화 설정
     */
    Window_Base.prototype.drawActorTp = function() {

    };

    Window_ItemCategory.prototype.makeCommandList = function() {
        this.addCommand(TextManager.item,    'item');
        this.addCommand(TextManager.weapon,  'weapon');
        this.addCommand(TextManager.armor,   'armor');
        this.addCommand(TextManager.keyItem, 'keyItem');
    };
    
    Window_MenuCommand.prototype.makeCommandList = function() {
        this.addCommand("IdolMaster", 'enemybook');
        this.addMainCommands();
        this.addFormationCommand();
        this.addOriginalCommands();
        this.addOptionsCommand();
        this.addSaveCommand();
        this.addGameEndCommand();
    };
    var _Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
    Scene_Menu.prototype.createCommandWindow = function() {
        _Scene_Menu_createCommandWindow.call(this);
        //this.commandEnemyBook = function() {
        //       Game_Interpreter.prototype.pluginCommand("EnemyBook", "open");
        //};
        //this._commandWindow.setHandler('enemybook', this.commandEnemyBook.bind(this));
    }
    /**
     * PartyCommand 창은 생략하고, ActorCommand로 즉시 이동한다.
     */
    
    Window_PartyCommand.prototype.setup = function() {

        this.callHandler("fight");
    }

    Window_ActorCommand.prototype.makeCommandList = function () {
        
        if (this._actor) {
            console.log(this);
            this.addSkillCommands();
            this.addCommand(TextManager.fight, 'doll');
            this.addItemCommand();
            this.addCommand(TextManager.escape, 'escape', BattleManager.canEscape());
        }
    };
    /**
     * 
     */

    Scene_Battle.prototype.createActorCommandWindow = function () {
        this._actorCommandWindow = new Window_ActorCommand();
        this._actorCommandWindow.setHandler('skill', this.commandSkill.bind(this));
        this._actorCommandWindow.setHandler('doll', this.commandAttack.bind(this));
        this._actorCommandWindow.setHandler('escape', this.commandEscape.bind(this));
        this._actorCommandWindow.setHandler('item', this.commandItem.bind(this));
        this.addWindow(this._actorCommandWindow);
    }
})();