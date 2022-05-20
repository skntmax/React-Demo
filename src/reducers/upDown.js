import constant from './../actions/constant'
const intialState = 0;

const changeTheNumber = (state = intialState, action) => {

    switch (action.type) {
        case constant.INCREMENT:
            return state + 1
        case constant.DECREMENT:
            return state - 1
        default:
            return state

    }

}

export default changeTheNumber