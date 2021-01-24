import { createStyles, makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { ListingsActivities } from '../components/listings/ListingsActivities';
import { ListingsCreate } from '../components/listings/ListingsCreate';
import { ListingsDelete } from '../components/listings/ListingsDelete';
import { ListingsTable } from '../components/listings/ListingsTable';
import { ListingsToolbar } from '../components/listings/ListingsToolbar';
import { ListingsUpdate } from '../components/listings/ListingsUpdate';
import { ListingsView } from '../components/listings/ListingsView';
import { ListingsWall } from '../components/listings/ListingsWall';
import { SideNav } from '../components/SideNav';
import { createDialog } from '../redux/listings/listingsSlice';
import { RootState } from '../redux/store';
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
    const wallMode = useSelector((state: RootState) => state.listings.wallMode);
    const dispatch = useDispatch();
    return (
        <div
            onDragOver={(e) => {
                e.preventDefault();
            }}
            onDrop={(e) => {
                e.preventDefault();
                if (e.dataTransfer.items) {
                    console.log(e.dataTransfer.items[0]);
                    // Use DataTransferItemList interface to access the file(s)
                    for (let i = 0; i < e.dataTransfer.items.length; i++) {
                        // If dropped items aren't files, reject them
                        if (e.dataTransfer.items[i].kind === 'file') {
                            const file = e.dataTransfer.items[i].getAsFile();
                            console.log('... file[' + i + '].name = ' + file.name);
                        }
                    }
                } else {
                    // Use DataTransfer interface to access the file(s)
                    console.log(e.dataTransfer.files);
                    for (let i = 0; i < e.dataTransfer.files.length; i++) {
                        console.log('... file[' + i + '].name = ' + e.dataTransfer.files[i].name);
                    }
                }
            }}
        >
            <Head>
                <title>Cuddles | Listings</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SideNav navNames={navNames} />
            <main className={classes.content}>
                <ListingsToolbar />
                {wallMode === 'wall' ? <ListingsWall /> : <ListingsTable />}
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
