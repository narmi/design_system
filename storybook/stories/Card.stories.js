import React from 'react';
import { Card } from 'design_system';
import '../../dist/style.css';
import { NdsStyles } from './decorators/decorators';

export default {
  title: 'Example/Card',
  decorators: [NdsStyles],
};

const TransferCard = () => {
return(<Card className="nds-typography" title={"Bill Pay"} style={{"margin-right":"20px"}}>
<p>This is a p tag</p>
</Card>);
}

export const NarmiCard = () => {
  return <Card className="nds-typography" title={"Bill Pay"}>
            <p>This is a p tag</p>
          </Card>
}

export const ThreeCards = () => {
  return <div style={{"display": "flex"}}><TransferCard/><TransferCard/><TransferCard/></div>
}

