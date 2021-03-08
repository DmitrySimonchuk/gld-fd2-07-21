/* 
Реализовать две оставшиеся иерархии в виде классов (которые вы не делали в классе). Придумать для 
каждого класса по 1-2 уникальных свойств, 1-2 методов
(методы можно не сильно реализовывать, а просто выводить что-то в консоль-лог внутри, чтобы знать, 
что он вызвался в какой-то момент) 
https://docs.google.com/document/d/1gre7iEn1Iq-rstFlDrltCXxZvxaLlVtA8xtJmhzAjkA/edit?usp=sharing 
*/

console.info('Task-1-2');

class MeansOfTransport {
  constructor(name, position = 'garage') {
    this.name = name;
    this.position = position;
  }

  get positionOnStart() {
    return `Position ${this.name} on start - ${this.position}`;
  }
}

const meansOfTransport = new MeansOfTransport('means of transport');

console.log(meansOfTransport);
console.log(meansOfTransport.positionOnStart);
console.info('');

class RealMeansOfTransport extends MeansOfTransport {
  #location = 'real world';

  constructor(name) {
    super(name);
  }

  get location() {
    return `${this.name} has location - ${this.#location}`;
  }
}

const realMeansOfTransport = new RealMeansOfTransport('Real means of transport');

console.log(realMeansOfTransport);
console.log(realMeansOfTransport.positionOnStart);
console.log(realMeansOfTransport.location);
console.info('');

class AirTransport extends RealMeansOfTransport {
  #fuel = 'kerosene';

  constructor(name) {
    super(name);
  }

  get typeFuel() {
    return `${this.name} use fuel - ${this.#fuel}`;
  }
}

const airTransport = new AirTransport('Air Transport');

console.log(airTransport);
console.log(airTransport.positionOnStart);
console.log(airTransport.location);
console.log(airTransport.typeFuel);
console.info('');

class Helicopters extends AirTransport {
  #maxSpeed = 160;

  constructor(name) {
    super(name);
  }

  get maxSpeedHelicopters() {
    return `${this.name} has max speed - ${this.#maxSpeed} mph`;
  }
}

const helicopters = new Helicopters('Helicopters');

console.log(helicopters);
console.log(helicopters.positionOnStart);
console.log(helicopters.location);
console.log(helicopters.typeFuel);
console.log(helicopters.maxSpeedHelicopters);
console.info('');

class Mi8 extends Helicopters {
  #type = 'Passager';

  constructor(name) {
    super(name);
  }

  get typeMi8() {
    return `${this.name} has type - ${this.#type}`;
  }
}

const mi8 = new Mi8('Mi-8');

console.log(mi8);
console.log(mi8.positionOnStart);
console.log(mi8.location);
console.log(mi8.typeFuel);
console.log(mi8.maxSpeedHelicopters);
console.log(mi8.typeMi8);
console.info('');

class Ka26 extends Helicopters {
  #type = 'military';

  constructor(name) {
    super(name);
  }

  get typeKa26() {
    return `${this.name} has type - ${this.#type}`;
  }
}

const ka26 = new Ka26('Ka-26');

console.log(ka26);
console.log(ka26.positionOnStart);
console.log(ka26.location);
console.log(ka26.typeFuel);
console.log(ka26.maxSpeedHelicopters);
console.log(ka26.typeKa26);
console.info('');

class Airplanes extends AirTransport {
  #countryOfManufacture = 'Russia';

  constructor(name) {
    super(name);
  }

  get countryOfManufactures() {
    return `${this.name} made in - ${this.#countryOfManufacture}`;
  }
}

const airplanes = new Airplanes('Airplanes');

console.log(airplanes);
console.log(airplanes.positionOnStart);
console.log(airplanes.location);
console.log(airplanes.typeFuel);
console.log(airplanes.countryOfManufactures);
console.info('');

class AN24 extends Airplanes {
  #countEngine = 2;

  constructor(name) {
    super(name);
  }

  get countEngine() {
    return `${this.name} has - ${this.#countEngine} engine`;
  }
}

const aN24 = new AN24('AN-24');

console.log(aN24);
console.log(aN24.positionOnStart);
console.log(aN24.location);
console.log(aN24.typeFuel);
console.log(aN24.countryOfManufactures);
console.log(aN24.countEngine);
console.info('');

class IL62 extends Airplanes {
  #countPassagers = 168;

