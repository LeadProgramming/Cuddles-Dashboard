// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { ListingsActivities } from '../../../components/listings/ListingsActivities';

export default {
    title: 'components/listings/ListingsActivities',
    component: ListingsActivities,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story<ListingsActivitiesProps> = (args) => <ListingsActivities {...args} />;

export const Default = Template.bind({});
Default.args = {};
