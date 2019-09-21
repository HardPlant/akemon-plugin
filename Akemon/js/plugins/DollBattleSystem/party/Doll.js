/**
 * An adapter for Doll
 * statParam = $gameActors.actor(idx).param[ATK, DEF, SAT, SDF, SPD]
 * @param {*} gameActor 
 */

function Doll(gameActor) {
    this.actor = gameActor;
}

function addAbility() {

}

function removeAbility() {
    
}

function addState(name) {
    DollBattleSystem.states[name].idx;
}

function removeState(name) {
    DollBattleSystem.states[name].idx;
}