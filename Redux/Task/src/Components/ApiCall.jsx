// Redux/apiActions.js
import axios from "axios"
import { fetchStart, fetchSuccess, fetchError } from "../Redux/action"

const API_URL = "https://fakestoreapi.com/products"

export const ApiCall = () => (dispatch) => {
  dispatch(fetchStart())

  axios
    .get(API_URL)
    .then((res) => {
      dispatch(fetchSuccess(res.data))
    })
    .catch((err) => {
      dispatch(fetchError(err.message))
    })
}
