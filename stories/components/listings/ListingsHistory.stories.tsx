// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { ListingsHistory, ListingsHistoryProps } from '../../../components/listings/ListingsHistory';

export default {
    title: 'components/listings/ListingsHistory',
    component: ListingsHistory,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story<ListingsHistoryProps> = (args) => <ListingsHistory {...args} />;

export const Default = Template.bind({});
Default.args = {
    isOpen: true,
};
