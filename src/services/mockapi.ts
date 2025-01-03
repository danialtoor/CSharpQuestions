export const fetchProblems = async () => {
    return [
      {
        id: "1",
        title: "Chapter 1.1",
        difficulty: "Easy",
        description: 'Print the words "Hello World" to the screen.',
      },
      {
        id: "2",
        title: "Chapter 1.2",
        difficulty: "Easy",
        description: "Write a function to add two numbers and return the result.",
      },
      {
        id: "3",
        title: "Chapter 1.3",
        difficulty: "Medium",
        description: `
          Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.

          Example:
          Input: nums = [2, 7, 11, 15], target = 9  
          Output: [0, 1]  
          Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
  
          Constraints:
          1. Each input would have exactly one solution, and you may not use the same element twice.
          2. You can return the answer in any order.
        `,
      },
    ];
  };

export const fetchProblemDetails = async (id: string) => {
  const problems = await fetchProblems();
  return problems.find((problem) => problem.id === id) || null;
};
