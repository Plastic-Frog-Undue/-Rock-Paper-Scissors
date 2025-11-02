class Game {
  humanScore = 0;
  computerScore = 0;

  constructor() {
    this.resultDiv = document.getElementById("results");

    // set up button clicks
    document.querySelector(".rock").addEventListener("click", () => this.playRound("rock"));
    document.querySelector(".paper").addEventListener("click", () => this.playRound("paper"));
    document.querySelector(".scissors").addEventListener("click", () => this.playRound("scissors"));
  }

  getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) return "rock";
    else if (randomNum === 1) return "paper";
    else return "scissors";
  }

  updateResults(message) {
    this.resultDiv.innerHTML = `
      <p>${message}</p>
      <p>Score - You: ${this.humanScore} | Computer: ${this.computerScore}</p>
    `;
  }

  playRound(humanChoice) {
    if (this.humanScore >= 5 || this.computerScore >= 5) return;

    const computerChoice = this.getComputerChoice();
    let resultMessage = "";

    if (humanChoice === computerChoice) {
      resultMessage = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      this.humanScore++;
      resultMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
      this.computerScore++;
      resultMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    this.updateResults(resultMessage);

    if (this.humanScore === 5 || this.computerScore === 5) {
      const winner =
        this.humanScore === 5 ? "🎉 You won the game!" : "💻 Computer won the game!";
      const final = document.createElement("p");
      final.textContent = winner;
      this.resultDiv.appendChild(final);
    }
  }
}

// Create a game instance
const game = new Game();

