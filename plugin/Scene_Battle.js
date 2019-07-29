/**
 * @see https://www.5ing-myway.com/create-rpgmaker-plugin-window/
 */

function Scene_DollBattle() {
    this.initialize.apply(this, arguments);
}

Scene_DollBattle.prototype = Object.create(Scene_Battle.prototype);
Scene_DollBattle.prototype.constructor = Scene_Battle;

Scene_DollBattle.prototype.initialize = function() {
    Scene_Battle.prototype.initialize.call(this);
};

Scene_DollBattle.prototype.create = function() {
    Scene_Battle.prototype.create.call(this);
};

function Window_Player_DollCount() {
    this.initialize.apply(this, arguments);
};

Window_Player_DollCount.prototype = Object.create(Window_Base.prototype);
Window_Player_DollCount.prototype.constructor = Window_Player_DollCount;

Window_Player_DollCount.prototype.initialize = function() {
    Window_Base.prototype.initialize.call(this);
};

function Sprite_Battler_Player() {
    this.initialize.apply(this, arguments);
}

Sprite_Battler_Player.prototype = Object.create(Window_Base.prototype);
Sprite_Battler_Player.prototype.constructor = Sprite_Battler_Player;

Sprite_Battler_Player.prototype.initialize = function() {
    Window_Base.prototype.initialize.call(this);
};

function Sprite_Battler_Opponent() {
    this.initialize.apply(this, arguments);
}

Sprite_Battler_Opponent.prototype = Object.create(Window_Base.prototype);
Sprite_Battler_Opponent.prototype.constructor = Sprite_Battler_Opponent;

Sprite_Battler_Opponent.prototype.initialize = function() {
    Window_Base.prototype.initialize.call(this);
};

function Window_Battler_Info() {
    this.initialize.apply(this, arguments);
}

Window_Battler_Info.prototype = Object.create(Window_Base.prototype);
Window_Battler_Info.prototype.constructor = Window_Battler_Info;

Window_Battler_Info.prototype.initialize = function() {
    Window_Base.prototype.initialize.call(this);
};



function Window_BattleCommand() {
    this.initialize.apply(this, arguments);
}

Window_BattleCommand.prototype = Object.create(Window_Command.prototype);
Window_BattleCommand.prototype.constructor = Window_BattleCommand;

Window_BattleCommand.prototype.initialize = function(x, y) {
    Window_Base.prototype.initialize.call(this, x, y);
};

Window_BattleCommand.prototype.makeCommandList = function() {
    this.addCommand("싸우기", "fight", true);
    this.addCommand("아이돌", "doll", true);
    this.addCommand("아이템", "item", true);
    this.addCommand("도망", "run", true);
};

(function($) {
    $.startBattle = function(isTrainerBattle) {
        this._isTrainerBattle = isTrainerBattle;

        if (_isTrainerBattle) {
            $.showTrainerBattleWindow();
        } else {
            $.showWildBattleWindow();
        }
    };
    $.showTrainerBattleWindow = function() {

    };
    $.showWildBattleWindow = function() {

    };
    $.chooseTurnCommand = function() {
        //
        $.createBattleCommandWindow();
    };
    $.createBattleCommandWindow = function() {
        this._battleCommandWindow = new Window_BattleCommand();
        this._battleCommandWindow.setHandler("fight", this.onCommandFight);
        this._battleCommandWindow.setHandler("doll", this.onCommandDoll);
        this._battleCommandWindow.setHandler("item", this.onCommandItem);
        this._battleCommandWindow.setHandler("run", this.onCommandRun);
        this.addWindow(this._battleCommandWindow);
    };
    $.onCommandFight = function() {
        // Load Current Doll's
        this.processEnemyTurn(); 
    };
    $.onCommandDoll = function() {
        // Get Doll from Scene and change it
        SceneManager.push();
        this.processEnemyTurn();
    };
    $.onCommandItem = function() {
        // Get Item from Scene and process
        SceneManager.push();
        this.processEnemyTurn();
    };
    $.onCommandRun = function() {
        if ($.isEscapeable) {
            this.popScene();
        } else if (_isTrainerBattle) {
            // Make text that can't escape
            $.createBattleCommandWindow();    
        } else {
            // Make text that can't escape
            $.createBattleCommandWindow();
        }
        this.processEnemyTurn();
    };
    $.isEscapeable = function() {
        return !$.isTrainerBattle;
    };
    $.processEnemyTurn = function() {

    };
    $.processTurn = function() {
        // Check priority, and do action
        if ($.isBattleEnded) {
            return $.processEndBattle();
        } else {
            return $.chooseTurnCommand();
        }
    };
    $.isBattleEnded = function() {
        // check Battle's end condition
    };
    $.processEndBattle() = function() {
        // if win : 
        // if lose
    };
})(Scene_DollBattle.prototype);
