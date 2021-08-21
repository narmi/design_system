import React from 'react';

export const NdsStyles = (Story) => (
<div style={{ margin: '3em' }}>
        <style>{`
          :root {
            --nds-primary-color: red;
            --nds-font-family: 'Mulish';
            --nds-primary-color: 17, 59, 94;
            --nds-secondary-color: 223, 52, 22;
            --nds-text-header: 51, 51, 51;
            --nds-disabled-background: 243, 243, 243;
            --nds-disabled: 140, 140, 140;
            --nds-error: 233, 59, 59;
            };
          `}
        </style>
        <Story/>
      </div>
  );