// script.js

// Sample workout data (you can replace this with actual data)
const workouts = [
    { type: 'Running', duration: 30 },
    { type: 'Weightlifting', duration: 45 },
    // Add more workout entries as needed
  ];
  
  // Function to log a workout
  function logWorkout(type, duration) {
    workouts.push({ type, duration });
    updateProgress();
  }
  
  // Function to calculate and update progress
  function updateProgress() {
    // Calculate total workout duration
    const totalDuration = workouts.reduce((total, workout) => total + workout.duration, 0);
  
    // Display progress (you can update the DOM as needed)
    console.log(`Total workout duration: ${totalDuration} minutes`);
  }
  
  // Example usage: Log a new workout
  logWorkout('Cycling', 20);
  