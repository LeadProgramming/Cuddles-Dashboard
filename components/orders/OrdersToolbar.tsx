import { Hidden, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
    },
}));
export type OrdersToolbarProps = {
    children: React.ReactNode;
};
export const OrdersToolbar: React.FunctionComponent = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <>
            <Grid item xs={8} className={classes.title}>
                <Typography variant="h6">Orders</Typography>
            </Grid>
            {/* <Hidden smDown={true}> */}
            {/* <Grid item xs={4} style={{ textAlign: 'right' }}>
                    <ListingsControl />
                </Grid> */}
            {/* </Hidden> */}
        </>
    );
};
