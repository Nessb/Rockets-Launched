import './App.css';
import { gql, useQuery } from '@apollo/client';


function App() {
  const { loading, error, data } = useQuery(gql`
    query GetLaunches {
      launches(limit: 5) {
        launch_date_utc
        launch_success
        rocket {
          rocket_name
        }
        links {
          video_link
        }
        details
      }
    }
  `);

  return (
    <div className="App">
        <h2>Rockets Launched 🚀</h2>
      { data === undefined ? 'Loading' : data.launches.map(
        ({ launch_date_utc, launch_success, rocket, links, details }) => 
        <>
        <p>{launch_date_utc} - {launch_success}</p>
        <p>{links.video_link} - {rocket.rocket_name}</p>
        <p>{details}</p>
        </>
        )}
    </div>
  );
}

export default App;
