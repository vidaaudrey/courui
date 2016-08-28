import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

// import '../src/css/kss.css';
// import '../src/css/fixed-data-table-base.css';
// import '../src/css/fixed-data-table.css';
// import '../src/css/fixed-data-table-style.css';
// import '../src/css/style.css';
// import '../src/css/coursera.css';
// import '../src/css/slick.css';
// import '../src/css/bootstrap.css';
// import '../src/css/audrey.css';

setAddon(infoAddon);
function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
