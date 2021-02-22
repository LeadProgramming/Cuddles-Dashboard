// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { ListingsUpdate } from '../../../components/listings/ListingsUpdate';

export default {
    title: 'components/listings/ListingsUpdate',
    component: ListingsUpdate,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story = (args) => <ListingsUpdate {...args} />;

export const Default = Template.bind({});
Default.args = {
    sbOpen: true,
    sbCurrRow: {
        img: ['/img/baek.jpg'],
        id: 1,
        name: 'David',
        rating: (4.8).toFixed(1),
        num_rating: 100,
        price: (19.99).toFixed(2),
        details: 'Cute, warm, kind-hearted, and soft.',
        tags: ['Teddy Bears', 'brown', 'MED'],
        quantity: 100,
    },
};
