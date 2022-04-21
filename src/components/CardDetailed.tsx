import * as React from 'react';
import {Card} from "./Card";

type Props = {
    title: string,
    value: string,
    desc: string,
    image?: string,
    isIconInfo?: boolean
    children?: React.ReactNode
};

export const CardDetailed = (props: Props) => {
    return (

        <div className="card w-96 bg-base-100 shadow-xl h-full">

            {props.image &&
                <figure><img src={props.image} alt="Shoes"/></figure>
            }

            <div className="stats shadow"></div>

            <Card title={props.title}
                  value={props.value}
                  desc={props.desc}
                  isIconInfo
            />

        </div>
    );
};