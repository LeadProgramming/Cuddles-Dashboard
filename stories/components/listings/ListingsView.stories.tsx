// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { ListingsView, ListingsViewProps } from '../../../components/listings/ListingsView';

export default {
    title: 'components/listings/ListingsView',
    component: ListingsView,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story<ListingsViewProps> = (args) => <ListingsView {...args} />;

export const Default = Template.bind({});
Default.args = {
    isOpen: true,
};
