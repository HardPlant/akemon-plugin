(function () {
    /**
     * PartyCommand 창은 생략하고, ActorCommand로 즉시 이동한다.
     */

    Scene_Battle.prototype.createPartyCommandWindow = function () {
        return Scene_Battle.createActorCommandWindow();
    }

    Window_ActorCommand.prototype.makeCommandList = function () {
        if (this._actor) {
            this.addSkillCommand();
            this.addCommand(TextManager.fight, 'doll');
            this.addItemCommand();
            this.addCommand(TextManager.escape, 'escape', BattleManager.canEscape());
        }
    };
    /**
     * 
     */

    Scene_Battle.prototype.createActorCommandWindw = function () {
        this._actorCommandWindow = new Window_ActorCommand();
        this._actorCommandWindow.setHandler('skill', this.commandSkill.bind(this));
        this._actorCommandWindow.setHandler('doll', this.commandFight.bind(this));
        this._actorCommandWindow.setHandler('escape', this.commandEscape.bind(this));
        this._actorCommandWindow.setHandler('item', this.commandItem.bind(this));
        this.addWindow(this._actorCommandWindow);
    }

    Sceme

})();