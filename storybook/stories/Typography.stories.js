import React from 'react';
import { Button } from 'design_system';
import '../../dist/style.css';
import { NdsStyles } from './decorators/decorators';

export default {
  title: 'Example/Typography',
  decorators: [NdsStyles],
};

export const NdsP = () => {
  return <div className="nds-typography">
            <p>This is a p tag</p>
          </div>
}