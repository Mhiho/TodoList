import React, {Component} from 'react'
import {Error} from '../styles/mainStyle'
// interface IProps {

// }

// interface IState  {
//     error: any 
// }
const errorHandler = ( WrappedComponent, axios) => {
  return class extends Component {
      state = {
          error: null 
      }

      UNSAFE_componentWillMount () {
          axios.interceptors.request.use((req) => {
              this.setState({error: null});
              return req;
          });
          axios.interceptors.response.use((res) => res, (error) => {
              this.setState({error: error});
          });
      }

      errorConfirmedHandler = () => {
          this.setState({error: null});
      }

      render () {

          return (
              <div>
                  <div>
                    
                      {this.state.error != null ? (<Error>`Coś poszło nie tak: {this.state.error.message}  `</Error>) : null}
                  </div>
                  <WrappedComponent {...this.props} />
              </div>
          );
      }
  }
}

export default errorHandler;
//Musiałem przebudować routing bo odświeżało mi todosy przy powrocie do głównego routa, ale
// dzięki temu skryptowi działa mi globalna obsługa błędów
// Wystarczy popsuć request get
//mialem tu problem z typowaniem, this.state.error!.message ciągle wyrzucał błąd, dlatego
// zmieniłem na .js