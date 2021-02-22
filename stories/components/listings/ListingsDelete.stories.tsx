// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { ListingsDelete, ListingsDeleteProp } from '../../../components/listings/ListingsDelete';

export default {
    title: 'components/listings/ListingsDelete',
    component: ListingsDelete,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story<ListingsDeleteProp> = (args) => <ListingsDelete {...args} />;
export const Default = Template.bind({});
Default.args = {
    sbOpen: true,
    sbChecked: [],
};
export const DeletingOne = Template.bind({});
DeletingOne.args = {
    sbOpen: true,
    sbChecked: [
        {
            id: 1,
            name: 'Kai',
        },
    ],
};

export const DeletingFive = Template.bind({});
DeletingFive.args = {
    sbOpen: true,
    sbChecked: new Array(5).fill({ id: 0, name: 'Dummy' }),
};
export const DeletingTwenty = Template.bind({});
DeletingTwenty.args = {
    sbOpen: true,
    sbChecked: new Array(20).fill({ id: 0, name: 'Dummy' }),
};
