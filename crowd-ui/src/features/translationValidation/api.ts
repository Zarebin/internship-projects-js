import request from '../../helper/requestConfig';

export const fetchSentence = async () => {
    const response = await request.get("/comments");
    const randomResp = response.data[Math.floor(Math.random() * response.data.length)];
    const outPut = {random: randomResp, status: response.status};
    return outPut;
};

export const postUserSelection = async (data:any) => {
    return await request.post("/comments", { ...data});
};
