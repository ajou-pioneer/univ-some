import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
// PersistGate란 앱로딩이 앱이 전체 로딩되기 전까지는 앱을 보여주지 않는 것처럼, 디스크에서 리덕스 스토어를 불러오기전까지는 앱을 보여주지 않는다.
import configureStore from './redux/configureStore';
import AppContainer from './components/AppContainer';
const { persistor, store } = configureStore(); // 함수로 선언했으므로... 뒤에 ()

// store.dispatch({type:"LOG_OUT" });

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>

    );
  }
}

export default App;
