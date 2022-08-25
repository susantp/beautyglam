import Head from "next/head";
import React from "react";

const IndexHeadComponent = () => {
    return (
        <Head>
            <title>Beauty Glam by Sushi</title>
            <meta
                content="IE=edge"
                httpEquiv="X-UA-Compatible"
            />
            <meta
                charSet="UTF-8"/>
            <meta
                content="#228b22"
                name="theme-color"/>
            <meta
                content="professional makeup artist"
            />
            <meta
                content="professional makeup artist" name="keywords"
            />
            <meta
                property="fb:pages"
                content="487842001414096"
            />
            <meta
                content="width=device-width,initial-scale=1"
                name="viewport"
            />
            <meta
                content="Tech Bizz"
                property="og:image:alt"
            />
            <meta
                content="https://www.techbizzsoft.com/_next/image?url=%2Flogo.png&w=256&q=75"
                property="og:image"
            />
        </Head>
    )
}
export default IndexHeadComponent;