import { getAllBatches, getBatchById, confirmBatch, addBatch, updateBatch, deleteBatch } from "../batch-actions";

const mockBatch = {
    batchId: 0,
    trainerId: 0,
    curriculumId: 0,
    batchSize: 0,
    startDate: Date.now().toString(),
    endDate: Date.now().toString(),
    clientId: null,
}

it('can run getAllBatches', () => {
    const mockDispatch = jest.fn();
    getAllBatches()(mockDispatch);
    getBatchById(0, 0, 0)(mockDispatch);
    confirmBatch(0, 0, 0)(mockDispatch);
    addBatch(mockBatch)(mockDispatch);
    updateBatch(mockBatch)(mockDispatch)
    deleteBatch(mockBatch.batchId)(mockDispatch);
})
