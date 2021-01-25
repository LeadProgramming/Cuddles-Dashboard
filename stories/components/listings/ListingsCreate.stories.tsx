// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { ListingsCreate } from '../../../components/listings/ListingsCreate';

export default {
    title: 'components/listings/ListingsCreate',
    component: ListingsCreate,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story = (args) => <ListingsCreate {...args} />;

export const Default = Template.bind({});
Default.args = {
    isOpen: true,
};
