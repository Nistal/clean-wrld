import { Fragment } from 'react/cjs/react.production.min';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionContainer from './components/sectionContainer/SectionContainer';
// import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <SectionContainer />
      <Footer />
    </Fragment>
  );
}

export default App;
