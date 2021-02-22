import 'pure-react-carousel/dist/react-carousel.es.css';

import { Grid, Hidden, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/styles';
import { CarouselProvider, Dot, DotGroup, Image, ImageWithZoom, Slide, Slider } from 'pure-react-carousel';
import { useState } from 'react';

import { listing } from '../../redux/listings/listingsTypes';

const useStyles = makeStyles((theme) => ({
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    carousel: {
        margin: '0px 20px 0 20px',
        width: '75%',
        height: '75%',
    },
    arrows: {
        textAlign: 'center',
    },
    bigPic: {
        padding: '10px',
    },
    dot: {
        outline: 'none',
        padding: 0,
        marginTop: '10px',
        border: 'none',
    },
    currDotImage: {
        border: '3px solid lavender',
    },
    dotImage: {
        border: '3px dotted lightpink',
        '&:hover': {
            border: '3px dotted lavender',
        },
    },
    dotgroup: {
        margin: '10px',
    },
}));

export type ListingsGalleryProp = {
    itm: listing;
    children: React.ReactNode;
};
export const ListingsGallery: React.FunctionComponent = (itm: ListingsGalleryProp) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    //offset by 1 to avoid going forward when on index 0. e.g. abs(-1) = 1
    const [slide, setSlide] = useState(0);

    return (
        <CarouselProvider
            naturalSlideHeight={1}
            naturalSlideWidth={1}
            totalSlides={itm.img.length}
            dragEnabled={false}
            currentSlide={slide}
            className={classes.carousel}
        >
            <Grid container justify="center" className={classes.bigPic}>
                <Hidden xsDown={true}>
                    <Grid container item sm={2} justify="center" alignContent="center">
                        <DotGroup
                            className={classes.dotgroup}
                            showAsSelectedForCurrentSlideOnly
                            renderDots={(dot) => {
                                return itm.img.map((i, j) => {
                                    return (
                                        <Dot key={i} slide={dot.currentSlide} className={classes.dot}>
                                            <Image
                                                src={i}
                                                alt={'img dots'}
                                                className={
                                                    j == dot.currentSlide ? classes.currDotImage : classes.dotImage
                                                }
                                                onClick={() => {
                                                    setSlide(j);
                                                }}
                                            />
                                        </Dot>
                                    );
                                });
                            }}
                        />
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={10} justify="center" alignItems="center">
                    <Slider>
                        {itm.img.map((i, j) => {
                            return (
                                <Slide index={j} key={i}>
                                    <ImageWithZoom
                                        src={i}
                                        alt={'Listing Photos'}
                                        hasMasterSpinner
                                        className={classes.image}
                                    />
                                </Slide>
                            );
                        })}
                    </Slider>
                    <div className={classes.arrows}>
                        <IconButton
                            disableRipple
                            disableFocusRipple
                            onClick={(e) => {
                                if (slide !== 0) setSlide(Math.abs((slide - 1) % itm.img.length));
                            }}
                        >
                            <ChevronLeftIcon />
                        </IconButton>
                        <IconButton
                            disableRipple
                            disableFocusRipple
                            onClick={(e) => {
                                if (slide !== itm.img.length - 1) setSlide(Math.abs((slide + 1) % itm.img.length));
                            }}
                        >
                            <ChevronRightIcon />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </CarouselProvider>
    );
};
