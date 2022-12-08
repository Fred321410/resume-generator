import React from "react";
import './Page.scss';

interface PageProps {
    left: React.ReactNode,
    right: React.ReactNode
}

const Page = ({left, right}: PageProps) => {
    return (
        <div className="page">
            <div className='page__left-column'>
                {left}
            </div>
            <div className='page__right-column'>
                {right}
            </div>
        </div>
    );
}

export default Page;