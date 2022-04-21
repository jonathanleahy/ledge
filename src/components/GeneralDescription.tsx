import * as React from 'react';

type Props = {
    children?: React.ReactNode
};

export const GeneralDescription = (props: Props) => {
    return (
        <>
            <article className="prose lg:prose-xl">
                <p>
                    {props.children}
                </p>
            </article>
            <br/>
        </>
    );
};