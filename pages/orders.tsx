import { Grid, Hidden } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import SpeedDial, { SpeedDialProps } from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainToolbar } from '../components/MainToolbar';
import { OrdersTable } from '../components/orders/OrdersTable';
import { OrdersToolbar } from '../components/orders/OrdersToolbar';

const useStyles = makeStyles((theme) => createStyles({}));
const Orders: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <Head>
                <title>Cuddles | Orders</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainToolbar>
                <OrdersToolbar />
            </MainToolbar>
            <OrdersTable />
        </div>
    );
};
export default Orders;
// export async function getStaticProps() {
//     // Get external data from the file system, API, DB, etc.
//     const data = ...
//     // The value of the `props` key will be
//     //  passed to the `Home` component
//     return {
//       props: ...
//     }
//   }
