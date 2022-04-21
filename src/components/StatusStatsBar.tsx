import * as React from 'react';
import {Card} from "./Card";

type Props = {
    overdraftValue: string,
    happyValue: string,
};

// what is no overdraft, don't show

export const StatusStatsBar = (props: Props) => {
    return (
        <>
            <div className="stats shadow">
                <Card title="Overdraft"
                      value={props.overdraftValue}
                      desc="Max. Spending Limit"
                      isIconConfig
                />
                <Card title="Happy Savings Goal"
                      value={props.happyValue}
                      desc="Let me know when I'm above this level"
                      isIconInfo
                />
            </div>
            <br/>
        </>
    );
};