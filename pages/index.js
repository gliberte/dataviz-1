import Head from 'next/head'
import Grafica from '../componentes/Grafica'
import moment from 'moment'
import Tabla from '../componentes/Tabla'
import Form from '../componentes/Form'

moment.locale('es')
class Index extends React.Component{
    state = {
        registros:[],
        modal:false
    }
    componentDidMount() {
        $('.modal').modal();
    }
    
    onAgregarRegistro = ()=>{

        Materialize.toast('I am a toast!', 4000)
        this.setState({
            modal:true
        })
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
                <main>
                    <Form visible={this.state.modal} onCerrar={()=>this.setState({modal:false})}/>
                    <div className="valign-wrapper">
                        <h2>Registro Diario de Peso</h2>
                    </div>
                    <div className="row">
                        <div className="col l6 m12 s12">
                            <Grafica registros={this.state.registros}/>
                            
                        </div>
                        <div className="col l6 m12 s12">
                            <a className="btn-floating btn-large waves-effect waves-light red botonadd"  onClick={this.onAgregarRegistro}><i className="material-icons">add</i></a>
                            
                            <Tabla registros={this.state.registros}/>
                        </div>
                    </div>
                </main>
                <style jsx>{
                    `.botonadd{
                        position: absolute;
                        top:80%;
                        right: 10%;
                        z-index:20;
                    }
                    `
                }</style>
                
            </div>
        );
    }
}

export default Index