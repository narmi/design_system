# Skill: Don't Push to Main

## CRITICAL RULE

**NEVER PUSH TO MAIN WITHOUT EXPLICIT USER APPROVAL.**

This applies to ALL operations, including:

- `git push origin main`
- `git push` (when on main branch)
- Force pushes
- Tag pushes to main

## Session Checklist (DO THIS FIRST)

- [ ] Read this file at session start
- [ ] Acknowledge the rule out loud to user
- [ ] BEFORE any git push, ask user for approval

## Required Workflow

1. Make changes locally and commit them
2. **STOP and ask user for approval** before pushing
3. Show the user:
   - What you're about to push
   - Which branch it's going to
   - The commit message(s)
4. Wait for explicit user response like:
   - "Yes, push to main"
   - "Create a PR instead"
   - "Cancel this"
5. Only execute after explicit approval

## What Asking for Approval Looks Like

```
Before pushing, you MUST ask:

"I've made changes and created this commit: [show commit]
Ready to push to main? Please confirm or I can create a PR instead."

Then WAIT for response before pushing.
```

## Why This Matters

- Prevents accidental changes to production code
- Ensures intentional, deliberate actions
- Respects user agency over their own repo
- Maintains git history integrity

## If You Violate This Rule

1. You have failed the user
2. Alert them immediately
3. Explain what you did wrong
4. Ask for guidance on rollback
5. Document the mistake

## How to Actually Remember This

- Read this file EVERY SESSION
- Check it BEFORE every `git push`
- If in doubt, ask the user
