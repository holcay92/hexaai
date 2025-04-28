export const createTimeout = (
  callback: () => void,
  delay: number
): (() => void) => {
  const timer = setTimeout(callback, delay);
  return () => clearTimeout(timer);
};
export const generateRandomDelay = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const initiateGenerationProcess = (
  onSuccess: () => void,
  onError: () => void,
  minDelay: number = 30000,
  maxDelay: number = 60000,
  errorProbability: number = 0.1
): (() => void) => {
  const delay = generateRandomDelay(minDelay, maxDelay);
  const isError = Math.random() < errorProbability;

  const timer = setTimeout(() => {
    if (isError) {
      onError();
    } else {
      onSuccess();
    }
  }, delay);

  return () => clearTimeout(timer);
};
export const getImageSource = (imageName: string) => {
  switch (imageName) {
    case "monogram":
      return require("../assets/images/monogram.png");
    case "abstract":
      return require("../assets/images/abstract.png");
    case "mascot":
      return require("../assets/images/mascot.png");
    default:
      return require("../assets/images/slash.png");
  }
};
