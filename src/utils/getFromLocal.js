        let getFromLocal = key => {
          let t = []
          try {
            t = JSON.parse(localStorage.getItem(key))
          } catch (err) {
            console.log(err)
          }
          return t;
        }
        export default getFromLocal;