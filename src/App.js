import Item from './components/Item';
import Card from './components/Card';

const App = () => {
	return(
		<>
			<h1>Minha primeira aplicação com React</h1>
			<ul>
				<Item>Item A</Item>
				<Item>Item B</Item>
				<Item>Item C</Item>
			</ul>
			<Card/>
		</>
	)
}

export default App;

/**
 * Outra maneira de fazer.
export default dunction App() {
	return(
		<h1>Hello world</h1>
	)
}
 */
