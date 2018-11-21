var data = {
	question_id: 'basura',
	awnsers: {
		FSjwHG4guzlHJahNGZNT: 0,
		QZTCBXShEJmeAF2koyk8: 6,
		mjYru1GUNwsMdNAJEsOJ: 0,
		qskzRzJOGkIZpL05vZjn: 1,
		xAj9J7eyKtlM0dHvincq: 0
	}
}

let database_btn = document.getElementById('database-button')

database_btn.addEventListener('click', async function () {
	var questions = db.collection("surveys").doc(data.question_id).collection("questions");

	for (anwser in data.awnsers) {
		var anwsers = questions.doc(anwser);

		await anwsers.get().then(response => {
			console.log(anwser + " -> " + data.awnsers[anwser])

			respuestas = response.data().respuestas;

			respuestas[data.awnsers[anwser]] += 1;

			console.log(respuestas)

			anwsers.update({respuestas: respuestas}).then(() => {console.log("ok")})
		});
	}
})