export const FACTIONS = {
  Autobots: 'autobots',
  Decepticons: 'decepticons'
};


export class Robot {
  constructor(name, faction){
    this._name = name;
    this._faction = faction;
    this._power = 1000;
  }

  get name() {
    return this._name;
  }

  get power(){
    return this._power;
  }

  get faction(){
    return this._faction;
  }

  greet(){
    return `Hi, I'm ${this.name}`;
  }
}

class OptimusPrime extends Robot{
  constructor(){
    super('Optimus Prime', FACTIONS.Autobots);
  }
}

class Megatron extends Robot{
  constructor(){
    super('Megatron', FACTIONS.Decepticons);
  }
}

export default{
  optimusPrime: new OptimusPrime(),
  megatron: new Megatron()
}
