import { q1, q2, q3, q4, q5 } from './ans'

function main() {
  // generate a list from 1 - 100
  const q1Numbers = [...Array(100).keys()].map(x => x + 1)

  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = [2, 3, 1, 0, 5]

  const q5Numbers = [30, 1, 5, 16, 19, 21, 2, 55]
  const q5Target = 17

  q1(q1Numbers)

  const ans2 = q2(arr1, arr2)
  console.log('ans2', ans2)


  const ans3 = q3(arr1, arr2)
  console.log('ans3', ans3)


  const ans4 = q4(arr1, arr2)
  console.log('ans4', ans4)


  const ans5 = q5(q5Numbers, q5Target)
  console.log('ans5', ans5)


}


main()