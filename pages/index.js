import Head from 'next/head'
import Grafica from '../componentes/Grafica'
import moment from 'moment'


moment.locale('es')
class Index extends React.Component{
    state = {
        registros:[]
    }
    
    
    onAgregarRegistro = ()=>{
        const nuevoregistro = [+moment(),Math.random()*200]
        this.setState({
            registros:[...this.state.registros,nuevoregistro]
        })
        console.log(this.state.registros)
    }
    render(){
        return(
            <div>
                <Head>
                    <title>My App</title>
                    <meta name="viewport" content="initial-scale=1.0,width=device-width"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/css/materialize.min.css"/>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js"></script>
                </Head>
                <header>
                    <nav className="nav-wrapper cyan">
                        <a href="#" className="brand-logo">Mi Registro de Peso</a>
                    </nav>
                </header>
                <meain>
                    <div className="valign-wrapper">
                        <h2>Registro Diario de Peso</h2>
                    </div>
                    <div className="row">
                        <div className="col l6 m12 s12">
                            <Grafica registros={this.state.registros}/>
                            
                        </div>
                        <div className="col l6 m12 s12">
                            <a className="btn-floating btn-large waves-effect waves-light red botonadd" onClick={this.onAgregarRegistro}><i className="material-icons">add</i></a>
                            <table className="z-depth-2 hoverable">
                                <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Peso (Lbs)</th>
                                    </tr>
                                </thead>
                                <tbody>
                    
                                        {this.state.registros.map((registro,index)=>(
                                            <tr key={index}>
                                                <td>{moment(registro[0]).format('LLLL')}</td>
                                                <td>{registro[1]} lbs</td>
                                            </tr>
                                            
                                        ))}
                                
                                </tbody>
                                
                            </table>
                        </div>
                    </div>
                </meain>
                <style jsx>{
                    `.botonadd{
                        position: absolute;
                        top:80%;
                        right: 10%;
                    }
                    `
                }</style>
            </div>
        );
    }
}

export default Index