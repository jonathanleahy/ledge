import * as React from 'react';

type Props = {
    title: string,
    subtitle: string,
    children?: React.ReactNode
};

export const Header = (props: Props) => {
    return (
        <>
            <div>
                <article className="prose lg:prose-xl">

                    {props.title &&
                        <h1>{props.title}!</h1>}

                    {props.subtitle &&
                        <h4>{props.subtitle}!</h4>}

                </article>
            </div>
            <br/>
        </>
    );
};
