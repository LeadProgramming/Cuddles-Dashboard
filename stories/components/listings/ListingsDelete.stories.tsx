// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { ListingsDelete } from '../../../components/listings/ListingsDelete';

export default {
    title: 'components/listings/ListingsDelete',
    component: ListingsDelete,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story = (args) => <ListingsDelete {...args} />;

export const Default = Template.bind({});
Default.args = {
    isOpen: true,
};
