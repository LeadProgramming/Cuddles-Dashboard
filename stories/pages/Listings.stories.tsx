// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import Listings from '../../pages/listings';

export default {
    title: 'pages/Listings',
    component: Listings,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story = (args) => <Listings {...args} />;

export const Default = Template.bind({});
Default.args = {
    navNames: [
        { name: 'home' },
        { name: 'metrics' },
        { name: 'orders' },
        { name: 'listings' },
        { name: 'customers' },
        { name: 'email', subNames: ['inbox', 'sent', 'drafts', 'deleted'] },
        { name: 'settings' },
    ],
};
