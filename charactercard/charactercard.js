// ----- Character class -----
class Character {
  constructor({ name, clazz, level, health, imageUrl }) {
    this.name = name;
    this.clazz = clazz; // "class" is a reserved keyword in JS syntax contexts
    this.level = Number(level);
    this.health = Number(health);
    this.imageUrl = "./Snortleblat.webp" 

    this._hasAnnouncedDeath = false; // avoid repeat alerts
  }

  get isDead() {
    return this.health <= 0;
  }

  attacked() {
    if (this.isDead) return;

    this.health = Math.max(0, this.health - 20);
    render();

    if (this.isDead && !this._hasAnnouncedDeath) {
      this._hasAnnouncedDeath = true;
      announce(`${this.name} has died.`);
      // Chrome/Browser modal-style notice like in the demo:
      alert("You died.");
      disableActions(true);
    }
  }

  levelUp() {
    if (this.isDead) return;

    this.level += 1;
    render();
    announce(`${this.name} leveled up to ${this.level}.`);
  }
}

// ----- Instantiate your character (example values from the demo) -----
const character = new Character({
  name: "Snortleblat",
  clazz: "Swamp Beast Diplomat",
  level: 5,
  health: 80,
  imageUrl:
    "https://images.unsplash.com/photo-1618172193763-c511deb635ef?q=80&w=1200&auto=format&fit=crop" // use your own image path if needed
});

// ----- DOM references -----
const $img = document.getElementById("character-image");
const $name = document.getElementById("character-name");
const $class = document.getElementById("character-class");
const $level = document.getElementById("character-level");
const $health = document.getElementById("character-health");
const $attack = document.getElementById("attackBtn");
const $levelUp = document.getElementById("levelUpBtn");
const $live = document.getElementById("live-region");

// ----- Helpers -----
function render() {
  $img.src = character.imageUrl;
  $name.textContent = character.name;
  $class.textContent = character.clazz;
  $level.textContent = character.level;
  $health.textContent = character.health;

  // Optional: reflect "dead" state on the card via a CSS class if you have styles
  const $card = document.getElementById("character-card");
  $card.classList.toggle("is-dead", character.isDead);
}

function disableActions(disabled) {
  $attack.disabled = disabled;
  $levelUp.disabled = disabled;
}

function announce(msg) {
  // Update live region for assistive tech
  $live.textContent = msg;
}

// ----- Wire up buttons -----
$attack.addEventListener("click", () => character.attacked());
$levelUp.addEventListener("click", () => character.levelUp());

// Initial paint
render();
disableActions(false);
