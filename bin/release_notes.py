#!/usr/bin/python
import subprocess  # nosec
import sys
import re

LATEST_TAG = subprocess.check_output(["git", "tag", "--sort=-creatordate"]).split("\n")[0].strip()

LATEST_COMMIT_TO_EXCLUDE = subprocess.check_output(["git", "rev-parse", "master", "-n", "1", LATEST_TAG]).strip()

LATEST_COMMIT_TO_INCLUDE = "HEAD"
GIT_LOG_STRING = "git log {}..{} --pretty=oneline".format(LATEST_COMMIT_TO_EXCLUDE.decode('utf-8'), LATEST_COMMIT_TO_INCLUDE)
COMPONENTS = ["Button", "Card", "Icon", "Input", "List", "Modal", "NavBar", "PlainButton", "Popover", "Sidebar", "Table", "Typography",]

def create_commit_list():
    commit_messages_string = subprocess.check_output(GIT_LOG_STRING.split()).decode('utf-8')
    commit_messages_array = commit_messages_string.split("\n")
    commit_messages_cleaned = []
    for commit_message in commit_messages_array:
        if len(commit_message) > 0:
            commit_messages_cleaned.append(commit_message)
    return commit_messages_cleaned


def get_commits(commit_list):
    commits = []
    commit_dict = {key:[] for key in COMPONENTS + ["Misc"]}
    for commit_message in commit_list:
        if "Merge pull request" in commit_message:
            continue
        commit_message = (" ").join(commit_message.split(" ")[1:])
        component = re.findall(r'\[(.*)\]', commit_message)

        if len(component) and component[0].capitalize() in COMPONENTS:
            commit_dict[component[0].capitalize()].append(commit_message)
        else:
            commit_dict['Misc'].append(commit_message)
    return commit_dict

def create_release_notes(commit_categories):
    output = ""
    for category, commit_messages in commit_categories.items():
        if len(commit_messages):
            output += category + "\n"

        for message in commit_messages:
            output += "  -" + " " + message + "\n"
        
        if len(commit_messages):
            output +=  "\n\n"
    return output


def main():
    commit_list = create_commit_list()
    commits = get_commits(commit_list)
    release_notes = create_release_notes(commits)
    print(release_notes)


if __name__ == "__main__":
    main()
