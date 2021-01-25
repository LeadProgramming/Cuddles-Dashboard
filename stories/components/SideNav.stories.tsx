// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { SideNav, SideNavProps } from '../../components/SideNav';

export default {
    title: 'components/SideNav',
    component: SideNav,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
    decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
} as Meta;

const Template: Story<SideNavProps> = (args) => <SideNav {...args} />;

export const Default = Template.bind({});
Default.args = {
    navNames: [
        { name: 'home' },
        { name: 'metrics' },
        { name: 'orders' },
        { name: 'listings' },
        { name: 'customers' },
        // { name: 'email', subNames: ['inbox', 'sent', 'deleted'] },
    ],
};
export const login = Template.bind({});
login.args = {
    navNames: Default.args.navNames.concat({ name: 'login' }),
};

export const logout = Template.bind({});
logout.args = {
    navNames: Default.args.navNames.concat({ name: 'logout' }),
};
