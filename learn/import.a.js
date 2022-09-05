

var a = {
  name: 1
}

function count() {
  a = {}
  console.log('内',a)
}

export { a, count}
