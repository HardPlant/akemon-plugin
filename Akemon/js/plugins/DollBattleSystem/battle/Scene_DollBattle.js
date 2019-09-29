(function($) {
    var _Scene_Battle = Scene_Battle.prototype.create;
    Scene_DollBattle.prototype.create = function() {
        _Scene_Battle.call(this);
    };

    

})(DollBattleSystem);