import React from "react";
import {
  fontColor as fontColorHelpers,
  fontSize as fontSizeHelpers,
  fontWeight as fontWeightHelpers,
  fontFamily as fontFamilyHelpers,
  whiteSpace,
} from "dist/docs/classManifest";
import ClassExample from "helpers/ClassExample";

export default {
  title: "Style/Helper Classes/Font",
};

export const FontColor = {
  render: () => (
    <ClassExample
      signature="fontColor--<color>"
      classCategory={fontColorHelpers}
      hideBorder
    >
      <div>The quick brown fox jumps over the lazy dog</div>
    </ClassExample>
  ),

  name: "Font Color",
};

export const FontSize = {
  render: () => (
    <ClassExample
      signature="fontSize--<size>"
      classCategory={fontSizeHelpers}
      hideBorder
    >
      <div>The quick brown fox jumps over the lazy dog</div>
    </ClassExample>
  ),

  name: "Font Size",
};

export const FontWeight = {
  render: () => (
    <ClassExample
      signature="fontWeight--<weight>"
      classCategory={fontWeightHelpers}
      hideBorder
    >
      <div>The quick brown fox jumps over the lazy dog</div>
    </ClassExample>
  ),

  name: "Font Weight",
};

export const FontFamily = {
  render: () => (
    <ClassExample
      signature="fontFamily--<family>"
      classCategory={fontFamilyHelpers}
      hideBorder
    >
      <div>The quick brown fox jumps over the lazy dog</div>
    </ClassExample>
  ),

  name: "Font Family",
};

export const WhitespaceControl = {
  render: () => (
    <ClassExample
      signature="whiteSpace--<'singleLine'|'truncate'>(--multiline--<'2'|'3'|'4'>)"
      classCategory={whiteSpace}
    >
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
        ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
        earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus
        asperiores repellat
      </p>
    </ClassExample>
  ),

  name: "Whitespace Control",
};
