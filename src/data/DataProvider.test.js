import { dataProvider } from './DataProvider';

const request = source => dataProvider('GET_LIST', source);

it('calls source API without errors', () => {
    expect(request('sources').data).not.toBeNull();
});

it('calls item API without errors', () => {
    expect(request('港聞').data).not.toBeNull();
});
