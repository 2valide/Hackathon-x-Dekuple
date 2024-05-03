import Tableau from '../app/components/tableaux';
import Header from '../app/components/Header';
import Formulaire from '../app/components/Formulaire';

function App(){
  return(
      <div className="h-screen bg-black">
        <Header />
        <Formulaire />
      </div>
  );
}

export default App