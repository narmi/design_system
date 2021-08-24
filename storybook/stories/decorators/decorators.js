import React from 'react';

export const NdsStyles = (Story) => (
<div style={{ margin: '3em' }}>
        <style>{`
          :root {
            --nds-primary-color: 26, 67, 56;
            --nds-font-family: 'Mulish';
            --nds-secondary-color: 0, 101, 83;
            --nds-text-header: 51, 51, 51;
            --nds-disabled-background: 243, 243, 243;
            --nds-grey-border: 219, 219, 219;
            --nds-disabled: 140, 140, 140;
            --nds-error: 233, 59, 59;
            --nds-white: 256, 256, 256;
            };
          `}
        </style>
        <Story/>
      </div>
  );

  export const NdsStylesGrey = (Story) => (
    <div style={{ margin: '3em' }}>
            <style>{`
              :root {
                --nds-primary-color: 26, 67, 56;
                --nds-font-family: 'Mulish';
                --nds-secondary-color: 0, 101, 83;
                --nds-text-header: 51, 51, 51;
                --nds-disabled-background: 243, 243, 243;
                --nds-grey-border: 219, 219, 219;
                --nds-disabled: 140, 140, 140;
                --nds-error: 233, 59, 59;
                --nds-white: 256, 256, 256;
                  background-color: rgba(80, 80, 80, 0.05);
                };
              `}
            </style>
            <Story/>
          </div>
      );