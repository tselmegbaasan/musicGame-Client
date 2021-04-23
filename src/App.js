import { Switch, Route } from "react-router-dom";
import { Navbar } from './components'
import Footer from "./components/Footer";
import {NewGame, AlbumGame, LyricsGame, Home} from "./components/pages";
import AppStateProvider from './store/AppStateProvider';

const App = () => {

  return (
    <AppStateProvider>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/newGame' exact component={NewGame} />
        <Route path='/lyricsGame' exact component={LyricsGame} />
        <Route path='/albumGame' exact component={AlbumGame} />
      </Switch>
      <Footer />
    </div>
    </AppStateProvider>
  );
}

export default App;
