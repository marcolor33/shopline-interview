export const q1 = (numbers: number[]) => {

    /*
    loop through the list, and check if it's 3 or 5 mutiple one by one
  */
  numbers.map(i => {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("bugfix");
    } else if (i % 3 === 0) {
      console.log("bug");
    } else if (i % 5 === 0) {
      console.log("fix");
    }
  })
}

export const q2 = (arr1: number[], arr2: number[]) => {
  /*
  parse input into set 
  as the question didn't state that the input number are unqiue or not,
  using set would possible reduce the size of the array
  */

  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  return [...set1].filter(x => !set2.has(x))
}

export const q3 = (arr1: number[], arr2: number[]) => {
  /*
  parse input into set 
  as the question didn't state that the input number are unqiue or not,
  using set would possible reduce the size of the array
  */
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  return [...set1].filter(x => set2.has(x))
}

export const q4 = (arr1: number[], arr2: number[]) => {
  const mergedArray = [...new Set([...arr1, ...arr2])];
  // preforming a sort here as the sample ans is sorted
  return mergedArray.sort()
}

export const q5 = (numbers: number[], target: number) => {
    /*
    loop through the numbers using reducers, starting with initial value
  */
  return numbers.reduce((prevNumber, currentNumber) => {
    return Math.abs(currentNumber - target) < Math.abs(prevNumber - target) ? currentNumber : prevNumber;
  });
}
