// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { NavBtn, NavBtnProps } from '../components/NavBtn';

export default {
    title: 'components/NavBtn',
    component: NavBtn,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story<NavBtnProps> = (args) => <NavBtn {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'contained',
    color: 'primary',
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'contained',
    color: 'secondary',
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    variant: 'contained',
    size: 'large',
    label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
    variant: 'contained',
    size: 'medium',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    variant: 'contained',
    size: 'small',
    label: 'Button',
};
