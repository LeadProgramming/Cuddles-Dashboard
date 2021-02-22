// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { ListingsCreate, ListingsCreateProps } from '../../../components/listings/ListingsCreate';

export default {
    title: 'components/listings/ListingsCreate',
    component: ListingsCreate,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story<ListingsCreateProps> = (args) => <ListingsCreate {...args} />;

export const Default = Template.bind({});

Default.args = {
    dfVal: {
        img: [],
        name: '',
        details: '',
        quantity: null,
        price: null,
        tags: '',
    },
    isOpen: true,
    isPreview: false,
};

export const ContainsOneImg = Template.bind({});
ContainsOneImg.args = {
    dfVal: {
        img: ['/taro.png'],
        name: 'David',
        details: 'The coolest teddy bear on the block.',
        quantity: 100,
        price: 20,
        tags: 'Cute, Teddy Bear, Fuddly',
    },
    isOpen: true,
    isPreview: false,
};
export const ContainsSixImg = Template.bind({});
ContainsSixImg.args = {
    dfVal: {
        img: ['/taro.png', '/taro.png', '/taro.png', '/taro.png', '/taro.png', '/taro.png'],
        name: 'David',
        details: 'The coolest teddy bear on the block.',
        quantity: 100,
        price: 20,
        tags: 'Cute, Teddy Bear, Fuddly',
    },
    isOpen: true,
    isPreview: false,
};
export const ContainsSevenImg = Template.bind({});
ContainsSevenImg.args = {
    dfVal: {
        img: ['/taro.png', '/taro.png', '/taro.png', '/taro.png', '/taro.png', '/taro.png'],
        name: 'David',
        details: 'The coolest teddy bear on the block.',
        quantity: 100,
        price: 20,
        tags: 'Cute, Teddy Bear, Fuddly',
    },
    isOpen: true,
    isPreview: false,
};

export const ValidateImgField = Template.bind({});
ValidateImgField.args = {
    dfVal: {
        img: [],
        name: 'David',
        details: 'The coolest teddy bear on the block.',
        quantity: 100,
        price: 20,
        tags: 'Cute, Teddy Bear, Fuddly',
    },
    isOpen: true,
    isPreview: false,
};
