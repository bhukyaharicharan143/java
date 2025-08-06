const data = [10, 20, 20, 30, 40, 50, 50, 50, 60];

// Mean
const mean = data.reduce((sum, val) => sum + val, 0) / data.length;

// Median
const sorted = [...data].sort((a, b) => a - b);
let median;
const mid = Math.floor(sorted.length / 2);
if (sorted.length % 2 === 0) {
  median = (sorted[mid - 1] + sorted[mid]) / 2;
} else {
  median = sorted[mid];
}

// Mode
const frequency = {};
let maxFreq = 0;
let mode = [];

for (const num of data) {
  frequency[num] = (frequency[num] || 0) + 1;
  if (frequency[num] > maxFreq) {
    maxFreq = frequency[num];
  }
}

for (const num in frequency) {
  if (frequency[num] === maxFreq) {
    mode.push(Number(num));
  }
}

// Output
console.log("Data:", data);
console.log("Mean:", mean);
console.log("Median:", median);
console.log("Mode:", mode.join(", ") + ` (Count: ${maxFreq})`);
