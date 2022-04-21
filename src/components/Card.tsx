import * as React from 'react';

type Props = {
    title: string,
    value: string,
    desc: string,
    isIconInfo?: boolean
    isIconConfig?: boolean
};

export const Card = (props: Props) => {
    return (
        <div className="stat">

            {props.isIconInfo &&
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         className="inline-block w-8 h-8 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
            }

            {props.isIconConfig &&
                <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     className="inline-block w-8 h-8 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
                </div>
            }

            <div className="stat-title">{props.title}</div>
            <div className="stat-value">{props.value}</div>
            <div className="stat-desc">{props.desc}</div>
        </div>
    );
};