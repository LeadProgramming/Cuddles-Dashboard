// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { ListingsTable } from '../../../components/listings/ListingsTable';

export default {
    title: 'components/listings/ListingsTable',
    component: ListingsTable,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story = (args) => <ListingsTable {...args} />;

export const Default = Template.bind({});
Default.args = {};
