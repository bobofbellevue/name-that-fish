import { Images } from "../../assets/Images";

export const FishData = {
  fishes: [
    {
      name: "trout",
      url: Images.trout,
      answer: 0, // 0=not answered, -1=incorrect, +1=correct
    },
    {
      name: "salmon",
      url: Images.salmon,
      answer: 0,
    },
    {
      name: "tuna",
      url: Images.tuna,
      answer: 0,
    },
    {
      name: "shark",
      url: Images.shark,
      answer: 0,
    },
  ],
  getNextFish() {
    return this.fishes.find((fish) => fish.answer === 0);
  },
  getCorrectFishCount() {
    return this.fishes.reduce(
      (count, fish) => (count += fish.answer === 1 ? 1 : 0),
      0
    );
  },
  getIncorrectFishCount() {
    return this.fishes.reduce(
      (count, fish) => (count += fish.answer === -1 ? 1 : 0),
      0
    );
  },
  getUnansweredFish() {
    return this.fishes.filter((fish) => fish.answer === 0);
  },
  makeFishGuess(guess) {
    const fish = this.getNextFish();
    fish.answer = fish.name.toUpperCase() === guess.toUpperCase() ? 1 : -1;
    return fish.answer;
  },
};