  constructor(name) {
    super(name);
  }

  get passengerCapacity() {
    return `${this.name} has passenger capacity - ${this.#countPassagers} mans`;
  }
}

const iL62 = new IL62('IL-62');

console.log(iL62);
console.log(iL62.positionOnStart);
console.log(iL62.location);
console.log(iL62.typeFuel);
console.log(iL62.countryOfManufactures);
console.log(iL62.passengerCapacity);
console.info('');

class EarthTransport extends RealMeansOfTransport {
  #minCountWheels = 1;

  constructor(name) {
    super(name);
  }

  get minCountWheels() {
    return `${this.name} has min count wheels - ${this.#minCountWheels}`;
  }
}

const earthTransport = new EarthTransport('Earth transport');

console.log(earthTransport);
console.log(earthTransport.positionOnStart);
console.log(earthTransport.location);
console.log(earthTransport.minCountWheels);
console.info('');

class FairyTransport extends MeansOfTransport {
  #country = 'Russia';

  constructor(name) {
    super(name);
  }

  get country() {
    return `${this.name} write in fairy from - ${this.#country}`;
  }
}

const fairyTransport = new FairyTransport('Fairy transport');

console.log(fairyTransport);
console.log(fairyTransport.positionOnStart);
console.log(fairyTransport.country);
console.info('');

class EarthFairyTransport extends FairyTransport {
  #speed = 10;

  constructor(name) {
    super(name);
  }

  get speedTransport() {
    return `${this.name} has speed - ${this.#speed}`;
  }
}

const earthFairyTransport = new EarthFairyTransport('Earth Fairy Transport');

console.log(earthFairyTransport);
console.log(earthFairyTransport.positionOnStart);
console.log(earthFairyTransport.country);
console.log(earthFairyTransport.speedTransport);
console.info('');

class Bake extends EarthFairyTransport {
  #fuel = 'firewood';

  constructor(name) {
    super(name);
  }

  get fuelTransport() {
    return `${this.name} use fuel - ${this.#fuel}`;
  }
}

const bake = new Bake('Bake');

console.log(bake);
console.log(bake.positionOnStart);
console.log(bake.country);
console.log(bake.speedTransport);
console.log(bake.fuelTransport);
console.info('');

class BootsRunners extends EarthFairyTransport {
  #maxSpeed = 'very fast';

  constructor(name) {
    super(name);
  }

  get maxSpeedTransport() {
    return `${this.name} has max speed - ${this.#maxSpeed}`;
  }
}

const bootsRunners = new BootsRunners('Boots Runners');

console.log(bootsRunners);
console.log(bootsRunners.positionOnStart);
console.log(bootsRunners.country);
console.log(bootsRunners.speedTransport);
console.log(bootsRunners.maxSpeedTransport);
console.info('');

class AirFairyTransport extends FairyTransport {
  #pilot = 'man';

  constructor(name) {
    super(name);
  }

  get pilotTransport() {
    return `${this.name} has pilot - ${this.#pilot}`;
  }
}

const airFairyTransport = new AirFairyTransport('Air Fairy Transport');

console.log(airFairyTransport);
console.log(airFairyTransport.positionOnStart);
console.log(airFairyTransport.country);
console.log(airFairyTransport.pilotTransport);
console.info('');

class Mortar extends AirFairyTransport {
  #pilotName = 'Baba Iaga';

  constructor(name) {
    super(name);
  }

  get pilotNameTransport() {
    return `${this.name} has pilot - ${this.#pilotName}`;
  }
}

const mortar = new Mortar('Mortar');

console.log(mortar);
console.log(mortar.positionOnStart);
console.log(mortar.country);
console.log(mortar.pilotTransport);
console.log(mortar.pilotNameTransport);
console.info('');

class AirplaneCarpets extends AirFairyTransport {
  #pilotName = 'Aladin';

  constructor(name) {
    super(name);
  }

  get pilotNameTransport() {
    return `${this.name} has pilot - ${this.#pilotName}`;
  }
}

const airplaneCarpets = new AirplaneCarpets('Airplane Carpets');

console.log(airplaneCarpets);
console.log(airplaneCarpets.positionOnStart);
console.log(airplaneCarpets.country);
console.log(airplaneCarpets.pilotTransport);
console.log(airplaneCarpets.pilotNameTransport);
console.info('');