// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { MainToolbar } from '../components/MainToolbar';
export default {
    title: 'components/MainToolbar',
    component: MainToolbar,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story = (args) => <MainToolbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
