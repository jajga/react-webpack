import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import RegisterComponent from './components/register/registerComponent';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <RegisterComponent />
                </header>
            </div>
        </Provider>
    );
}

export default App;