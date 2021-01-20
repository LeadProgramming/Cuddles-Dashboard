import { createStyles, makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import Link from 'next/link';

import { ListingsActivities } from '../components/listings/ListingsActivities';
import { ListingsCreate } from '../components/listings/ListingsCreate';
import { ListingsDelete } from '../components/listings/ListingsDelete';
import { ListingsEditor } from '../components/listings/ListingsEditor';
import { ListingsToolbar } from '../components/listings/ListingsToolbar';
import { ListingsUpdate } from '../components/listings/ListingsUpdate';
import { ListingsView } from '../components/listings/ListingsView';
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
    return (
        <div>
            <Head>
                <title>Cuddles | Listings</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SideNav navNames={navNames} />
            <main className={classes.content}>
                <ListingsToolbar />
                <ListingsEditor />
            </main>
            <a href="https://davidcodes.herokuapp.com/">Resume Page</a>
            <ListingsActivities />
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
