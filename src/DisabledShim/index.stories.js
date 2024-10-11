/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React from "react";
import DisabledShim from "./";
import ContentCard from "../ContentCard";

export const Overview = (args) => (
  <ContentCard kind="bordered">
    <DisabledShim {...args} />
  </ContentCard>
);
Overview.args = {
  isDisabled: false,
  children: (
    <>
      <h2>This card contains a DisabledShim</h2>
      <p>
        Toggle the <code>isDisabled</code> prop below to see the shim appear.
      </p>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt
      </p>
    </>
  ),
};

export default {
  title: "Components/DisabledShim",
  component: DisabledShim,
};
