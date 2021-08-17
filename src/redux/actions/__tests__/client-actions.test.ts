import { getAllClients, getClientByName, getClientByID, addClient } from "../client-actions";

it('can run various actions', () => {
    const mockDispatch = jest.fn();
    getAllClients()(mockDispatch);
    getClientByName('yeet')();
    getClientByID(0)()
    addClient({})(mockDispatch);
})