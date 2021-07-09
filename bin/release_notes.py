#!/usr/bin/python
import subprocess  # nosec
import sys

LATEST_COMMIT_TO_EXCLUDE = subprocess.check_output(["git", "rev-parse", "master"]).strip()
LATEST_COMMIT_TO_INCLUDE = "HEAD"
GIT_LOG_STRING = "git log {}..{} --pretty=oneline".format(LATEST_COMMIT_TO_EXCLUDE.decode('utf-8'), LATEST_COMMIT_TO_INCLUDE)


def create_commit_list():
    commit_messages_string = subprocess.check_output(GIT_LOG_STRING.split()).decode('utf-8')
    print(commit_messages_string)
    commit_messages_array = commit_messages_string.split("\n")
    commit_messages_cleaned = []
    for commit_message in commit_messages_array:
        if len(commit_message) > 0:
            commit_messages_cleaned.append(commit_message)
    return commit_messages_cleaned


def get_commits(commit_list):
    commits = []
    for commit_message in commit_list:
        if "Merge pull request" in commit_message:
            continue
        commit_message = (" ").join(commit_message.split(" ")[1:])
        commits.append(commit_message)
    return commits

def create_release_notes(commit_messages):
    output = ""
    for commit_message in commit_messages:
        formatted_message = "- " + commit_message + "\n\n"
        output += formatted_message
    return output


def main():
    commit_list = create_commit_list()
    commits = get_commits(commit_list)
    release_notes = create_release_notes(commits)
    print(release_notes)


if __name__ == "__main__":
    main()
