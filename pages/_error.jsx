import React from 'react';

function ErrorPage(props) {
    return (
        <div className={`flex flex-col items-center justify-center h-screen font-semibold text-3xl `}>
            <div className={`bg-red-600 text-white rounded-full py-16 px-12`}>Error</div>
        </div>
    );
}

export default ErrorPage;