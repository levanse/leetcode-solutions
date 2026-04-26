/* --------------------------------- Time: 3936ms Passed: 12 -------------------------------- */

export function sumPairs(ints: number[], s: number): [number, number] | void {
  const numbs = new Map<number, number>();
  for (let i = 0; i < ints.length; i++) {
    const neededNumber = s - ints[i];
    if (numbs.has(neededNumber)) {
      return [neededNumber, ints[i]];
    }

    numbs.set(ints[i], i);
  }

  return undefined;
}

/* --------------------------------- solution - 1 -------------------------------- */

export function sumPairs1(ints: number[], s: number): [number, number] | void {
  const seen = new Set();
  for (const n of ints) {
    if (seen.has(s - n)) {
      return [s - n, n];
    }

    seen.add(n);
  }
}
