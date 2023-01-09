import TODOList from "../components/TODOList";
import '../App.css';

function Home() {
  return (
    <div className="Home">
        <h1>TODO List</h1>
        <TODOList></TODOList>
    </div>
  );
}

export default Home;
