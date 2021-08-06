export default function AppReducer(state, action) {
  switch (action.type) {
    case "GET_TRANSACTION":
      return { ...state, loading: false, transac: action.payload };

    case "DELETE_TRANSACTION":
      return { ...state, transac: state.transac.filter((i) => i._id !== action.payload) };

    case "ADD_TRANSACTION":
      return { ...state, transac: [...state.transac, action.payload] };

    default:
      return state;
  }
}
