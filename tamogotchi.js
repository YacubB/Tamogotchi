const tamogotchi = {
  name: "Simpson",
  meal: 1,
  energy: 2,
  mood: 4,
  getStatus() {
    const hungry = this.meal < 3 ? "Я голоден" : "Я не голоден";
    const sleep = this.energy < 3 ? "Я хочу спать" : "Я не хочу спать";
    const boring = this.mood < 3 ? "Мне скучно" : "Мне весело";
    const died =
      this.meal <= 0 || this.energy <= 0 || this.mood <= 0
        ? "умер :("
        : "Живой :)";
    console.log(
      `Имя:${died}${this.name}, Еда: ${hungry} (${this.meal}), Энергия:${sleep} (${this.energy}), Настроение:${boring} (${this.mood})`
    );
  },
  setName(name) {
    this.name = name;
  },
  getEat() {
    if (this.meal < 5) {
      this.meal++;
    }
    this.mood--;
  },
  getSleep() {
    if (this.energy < 5) {
      this.energy++;
    }
    this.meal--;
  },
  getEnergy() {
    if (this.mood < 5) {
      this.mood++;
    }
    this.energy--;
  },
};
