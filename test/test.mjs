import Curriculum from 'curriculum-js'

async function validate() {

	var curriculum  = new Curriculum()
	var schema      = await curriculum.loadContextFromFile('curriculum-inhoudslijnen', 'context.json');
	var basisSchema = await curriculum.loadContextFromFile('curriculum-basis', 'curriculum-basis/context.json');
	try {
		let result = await curriculum.validate(schema)
		console.log('Data is valid!')
	} catch(error) {
		console.log(error)
		process.exit()
		error.validationErrors.forEach(error => {
			console.log(error.instancePath+': '+error.message)
		})
	}
}

validate()