Two Sum is usually the very first problem people encounter on LeetCode. At first glance it seems trivial, but it's actually a great vehicle for understanding why **hash maps** are so powerful.

## The Problem

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers that add up to `target`. You may assume exactly one solution exists, and you cannot use the same element twice.

**Example:**

```
Input:  nums = [2, 7, 11, 15], target = 9
Output: [0, 1]   // nums[0] + nums[1] = 2 + 7 = 9
```

## Brute Force — O(n²)

The naive approach checks every pair:

```python
def twoSum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
```

This works, but scanning every pair gives us O(n²) time. For an array of 10,000 elements that's up to 100,000,000 operations — noticeably slow.

## Hash Map — O(n)

The key insight: as you scan through the array, for each element `x` you just need to know whether `target - x` has already been seen. A hash map gives you that lookup in O(1).

```python
def twoSum(nums, target):
    seen = {}  # value -> index
    for i, x in enumerate(nums):
        complement = target - x
        if complement in seen:
            return [seen[complement], i]
        seen[x] = i
```

One pass. O(n) time, O(n) space.

## Why This Matters

> "The difference between O(n) and O(n²) is the difference between answering in milliseconds and answering in minutes."

Understanding this pattern — **trade space for time with a hash map** — unlocks a huge class of array problems on LeetCode. Two Sum is just the beginning.

## Key Takeaways

- The brute force is correct but too slow for large inputs
- Hash maps let you do O(1) membership checks
- This "seen" pattern shows up constantly: 3Sum, Subarray Sum Equals K, Group Anagrams, and more

Happy grinding!
