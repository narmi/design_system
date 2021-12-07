import React from "react";
import LoadingShim from "./";

const Template = (args) => <LoadingShim {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  isLoading: false,
  children: (
    <div className="nds-typography" style={{ outline: "1px dashed hotpink" }}>
      <h2>This area has a LoadingShim wrapper</h2>
      <p>
        Toggle the <code>isLoading</code> prop below to see the shim appear.
      </p>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt
      </p>
    </div>
  ),
};

export default {
  title: "Components/LoadingShim",
  component: LoadingShim,
  argTypes: {
    children: { control: false },
  },
};
