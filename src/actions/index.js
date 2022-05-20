import constant from './constant'

export const increament = () => {
    return { type: constant.INCREMENT }
}

export const decrement = () => {
    return { type: constant.DECREMENT }

}