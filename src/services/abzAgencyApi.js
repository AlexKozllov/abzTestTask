import axios from 'axios';
import qs from 'qs';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

const serverReq = axios.create({
    baseURL: BASE_URL
});

const getUserList = async (page = 1, count = 6) => {
    try {
        const response = await serverReq.get('/users', {
            params: {
                count,
                page
            }
        });

        return await response.data;
    } catch (error) {
        console.log('error', error);
        throw error;
    }
};

const getRadioBtnPositions = async () => {
    try {
        const response = await serverReq.get('/positions');

        return await response.data.positions;
    } catch (error) {
        console.log('error', error);
        throw error;
    }
};

const getToken = async () => {
    try {
        const response = await serverReq.get('/token');

        return await response.data;
    } catch (error) {
        console.log('error', error);
        throw error;
    }
};

const postRegistration = async (data) => {
    try {
        const tokenData = await getToken();
        const response = await serverReq.post('/users', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Token: tokenData.token
            }
        });

        return await response.data;
    } catch (error) {
        console.log('error', error);
        throw error;
    }
};

export { getUserList, getRadioBtnPositions, postRegistration };
