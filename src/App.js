// import './custom.css'
import React,{ createContext } from 'react';
import Header from './component/Header';
import Main from './component/Main';

export const AppCinemaContext = createContext(null);

const App = () => {
    return (
			<AppCinemaContext.Provider value={""}>
				<div className="h-screen w-screen bg-gray-50">
					<Header/>
					<Main/>
				</div>
			</AppCinemaContext.Provider>
		);
}

export default App
