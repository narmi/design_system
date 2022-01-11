import React from "react";
import LoadingSkeleton from ".";

const Template = (args) => <LoadingSkeleton {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  isLoading: false,
  title: true,
  content: "paragraph",
  children: (
    <div className="nds-typography" style={{ padding: "20px", outline: "1px dashed hotpink" }}>
      <h2>This area has a LoadingSkeleton wrapper</h2>
      <p>
        Toggle the <code>isLoading</code> prop below to see the mask appear.
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
  title: "Components/LoadingSkeleton",
  component: LoadingSkeleton,
  argTypes: {
    children: { control: false },
  },
};