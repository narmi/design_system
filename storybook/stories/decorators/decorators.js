import React from 'react';

export const NdsStyles = (Story) => (
  <div style={{ margin: '3em' }}>
    <style>{`
      :root {
        --nds-background: 256, 256, 256;
        --nds-disabled-background: 243, 243, 243;
        --nds-disabled: 140, 140, 140;
        --nds-grey-scrim-light: 140, 140, 140;
        --nds-dropshadow-dark: 140, 140, 140;
        --nds-text-header: 51, 51, 51;
        --nds-text: 76, 76, 76;
        --nds-white: 255, 255, 255;
        };
      `}
    </style>
    <Story/>
  </div>
);