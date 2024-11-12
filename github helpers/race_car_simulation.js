
class RaceCar {
  constructor(speed, trackLength) {
    this.speed = speed; // Speed in units per time
    this.trackLength = trackLength; // Total length of the track
    this.position = 0; // Initial position of the car
    this.fuel = 100; // Initial fuel percentage (100%)
  }

  move() {
    if (this.fuel <= 0) {
      console.log("Out of fuel! The race car has stopped.");
      return;
    }

    // Move the car forward
    this.position += this.speed;

    // Ensure the car stays on the track
    if (this.position >= this.trackLength) {
      this.position = 0; // Reset the position when it reaches the end of the track
      console.log("Lap completed!");
    }

    // Decrease fuel as the car moves
    this.fuel -= this.speed * 0.1;

    // Display the current status
    console.log(`Position: ${this.position} units, Fuel: ${this.fuel}%`);
  }

  stop() {
    console.log("The race car has stopped.");
  }

  getStatus() {
    return {
      position: this.position,
      fuel: this.fuel
    };
  }
}

const raceCar = new RaceCar(10, 100); // Speed of 10 units per move, track length of 100 units

// Simulate the race car moving
setInterval(() => {
  raceCar.move();
  if (raceCar.getStatus().fuel <= 0) {
    raceCar.stop();
    clearInterval(this);
  }
}, 1000); // Move every second
