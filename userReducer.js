export const increment = () => ({ type: "INC" });
export const decrement = () => ({ type: "DEC" });
export const reset = () => ({ type: "RESET" });

const initialState = {
    count: 0
  };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "INC":
            return { ...state, count: state.count + 1 };
        case "DEC":
            return { ...state, count: state.count - 1 };
        case "RESET":
            return { ...state, count: 0 };
        default:
            return state;
    }
};