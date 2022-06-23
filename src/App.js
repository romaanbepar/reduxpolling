
import './App.css';
import {useGetRandomQuoteQuery} from './services/qoutes'
function App() {
  const {data,isFetching,isSuccess,refetch}=useGetRandomQuoteQuery(null,{
    pollingInterval:3000,
  })
  return (
    <div className="wrapper">
      <div className="quote">
        {
          isSuccess&&(<> <h4 className="quote__text">
          {data.content}
        </h4>
        <p className="quote__author">{data.author}</p>
          </>)
        }
       
        <button className="quote-button" onClick={refetch}>
          {
            isFetching?(<i className="fas fa-spinner fa-spin"></i>):(<i className="fas fa-sync"></i>)
          }
          
        </button>
      </div>
    </div>
  );
}

export default App;
