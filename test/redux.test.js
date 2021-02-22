import renderer from 'react-test-renderer';

import MyApp from '../pages/_app';
import { changeWallMode } from '../redux/listings/listingsSlice';

describe('The listing page', () => {
    it('can change wall mode to table.', () => {
        expect(changeWallMode('table')).toEqual({ type: 'listings/changeWallMode', payload: 'table' });
    });
    it('can change wall mode to wall.', () => {
        expect(changeWallMode('wall')).toEqual({ type: 'listings/changeWallMode', payload: 'wall' });
    });
    // it('can render the table on click.', () => {
    //     const component = renderer.create(<MyApp />);
    //     let tree = component.toJSON();
    //     expect(tree).toMatchSnapshot();
    // });
});
