import React from "react";
import { Popover } from "design_system";
import { NdsStyles } from './decorators/decorators';

export default {
  title: 'Components/Popover',
  decorators: [NdsStyles],
};

export const BasicPopover = () => {
    const listRender = (listProps) => {
        console.log("listProps", listProps);
        return (
            <>
            <style>
                {`
                  .nds-list-pitem {
                    padding: 10px 20px 10px 20px;
                  }
                  .nds-list-pitem:hover {
                      background: rgba(42,68,148,0.05);
                  }
                `}
            </style>
            <div className={"nds-typography"}>
                { listProps.map((child, i) => <div key={i} className="nds-list-pitem">{child}</div>) }
            </div>
            </>
        )
    }
    return(
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <Popover label={"Popover"} listRender={listRender}>
                <span>Transfer</span>
                <span>Log out</span>
            </Popover>
            
            <Popover label={"Popover"} hoverable listRender={listRender}>
                <span>Transfer</span>
                <span>Log out</span>
            </Popover>
            <Popover label={"Popover"} hoverable>
                <span>Transfer</span>
                <span>Log out</span>
            </Popover>
      </div>
    );
}