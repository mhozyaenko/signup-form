import axios from "axios";
import {SignUpInterface} from "#app/models/signUpModel";
import {UserModel} from "#app/models/UserModel";
import * as message from "#app/messages/base.json";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const postUserSignUp = async (model:SignUpInterface):UserModel => {
    const response = await axios.post(`${baseUrl}/users`, {
        body: JSON.stringify(model),
    });

    if (response.status === 200) {
        console.log(response.data)
        return response.data;
    }
    else {
        throw new Error(message.common.apiError);
    }
}
