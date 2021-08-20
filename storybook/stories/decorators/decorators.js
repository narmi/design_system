import React from 'react';

export const NdsStyles = (Story) => (
<div style={{ margin: '3em' }}>
        <style>{`
          :root {
            --nds-primary-color: red;
            --nds-font-family: 'Mulish';
            };
          `}
        </style>
        <Story/>
      </div>
  );