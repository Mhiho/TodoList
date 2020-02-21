import React, {Component, Fragment} from 'react'

interface IProps {

}
//Nie działa mi ten hoc jak chciałem, chciałem żeby globalnie wyłapywał błędy, wydawało mi się
// że jak przeniosę getAllTodos do componentDidMount w TodoList to będzie ok, ale nie jest więc 
//wracam do poprzedniej idei, że zaciąga mi w indexie, żeby mi nie odświeżało todosów
interface IState  {
    error: any
}
const errorHandler = ( WrappedComponent:any, axios:any ) => {
  return class extends Component {
      state = {
          error: null
      }

      componentWillMount () {
          axios.interceptors.request.use((req: any) => {
              this.setState({error: null});
              return req;
          });
          axios.interceptors.response.use((res: any) => res, (error: any) => {
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
                    
                      {this.state.error ? this.state.error : null}
                  </div>
                  <WrappedComponent {...this.props} />
              </div>
          );
      }
  }
}

export default errorHandler;