import { dataProvider } from './DataProvider';

const request : (source : string) => any = (source : string) : any => dataProvider('GET_LIST', source);

it('calls source API without errors', () : void => {
    expect(request('sources').data).not.toBeNull();
});

it('calls item API without errors', () : void => {
    expect(request('港聞').data).not.toBeNull();
});
