import client from './client';

const CropApi = (body = {}): Promise<Response> => {
  return client('/crop', 'post', body);
};

export default CropApi;
