// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { MainToolbar } from '../../../components/MainToolbar';
import { OrdersToolbar } from '../../../components/orders/OrdersToolbar';

export default {
    title: 'components/orders/OrdersToolbar',
    component: OrdersToolbar,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story = (args) => {
    return (
        <MainToolbar>
            <OrdersToolbar {...args} />
        </MainToolbar>
    );
};
export const Default = Template.bind({});
Default.args = {};
