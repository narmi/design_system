import React from 'react';
import '../../dist/style.css';
import { NdsStyles } from './decorators/decorators';

export default {
  title: 'Style/Typography',
  decorators: [NdsStyles],
};

export const Styles = () => {
  return <div className="nds-typography">
    <dl className="storybook-example-list">
      <dt>h1</dt>
      <dd><h1>This is 32px/(40)</h1></dd>

      <dt>h2</dt>
      <dd><h2>This is 28px/(35)</h2></dd>

      <dt>h3.nds-sans</dt>
      <dd><h3 className={"nds-sans"}>This is 24px/(30)</h3></dd>

      <dt>h3</dt>
      <dd><h3>This is 24px/(30)</h3></dd>

      <dt>h4.nds-sans</dt>
      <dd><h4 className={"nds-sans"}>This is 20px/(25)</h4></dd>

      <dt>h4</dt>
      <dd><h4>This is 20px/(25)</h4></dd>

      <dt>span.nds-subheader</dt>
      <dd><span className={"nds-subheader"}>This is 12px</span></dd>
    </dl>
    <dl className="storybook-example-list storybook-3col">
      <div>
        <dt>p.nds-p1</dt>
        <dd><p className={"nds-p1"}>This is 16px/(20)</p></dd>

        <dt>p.nds-p2</dt>
        <dd><p className={"nds-p2"}>This is 14px/(18)</p></dd>

        <dt>p.nds-p3</dt>
        <dd><p className={"nds-p3"}>This is 12px/(16)</p></dd>
      </div>
      <div>
        <dt>p.nds-p1.nds-light</dt>
        <dd><p className={"nds-p1 nds-light"}>This is 16px/(20)</p></dd>

        <dt>p.nds-p2.nds-light</dt>
        <dd><p className={"nds-p2 nds-light"}>This is 14px/(18)</p></dd>

        <dt>p.nds-p3.nds-light</dt>
        <dd><p className={"nds-p3 nds-light"}>This is 12px/(16)</p></dd>
      </div>
      <div>
        <dt>p.nds-p1.nds-lighter</dt>
        <dd><p className={"nds-p1 nds-lighter"}>This is 16px/(20)</p></dd>
      </div>
    </dl>
  </div>
}