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
  minDelay: number = 3000,
  maxDelay: number = 6000,
  errorProbability: number = 0.2
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
