import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Blog from './screens/Blog';
import Error404 from './screens/Error404';
import AppScreen from './screens/AppScreen';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<AppScreen />}>
						<Route path="" element={<Home />} />
						<Route path="blog" element={<Blog />} />
						<Route path="*" element={<Error404 />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
