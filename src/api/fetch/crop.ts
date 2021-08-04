import client from './client';

const CropApi = (body: object = {}): Promise<Response> => {
  return client('/crop', 'post', body);
};

export default CropApi;
