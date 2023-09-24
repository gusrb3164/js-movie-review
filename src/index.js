import '../templates/reset.css';
import '../templates/common.css';
import {Header} from './components/Header.js';

const App = $app => {
  const header = new Header({$parent: $app});
};

const $app = document.getElementById('root');
App($app);
