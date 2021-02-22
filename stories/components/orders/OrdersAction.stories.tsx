// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { OrdersAction } from '../../../components/orders/OrdersAction';

export default {
    title: 'components/orders/OrdersAction',
    component: OrdersAction,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story = (args) => <OrdersAction {...args} />;
export const Default = Template.bind({});
Default.args = {};
