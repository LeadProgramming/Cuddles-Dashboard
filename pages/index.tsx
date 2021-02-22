import Head from 'next/head';

import { SideNav } from '../components/SideNav';
const Home: React.FunctionComponent = () => {
    return (
        <div>
            <Head>
                <title>Cuddles | Admin Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <SideNav /> */}
        </div>
    );
};
export default Home;
