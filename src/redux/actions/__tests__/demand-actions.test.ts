import { getAllDemand, addDemand, getDemandByDate, getDemandByCurrIdAndDate } from '../demand-actions'

it('it can run various action creators', () => {
    const mockDispatch = jest.fn();
    getAllDemand()(mockDispatch);
    addDemand({})(mockDispatch);
    getDemandByDate(Date.now().toString(), Date.now().toString());
    getDemandByCurrIdAndDate(0, Date.now().toString(), Date.now().toString());
});