export const FACTIONS = {
  Autobots: 'autobots',
  Decepticons: 'decepticons'
};

export const OptimusPrime = {name: 'Optimus Prime',
  faction: FACTIONS.Autobots,
  power: 1000,
  greet: () => {
    return ("Hi, I'm " + OptimusPrime.name + ".");
  }
};

export const Megatron = {name: 'Megatron',
  faction: FACTIONS.Decepticons,
  power: 1000,
  greet: () => {
    return ("Hi, I'm " + Megatron.name + ".");
  }
};

/*1. creating the objects Optimus and Megatron.  now there is extra code that is doing almost the same thing.

2. by changing the function to an instanced function //greet() {text ${this.name}}// 

3. it allows one to apply changes to multiple blocks of code, ie you can create multiple objects then in one const change a property of a few
*/
