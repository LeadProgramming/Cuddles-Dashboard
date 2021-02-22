// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { OrdersTable } from '../../../components/orders/OrdersTable';

export default {
    title: 'components/orders/OrdersTable',
    component: OrdersTable,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story = (args) => <OrdersTable {...args} />;
export const Default = Template.bind({});
Default.args = {};
