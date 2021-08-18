import { getAllClients, addClient } from "../client-actions";

it('can run various actions', () => {
    const mockDispatch = jest.fn();
    getAllClients()(mockDispatch);
    addClient({})(mockDispatch);
})