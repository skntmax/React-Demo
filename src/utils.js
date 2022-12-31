export function getFullDate(date) {
      let newDate = new Date(date)
     // return  newDate.getDay()+"/"+newDate.getMonth()+"/"+newDate.getFullYear()
     return newDate.toLocaleDateString()
}

export function getTime(date) {
     let newDate = new Date(date)
    return newDate.toLocaleTimeString()
}
