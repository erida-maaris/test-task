import WeatherTable from './components/WeatherTable';
import Coords from './components/Coords';
import Sidebar from './components/Sidebar';

const App = () => {

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-500 text-white p-4 text-lg flex justify-between items-center">Responsive Header</header>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto p-4">
          <Coords />
          <WeatherTable />
        </main>
      </div>
    </div>
  );
};

export default App;
