import { Box, Button, ButtonGroup, Container } from '@material-ui/core';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';

import { listing } from '../../redux/listings/listingsTypes';
import { ListingsDetail } from './ListingsDetail';
import { ListingsGallery } from './ListingsGallery';
import { ListingsItem } from './ListingsItem';
export type ListingsPreviewProp = {
    itm: listing;
    page: number;
    children: React.ReactNode;
};
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexFlow: 'column',
        width: '50%',
        position: 'fixed',
        height: '100%',
    },
    media: {
        justifySelf: 'center',
        margin: 'auto',
    },
    control: {
        justifySelf: 'flex-end',
        margin: '25px auto',
    },
}));
export const ListingsPreview: React.FunctionComponent = ({ control }: ListingsPreviewProp) => {
    const itm = useWatch({
        control,
        name: ['name', 'img', 'price', 'quantity', 'details', 'tags'],
    });
    const classes = useStyles();
    const [page, setPage] = useState<number>(0);
    const handlePrev = (): void => {
        if (page <= 0) {
            setPage(2);
        } else {
            setPage((page - 1) % -3);
        }
    };
    const handleNext = (): void => {
        setPage((page + 1) % 3);
    };

    return (
        <>
            <Container className={classes.container}>
                <Container className={classes.media}>
                    {page == 0 && <ListingsItem {...itm} />}
                    {page == 1 && <ListingsGallery {...itm} />}
                    {page == 2 && <ListingsDetail {...itm} />}
                </Container>
                <ButtonGroup disableElevation variant="contained" color="primary" className={classes.control}>
                    <Button onClick={handlePrev}>
                        <ArrowLeft />
                    </Button>
                    <Button onClick={handleNext}>
                        <ArrowRight />
                    </Button>
                </ButtonGroup>
            </Container>
        </>
    );
};
