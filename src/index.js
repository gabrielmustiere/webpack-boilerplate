let shouldResolve = true

let maPromesse = (shouldResolve) => {
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      setTimeout(() => {
        resolve('executé')
      }, 1000)
    } else {
      reject('echec')
    }
  })
}

maPromesse(shouldResolve).then(retourPromesse => {
  console.log("1");
  console.log('Then 1 : ', retourPromesse)

  return maPromesse(shouldResolve).then(retourPromesseImbrique => {
    setTimeout(() => {
      console.log("2")
      console.log("Then imbriqué : ", retourPromesseImbrique)
    }, 2000)
    return "Then imbrique : " + retourPromesseImbrique
  }).then(() => {
    return maPromesse(shouldResolve).then(retourPromesseImbrique => {
      setTimeout(() => {
        console.log("3")
        console.log("Then imbriqué : ", retourPromesseImbrique)
        return "Then imbrique 2 : " + retourPromesseImbrique
      }, 1000)
    })
  })

})
.then(retourPremierThen => {
  console.log("5")
  console.log("Then 2 : ", retourPremierThen)

  ///

  return "Then 2 : " + retourPremierThen
})
.then((retourSecondThen) => {
  console.log("6")
  console.log("Then 3 : ", retourSecondThen)

  ///

  return "Then 3 : " + retourSecondThen
})
.catch((errorPromesse) => {
  console.log(errorPromesse)
})
