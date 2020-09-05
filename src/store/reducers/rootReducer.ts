const initState = {};

export default function rootReducer(state = initState, action: any) {
  switch (action.type) {
    case "asdf":
      return {
        ...state,
      };
  }
}
