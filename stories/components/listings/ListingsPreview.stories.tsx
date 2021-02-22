// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { ListingsPreview, ListingsPreviewProp } from '../../../components/listings/ListingsPreview';

export default {
    title: 'components/listings/ListingsPreview',
    component: ListingsPreview,
    decorators: [(story) => <div style={{ width: '60%' }}>{story()}</div>],

    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story<ListingsPreviewProp> = (args) => <ListingsPreview {...args} />;

export const Default = Template.bind({});
Default.args = {
    itm: {
        img: [
            'https://cdn3.volusion.com/9nxdj.fchy5/v/vspfiles/photos/AR-01779-2.jpg?v-cache=1602075128',
            'https://m.media-amazon.com/images/I/51xye4yffhL.jpg',
        ],
        id: 1,
        name: 'Kai',
        rating: 0.0,
        num_rating: 0,
        price: 0,
        details: 'Cute and loveable',
        tags: ['Cute', 'Teddy Bear', 'Funky'],
        quantity: 100,
    },
};
export const FrontPage = Template.bind({});
FrontPage.args = {
    page: 0,
    itm: Default.args.itm,
};
export const GalleryPage = Template.bind({});
GalleryPage.args = {
    page: 1,
    itm: Default.args.itm,
};
export const DetailsPage = Template.bind({});
DetailsPage.args = {
    page: 2,
    itm: Default.args.itm,
};
