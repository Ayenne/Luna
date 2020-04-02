export const getBestRestaurants = () => async (dispatch) => {
    const FAKEURL = "http://localhost:8000/backend/api/home/"
    // const URL = "https://luna.propulsion-learn.ch/backend/api/home/"

    const apiBestRestaurants = await fetch(FAKEURL);
    const responseBestRestaurants = await apiBestRestaurants.json();

    await dispatch({
        type: "GETBESTRESTAURANTS",
        payload: responseBestRestaurants
    })
}