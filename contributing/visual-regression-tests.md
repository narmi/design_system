# Resolving Failing Chromatic Visual Regression Tests

The workflow that runs visual snapshot testing is **"Chromatic PR Checks"** / `run_chromatic`. All pull requests will block merging until this workflow passes.

## When Chromatic checks are failing

### 1. Open the `run_chromatic` check

In your PR, click on the failing `run_chromatic` check under "Chromatic PR Checks":

![run_chromatic check](https://github.com/user-attachments/assets/3c5cf0f9-8b48-44e2-ad0e-8eb42f0bed47)

### 2. Find the "Review the changes" link

In the action logs, find and click the **"Review the changes"** link (opens in a new tab):

![Review the changes link](https://github.com/user-attachments/assets/ab950693-b7fd-47e9-99e0-ec4f994bb2ce)

### 3. Authenticate

Log in using Narmi engineering credentials (1Password).

### 4. Review the Chromatic build

The link will bring you to the Chromatic build page, with a list of components where a visual diff was detected. Click the **"Verify Change(s)"** button:

![Chromatic build page](https://github.com/user-attachments/assets/d82698e8-d71d-4ba8-9db7-eda5d5e70b4a)

### 5. Walk through each snapshot diff

You'll be taken to the diff interface. Walk through each snapshot diff to **approve** or **deny** the change:

![Diff interface](https://github.com/user-attachments/assets/15cf9616-f2ed-40c9-83c2-1b516b549212)

### 6. Check the build status

Once you've resolved all pending snapshot diffs, you'll be taken back to the build page:

![Build status](https://github.com/user-attachments/assets/2661625a-d0be-4907-9bb5-d127681afd75)

- **If your build status is green/approved:**
  Re-run the `run_chromatic` job. The Chromatic PR checks will pass.

  ![Re-run job](https://github.com/user-attachments/assets/cc0fe447-fa67-4a95-8ddb-599391664255)

- **If your build status is red/denied:**
  No need to re-run the job, as it will fail. Use the story name of the failing snapshot to find and fix the bug in your code. Once fixed, push again and repeat the steps above until the build status is green/approved.

## Passing and failing conditions

**Passing conditions:**

- No visual changes detected
- Visual changes detected, but approved (indicates an intentional change)
- Visual changes resolved by a code change to match baseline snapshots
- New stories added in the PR are approved in the Chromatic build

**Failing conditions:**

- Chromatic build has unreviewed diffs
- Chromatic build has denied changes
- New stories haven't been explicitly approved in the Chromatic build

## Baselines

Baselines are managed by Chromatic, using the latest _approved_ build, regardless of the PR that triggered it. Once a build is approved, it immediately becomes the new baseline.

To keep `main` as the branch that should be tracked as the baseline in Chromatic, we run a workflow on merges to `main` that creates an auto-accepted build, designating it as the new baseline.

## Local snapshots

When running Storybook locally, you'll see a floating button on the bottom left of the viewport labelled "Run Tests". If you're authenticated with Chromatic, this will compare your current stories being served on `localhost:6006` against baseline snapshots in Chromatic. Results will appear in the addons panel.
