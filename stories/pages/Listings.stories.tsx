// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import Listings, { ListingProps } from '../../pages/Listings';

export default {
    title: 'pages/Listings',
    component: Listings,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story<ListingsProps> = (args) => <Listings {...args} />;

export const Default = Template.bind({});
Default.args = {
    navNames: [
        { name: 'home' },
        { name: 'metrics' },
        { name: 'orders', subnames: ['awaiting', 'shipped', 'arrived', 'returns', 'canceled'] },
        { name: 'listings', subnames: ['teddy bears', 'food plushies', 'animals'] },
        { name: 'customers', subnames: ['guests', 'users'] },
        { name: 'email', subNames: ['inbox', 'sent', 'drafts', 'deleted'] },
        { name: 'settings' },
    ],
};
