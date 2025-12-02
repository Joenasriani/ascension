// Offline Reflection Service
// Providing atmospheric, philosophical feedback using a curated library of wisdom.

const REFLECTIONS = [
  "The path reveals itself only to those who walk it.",
  "What seems like a wall is merely a step viewed from the wrong angle.",
  "To rise, one must sometimes descend.",
  "Perspective is the architect of reality.",
  "The bridge exists because you believe it does.",
  "Geometry is the language of silence.",
  "Every ending is a new beginning, rotated 90 degrees.",
  "The mind bends, and the world follows.",
  "Space is not empty; it is full of possibility.",
  "A closed door is simply a wall waiting to turn.",
  "Gravity is a suggestion, not a law.",
  "We do not see things as they are, we see them as we are.",
  "The obstacle is the path.",
  "In the loop of time, every step forward is a return.",
  "Look for the spaces between.",
  "Ascension is not a direction, but a state of mind.",
  "The shadow proves the light.",
  "Turn the world, and you turn yourself.",
  "There is always another way.",
  "Stillness moves mountains.",
  "The architecture of the mind mirrors the architecture of the world.",
  "Walk without feet, fly without wings, think without mind.",
  "The spiral is a circle that learned to grow.",
  "When the path ends, look up.",
  "Connections are invisible until you make them.",
  "Silence speaks what words cannot.",
  "You are the mover and the moved.",
  "Structure is an illusion of the observer."
];

export const generateReflection = async (levelId: number, theme: string): Promise<string> => {
  // Simulate atmospheric delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const randomIndex = Math.floor(Math.random() * REFLECTIONS.length);
  
  return REFLECTIONS[randomIndex];
};