const largeNumber = 3654;

// node did not have 'export' implemented the new ES6 feature of import-export statements.
// export default largeNumber;

// instead it uses:
module.exports = {
	largeNumber: largeNumber
}