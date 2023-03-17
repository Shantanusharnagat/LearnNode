//it is core module so no need to install
const path=require('path')

//base file
console.log(path.basename(__filename))

//directory name
console.log(path.dirname(__filename))

//file extension
console.log(path.extname(__filename))

//create path object
console.log(path.parse(__filename).base)

