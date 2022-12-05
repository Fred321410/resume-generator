import React from "react";
import './Page.scss';

interface PageProps {
    left: React.ReactNode,
    right: React.ReactNode
}

function Page(props: PageProps): JSX.Element {
    return (
        <div className="page">
            <div className='page__left-column'>
                {props.left}
            </div>
            <div className='page__right-column'>
                {props.right}
            </div>
        </div>
    );
}

export default Page;