import { dataProvider } from './DataProvider';

it('calls source API without errors', () : void => {
    const response : any = dataProvider('GET_LIST', 'sources');

    expect(response.data).not.toBeNull();
});

it('calls item API without errors', () : void => {
    const response : any = dataProvider('GET_LIST', '港聞');

    expect(response.data).not.toBeNull();
});
