# Basic Fundamental — Live Coding Exercises

This folder contains three short coding exercises intended for live coding or take-home fundamental assessments. Each problem is placed in a separate file (`1.readme.md`, `2.readme.md`, `3.readme.md`) with its own description, examples, and hints.

Files

<!-- Polished README for the `basic-fundamental` exercise set -->

# Basic Fundamental — Live Coding Exercises

A compact set of three short programming problems used for live-coding or take-home assessments. Each problem has its own file with a precise description, examples, and hints located in the `basic-fundamental` folder.

Files in `basic-fundamental/`:

- `1.readme.md` — Problem 1: Snail Sort (spiral traversal of a square matrix)
- `2.readme.md` — Problem 2: Stop gninnipS My sdroW! (reverse words with length >= 5)
- `3.readme.md` — Problem 3: Sum of Digits / Digital Root

---

## Table of contents

1. [Quick start](#quick-start)
2. [Problem summaries](#problem-summaries)
3. [How candidates should approach the tasks](#how-candidates-should-approach-the-tasks)
4. [Suggested grading rubric](#suggested-grading-rubric)
5. [Submission & interviewer notes](#submission--interviewer-notes)

---

## Quick start

For candidates:

- Read the specific problem file under `basic-fundamental/` and confirm input/output formats and constraints.
- Implement a solution (function or small program) and include a short README snippet showing how to run it.

Example commands (document the exact commands you used):

```bash
# Python
python3 solution.py

# Node.js
node index.js
```

If your solution reads from STDIN, mention that and provide sample input files.

---

## Problem summaries

- **Problem 1 — Snail Sort**
	- Spiral traversal of an n x n matrix. Return elements from outer layer to center in clockwise order.

- **Problem 2 — Stop gninnipS My sdroW!**
	- Given a string of words, reverse every word with length >= 5 while preserving word order and spacing.

- **Problem 3 — Sum of Digits / Digital Root**
	- Repeatedly sum the digits of a non-negative integer until a single digit remains; return that digit.

Refer to each `basic-fundamental/*.readme.md` for full details, examples and hints.

---

## How candidates should approach the tasks

1. **Clarify** input/output expectations and constraints.
2. **Prototype** a correct, readable solution first. Add comments for non-obvious logic.
3. **Test** edge cases: empty inputs, small/large values, and typical corner cases.
4. **State** complexity (time/space) and possible optimizations.
5. **Document** how to run the solution and include sample runs.

Time guidance:

- Live interview: ~30–45 minutes per problem.
- Take-home: adjust time according to hiring level and problem difficulty.

---

## Suggested grading rubric

- **Correctness (40%)** — Produces correct results for examples and main cases.
- **Edge-case handling (20%)** — Handles empty/invalid/boundary inputs sensibly.
- **Code clarity (15%)** — Readable, modular, and sufficiently commented code.
- **Efficiency (15%)** — Reasonable algorithm choice for the stated constraints.
- **Documentation (10%)** — Clear run instructions and short approach explanation.

Adapt weights based on your hiring bar and time limits.

---

## Submission & interviewer notes

- Preferred submission: ZIP file or pull request with source, tests and a README snippet describing how to run.
- Interviewers: run the candidate's code using their documented commands and ask them to explain trade-offs and optimizations.
- Consider preparing a few hidden tests to spot robustness issues.

---

If you want, I can next:

- Add starter solution skeletons (Python/Node) for each problem.
- Add a small test harness (`tests.py` / `tests.js`) and `run.sh`.
- Provide a detailed per-problem grading rubric.

Tell me which option and which language you prefer and I will add it.