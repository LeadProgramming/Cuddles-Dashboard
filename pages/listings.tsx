import { createStyles, makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { ListingsActivities } from '../components/listings/ListingsActivities';
import { ListingsCreate } from '../components/listings/ListingsCreate';
import { ListingsDelete } from '../components/listings/ListingsDelete';
import { ListingsTable } from '../components/listings/ListingsTable';
import { ListingsToolbar } from '../components/listings/ListingsToolbar';
import { ListingsUpdate } from '../components/listings/ListingsUpdate';
import { ListingsView } from '../components/listings/ListingsView';
import { ListingsWall } from '../components/listings/ListingsWall';
import { SideNav } from '../components/SideNav';
const useStyles = makeStyles(() =>
    createStyles({
        content: {
            float: 'right',
            width: `calc(100% - 200px)`,
        },
    }),
);
export type ListingProps = {
    navnames: any;
    listings: any;
};
export default function Listings({ navNames }: ListingProps): React.ReactNode {
    const classes = useStyles();
    const wallMode = useSelector((state) => state.listings.wallMode);
    return (
        <div>
            <Head>
                <title>Cuddles | Listings</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SideNav navNames={navNames} />
            <main className={classes.content}>
                <ListingsToolbar />
                {wallMode ? <ListingsWall /> : <ListingsTable />}
            </main>
            <a href="https://davidcodes.herokuapp.com/">Resume Page</a>
            {/* <ListingsActivities /> */}
            <ListingsCreate />
            <ListingsView />
            <ListingsUpdate />
            <ListingsDelete />
        </div>
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
