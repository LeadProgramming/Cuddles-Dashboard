import { Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { ListingsControlDesktop } from './ListingsControlDesktop';
// export type ListingsToolbarProps = {
//     sortBy: string[];
//     types: string[];
// };
export const ListingsToolbar: React.FunctionComponent = () => {
    return (
        <>
            <Grid item xs={4} style={{ textAlign: 'center' }}>
                <Typography variant="h6">Listings</Typography>
            </Grid>
            <Hidden smDown={true}>
                <Grid item xs={4} style={{ textAlign: 'right' }}>
                    <ListingsControlDesktop />
                </Grid>
            </Hidden>
        </>
    );
};
