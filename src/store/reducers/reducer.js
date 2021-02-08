let initState = {
  value: 0
}

export default function reducer(state = initState, action) {
  console.log("调用了reducer函数");
  switch (action.type) {
    case "add_action":
      return {
        value: state.value + 1
      }
    default:
      return state;
  }
}