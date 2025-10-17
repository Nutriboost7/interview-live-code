# Basic Fundamental — Live Coding Exercises

This folder contains three short coding exercises intended for live coding or take-home fundamental assessments. Each problem is placed in a separate file (`1.readme.md`, `2.readme.md`, `3.readme.md`) with its own description, examples, and hints.

Files

- `1.readme.md` — Problem 1: Snail Sort (spiral traversal of a square matrix)
- `2.readme.md` — Problem 2: Stop gninnipS My sdroW! (reverse words with length >= 5)
- `3.readme.md` — Problem 3: Sum of Digits / Digital Root

Goal

Evaluate candidates on: reading and understanding requirements, designing a correct solution, handling edge cases, code clarity, and describing complexity/trade-offs.

How to approach the exercises (for candidates)

1) Time budget
- Suggestion: 30–45 minutes per problem in a live interview. For take-home, allow more time as appropriate.

2) Read carefully
- Open the specific problem file (`1.readme.md`, `2.readme.md`, or `3.readme.md`) and confirm input/output formats and constraints before coding.

3) Coding quality
- Correctness: code must meet the problem requirements and pass given examples.
- Clarity: meaningful names, short comments for non-obvious logic, and small helper functions.
- Edge cases: handle empty inputs, small/large inputs, and invalid formats if the problem allows.
- Efficiency: mention time and space complexity if relevant.

4) Testing
- Include 2–4 example runs (happy path + edge cases). If possible add a tiny test file (e.g. `tests.py` or `tests.js`).

5) Explanation
- Add a short explanation (3–6 lines) of your approach and why you chose it. Note trade-offs and any remaining limitations.

Submission

- Submit a ZIP of your solution or open a pull request. Include the source code, any test files, and a short README explaining how to run the code (example commands).

Example run commands (candidate should document their actual commands):

```bash
# Python example
python3 solution.py < input.txt

# Node.js example
node index.js < input.txt
```

Grading rubric (suggested)

- 40% Correctness: passes examples and main test cases
- 20% Edge case handling: empty/invalid inputs and boundary conditions
- 15% Code clarity: naming, structure, and comments
- 15% Efficiency: reasonable algorithm for stated constraints
- 10% Documentation: run instructions and short explanation

Notes for interviewers

- Run the candidate's code using their documented commands and the provided examples.
- Ask the candidate to explain time/space complexity and where they would optimize further.
- Optionally run additional tests not shown to the candidate to check robustness.

Want more?

- I can add runnable skeletons and automated tests (Python/Node), or a stricter rubric. Tell me which language you prefer and which extra artifacts you want me to create next.