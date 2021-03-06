// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { ListingsView } from '../../../components/listings/ListingsView';

export default {
    title: 'components/listings/ListingsView',
    component: ListingsView,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story = (args) => <ListingsView {...args} />;

export const Default = Template.bind({});
Default.args = {
    sbItm: {
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
    sbOpen: true,
};
