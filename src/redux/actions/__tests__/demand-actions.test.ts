import { getAllDemand, addDemand, getDemandById, getDemandByDate, getDemandByCurrId, getDemandByCurrIdAndDate, getDemandByClientId } from '../demand-actions'

it('it can run various action creators', () => {
    const mockDispatch = jest.fn();
    getAllDemand()(mockDispatch);
    addDemand({})(mockDispatch);
    getDemandById(0);
    getDemandByCurrId(0);
    getDemandByCurrIdAndDate(0, Date.now().toString(), Date.now().toString());
    getDemandByClientId(0);
});