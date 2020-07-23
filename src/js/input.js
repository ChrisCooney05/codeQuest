export default class Input {
  constructor(player) {
    this.player = player
    this.btnPlay = document.getElementById("play");
    this.validInputs = ['player.moveRight()', 'player.moveLeft()']
    this.inputArray = []

  }

  listenForPlay() {
    this.btnPlay.addEventListener("click", () => {
      let inputString = document.getElementById("userInput").value
      this._stringToArray(inputString)
      this.player.start(this.inputArray);
      this.inputArray = []
      //document.getElementById("userInput").value = ""
    });
  }

  _stringToArray(inputString) {
    inputString.split('\n').forEach(input => {
      if (this._formatInput(input) !== "") {
        this.inputArray.push(this._formatInput(input))
      }
    })
  }

  _formatInput(input) {
    return input.trimStart().trimEnd()
  }

  _isInputValid(input) {
    return this.validInputs.includes(input)
  }
}