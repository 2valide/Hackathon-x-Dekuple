import Tableau from '../app/components/tableaux';
import Header from '../app/components/Header';
function App(){
  return(
      <div className="h-screen bg-black">
        <Header />
        <Tableau />
      </div>
  );
}

export default App