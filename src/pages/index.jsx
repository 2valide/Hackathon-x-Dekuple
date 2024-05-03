import Tableau from '../app/components/tableaux';
import Header from '../app/components/Header';
import Formulaire from '../app/components/Formulaire';
import NewHeader from '../app/components/NewHeader';


function App(){
  return(
      <div className="h-screen bg-black">
        <NewHeader />
        <Formulaire />
      </div>
  );
}

export default App