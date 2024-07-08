let update = (listA, listB, cb) => {
  return _.map(listA, itemA => {
    return {
      ...itemA,
      ...(()=>{
        if (!cb) {
          return {}
        }
        return _.find(listB, itemB => {
          return cb(itemA, itemB)
        }) || {}
      })(),
    }
  })
}
export default update;