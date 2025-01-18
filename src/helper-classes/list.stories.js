import React from "react";
import { list } from "dist/docs/classManifest";
import ClassExample from "helpers/ClassExample";

export default {
  title: "Style/Helper Classes/Lists",
};

export const ListReset = {
  render: () => (
    <ClassExample signature="list--reset" classCategory={list} hideBorder>
      <ul>
        <li>UL item one</li>
        <li>UL item two</li>
        <li>UL item three</li>
      </ul>
    </ClassExample>
  ),

  name: "List Reset",
};
