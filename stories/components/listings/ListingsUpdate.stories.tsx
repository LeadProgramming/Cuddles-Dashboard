// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { ListingsUpdate, ListingsUpdateProps } from '../../../components/listings/ListingsUpdate';

export default {
    title: 'components/listings/ListingsUpdate',
    component: ListingsUpdate,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story<ListingsUpdateProps> = (args) => <ListingsUpdate {...args} />;

export const Default = Template.bind({});
Default.args = {};
