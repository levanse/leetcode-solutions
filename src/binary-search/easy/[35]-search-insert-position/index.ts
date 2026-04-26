/* ---------------------------------------------------------------------------------------------------

https://leetcode.com/problems/search-insert-position/description/?envType=problem-list-v2&envId=binary-search

Given a sorted array of distinct integers and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

| Input: nums = [1,3,5,6], target = 5
| Output: 2

Example 2:

| Input: nums = [1,3,5,6], target = 2
| Output: 1

Example 3:

| Input: nums = [1,3,5,6], target = 7
| Output: 4

Constraints:

- 1 <= nums.length <= 104
- -104 <= nums[i] <= 104
- nums contains distinct values sorted in ascending order.
- -104 <= target <= 104

--------------------------------------------------------------------------------------------------- */

/* --------------------------------- solution -------------------------------- */

function searchInsert(nums: number[], target: number): number {
  let first = 0;
  let last = nums.length - 1;

  console.log('FIRST', first);
  console.log('LAST', last);

  while (first <= last) {
    const middle = Math.floor((first + last) / 2);
    console.log('middle', middle);

    if (target === nums[middle]) {
      return middle;
    }

    if (target < nums[middle]) {
      last = middle - 1;

      console.log('last', last);
    }

    if (target > nums[middle]) {
      first = middle + 1;

      console.log('first', first);
    }
  }

  return first;
}

export { searchInsert };
