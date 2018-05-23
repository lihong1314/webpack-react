import React from 'react'
import ReactDOM from 'react-dom'
import First from './components/first.js'
import Second from './components/second.js'
import { hot,AppContainer } from 'react-hot-loader';
//                                                                                                                         /*初始化*/
// renderWithHotReload(getRouter());

// /*热更新*/
// if (module.hot) {
//     module.hot.accept('./components/second.js', () => {
//         const getRouter = require('./components/second.js').default;
//         renderWithHotReload(getRouter());
//     });
// }

// function renderWithHotReload(RootElement) {
//     ReactDom.render(
//         <AppContainer>
//         <Second/>
//         </AppContainer>,
//         document.getElementById('root')
//     )
// }                                                                                                                                                                                               
const render = (Component)=>{
  ReactDOM.render((	 
      /* <Router>
            <Switch>
      <Route path="/" component={First}></Route>
          <Route path="/second" component={Second}></Route>
            </Switch>
      </Router>*/
      <Second/>

      ),

  document.getElementById('root')
  );
}
render(Second)


if (module.hot) {  
  module.hot.accept('./components/second.js',()=>{
    alert(123)
    render(Second)
  })  
} 
                                                                                    