# Skill: Don't Push to Main

## Rule

NEVER push directly to the `main` branch. This is a protected branch.

## Required Workflow

1. Make changes locally and commit them
2. **Always ask for explicit approval** before pushing
3. Wait for user to say "push to main" or "create a PR"
4. If user says push, use: `git push origin <branch>` (for non-main)
5. For main changes, ask user if they prefer:
   - PR workflow (safer, recommended)
   - Direct push after explicit approval

## Why

- Prevents accidental changes to production code
- Ensures code review via PR process
- Maintains git history integrity

## Violation Recovery

If accidentally pushed to main:

1. Alert user immediately
2. Ask for guidance on rollback if needed
3. Document the incident for learning
