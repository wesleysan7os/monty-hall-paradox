export default class DoorsModel {
  #number: number;
  #hasReward: boolean;
  #isSelected: boolean;
  #isOpen: boolean;

  constructor(
    number: number,
    hasReward = false,
    isSelected = false,
    isOpen = false
  ) {
    this.#number = number;
    this.#hasReward = hasReward;
    this.#isSelected = isSelected;
    this.#isOpen = isOpen;
  }

  get number() {
    return this.#number;
  }

  get hasReward() {
    return this.#hasReward;
  }

  get isSelected() {
    return this.#isSelected;
  }

  get isOpen() {
    return this.#isOpen;
  }

  unselect() {
    const isSelected = false;
    return new DoorsModel(this.number, this.hasReward, isSelected, this.isOpen);
  }

  toggleSelection() {
    const isSelected = !this.isSelected;
    return new DoorsModel(this.number, this.hasReward, isSelected, this.isOpen);
  }

  open() {
    const isOpen = true;
    return new DoorsModel(
      this.number,
      this.#hasReward,
      this.isSelected,
      isOpen
    );
  }
}
