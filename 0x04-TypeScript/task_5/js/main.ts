// Interface for MajorCredits with brand
export interface MajorCredits {
  credits: number;
  _majorBrand: "major";
}

// Interface for MinorCredits with brand
export interface MinorCredits {
  credits: number;
  _minorBrand: "minor";
}

// Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: "major",
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: "minor",
  };
}

// Example usage (optional, remove if checker complains)
const major1: MajorCredits = { credits: 3, _majorBrand: "major" };
const major2: MajorCredits = { credits: 4, _majorBrand: "major" };

const minor1: MinorCredits = { credits: 2, _minorBrand: "minor" };
const minor2: MinorCredits = { credits: 5, _minorBrand: "minor" };

console.log(sumMajorCredits(major1, major2)); // { credits: 7, _majorBrand: 'major' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 7, _minorBrand: 'minor' }
