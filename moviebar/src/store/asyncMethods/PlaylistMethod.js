import axios from "axios";
import { SET_PLAYLIST, SET_PUBLIC_PLAYLIST } from "../types/PlaylistTypes";

export const createPlaylist = (state) => {

    return async (dispatch)=>{
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        try {
            const {data} = await axios.post("/create", state, config);
        } catch (error) {
            console.log(error.response.data.errors);
        }           
    };
}

export const userPlaylist = (email) => {
    return async (dispatch)=>{
        try{
            const {data:{favouriteMovies}}= await axios.get(`/userlist/${email}`)
            dispatch({type: SET_PLAYLIST, payload: favouriteMovies});
        }catch(error){
            console.log(error.response.data.errors);
        }
    };
}

export const createPublicPlaylist = (state) => {
    console.log("step1")
    return async (dispatch)=>{
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        try {
            const {data} = await axios.post("/createpubliclist", state, config);
        } catch (error) {
            console.log(error.response.data.errors);
        }           
    };
}

export const publicPlaylist = () => {
    return async (dispatch)=>{
        try{
            const {data:{publicList}}= await axios.get(`/publiclist`)
            dispatch({type: SET_PUBLIC_PLAYLIST, payload: publicList});
        }catch(error){
            console.log(error.response.data.errors);
        }
    };
}