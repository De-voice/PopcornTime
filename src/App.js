// import './custom.css'
import React,{ createContext } from 'react';
import { Switch,Route} from "react-router-dom"
import Footer from './component/Footer';
import Main from './component/Main';
import MoviesList from './component/MoviesList';
import Nav from './component/Nav';

export const AppCinemaContext = createContext(null);

const App = () => {
    return (
			<AppCinemaContext.Provider value={""}>
				<div className="h-screen w-screen flex flex-col  bg-gray-50">
					<Nav />
					<main className="flex-grow">
						<Switch>
							<Route exact path="/">
								<Main />
							</Route>
							<Route path="/movies">
								<MoviesList />
							</Route>
						</Switch>
					</main>
					
						{/* <Footer /> */}
		
				</div>
			</AppCinemaContext.Provider>
		);
}

export default App
