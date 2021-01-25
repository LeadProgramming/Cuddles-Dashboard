// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { ListingsToolbar } from '../../../components/listings/ListingsToolbar';

export default {
    title: 'components/listings/ListingsToolbar',
    component: ListingsToolbar,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story = (args) => <ListingsToolbar {...args} />;

export const Default = Template.bind({});
Default.args = {
    sortBy: ['Price: Cheapest', 'Price: Expensive', 'Customer Reviews', 'Newest Arrival'],
    types: ['Teddy Bears', 'Food Plushies', 'Animals'],
};
