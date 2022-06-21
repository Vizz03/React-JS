

import "./App.css"
import { Vocabulary } from "./Vocabulary"

function App() {
	const randomNum = Math.floor(Math.random() * Math.floor(Vocabulary.length))
	return (
		<div className="App">
			<h1>{Vocabulary[randomNum].FIELD1}</h1>
			<h3>{Vocabulary[randomNum].FIELD2}</h3>
		</div>
	)
}

export default App