import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';

type Listing = {
    name: string;
    type: string;
    color: string;
};
export default function Listings(): React.ReactNode {
    return (
        <Layout>
            <Head>
                <title>Cuddles | Listings</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Link href="/">
                <a>Home</a>
                <li></li>
                <li></li>
            </Link>
            <a href="https://davidcodes.herokuapp.com/">Resume Page</a>
        </Layout>
    );
}

// export async function getStaticProps() {
//     // Get external data from the file system, API, DB, etc.
//     const data = ...
//     // The value of the `props` key will be
//     //  passed to the `Home` component
//     return {
//       props: ...
//     }
//   }
