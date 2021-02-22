import { Hidden } from '@material-ui/core';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { ListingsControlMobile } from '../components/listings/ListingsControlMobile';
import { ListingsCreate } from '../components/listings/ListingsCreate';
import { ListingsDelete } from '../components/listings/ListingsDelete';
import { ListingsTable } from '../components/listings/ListingsTable';
import { ListingsToolbar } from '../components/listings/ListingsToolbar';
import { ListingsUpdate } from '../components/listings/ListingsUpdate';
import { ListingsView } from '../components/listings/ListingsView';
import { ListingsWall } from '../components/listings/ListingsWall';
import { MainToolbar } from '../components/MainToolbar';
// import { SideNav } from '../components/SideNav';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            float: 'right',
            width: `calc(100% - 200px)`,
        },
    }),
);
const Listings: React.FunctionComponent = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const display = useSelector((state: RootState) => state.listings.displayMode);
    const dropHandle = (e: React.DragEvent<HTMLDivElement>): void => {
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
    };
    const dragOverHandle = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
    };
    // const handleHiddenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setHidden(event.target.checked);
    // };

    return (
        <div onDragOver={dragOverHandle} onDrop={dropHandle}>
            <Head>
                <title>Cuddles | Listings</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainToolbar>
                <ListingsToolbar />
            </MainToolbar>
            {display == 'table' ? <ListingsTable /> : <ListingsWall />}
            <Hidden mdUp={true}>
                <ListingsControlMobile />
            </Hidden>
            <ListingsCreate />
            <ListingsView />
            <ListingsUpdate />
            <ListingsDelete />
        </div>
    );
};
export default Listings;
// export async function getStaticProps() {
//     // Get external data from the file system, API, DB, etc.
//     const data = ...
//     // The value of the `props` key will be
//     //  passed to the `Home` component
//     return {
//       props: ...
//     }
//   }
