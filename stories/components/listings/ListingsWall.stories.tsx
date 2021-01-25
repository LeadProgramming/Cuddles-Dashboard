// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { ListingsWall } from '../../../components/listings/ListingsWall';

export default {
    title: 'components/listings/ListingsWall',
    component: ListingsWall,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story = (args) => <ListingsWall {...args} />;

export const Default = Template.bind({});
Default.args = {
    listings: [
        {
            img: {
                link: 'https://cdn3.volusion.com/9nxdj.fchy5/v/vspfiles/photos/AR-01779-2.jpg?v-cache=1602075128',
                alt: 'Pictures of David.',
            },
            id: 1,
            name: 'David',
            rating: (4.8).toFixed(1),
            num_rating: 100,
            price: (19.99).toFixed(2),
            details: 'Cute, warm, kind-hearted, and soft.',
            type: 'Teddy Bears',
            color: 'brown',
            size: 'MED',
            quantity: 100,
        },
        {
            img: {
                link: 'https://cdn3.volusion.com/9nxdj.fchy5/v/vspfiles/photos/AR-01779-2.jpg?v-cache=1602075128',
                alt: 'Pictures of David.',
            },
            id: 2,
            name: 'Diana',
            rating: (0).toFixed(1),
            num_rating: 0,
            price: (39.99).toFixed(2),
            details: 'Cute, sweet, kind-hearted, and soft.',
            type: 'Teddy Bears',
            color: 'brown',
            size: 'MED',
            quantity: 100,
        },
        {
            img: {
                link: 'https://cdn3.volusion.com/9nxdj.fchy5/v/vspfiles/photos/AR-01779-2.jpg?v-cache=1602075128',
                alt: 'Pictures of David.',
            },
            id: 3,
            name: 'Phuong',
            rating: (4.75).toFixed(1),
            num_rating: 10,
            price: (29.99).toFixed(2),
            details: 'Fuddly, sweet, kind-hearted, and soft.',
            type: 'Teddy Bears',
            color: 'brown',
            size: 'MED',
            quantity: 100,
        },
    ],
};
