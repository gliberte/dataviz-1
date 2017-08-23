import Head from 'next/head'
import Highcharts from 'highcharts'
import moment from 'moment'

moment.locale('es')
class Index extends React.Component{
    state = {
        registros:[1,2,3,4,5,6,7].map(day=>[+moment().add(day,'days'),Math.random()*200])
    }
    componentDidMount() {
        
        this.iniciarGrafica()
        
    }
 
    iniciarGrafica = ()=>{
        Highcharts.chart('grafica',{
            xAxis:{
                type:'datetime'
            },
            series:[
                {
                    name:"peso",
                    data:this.props.registros
                }
            ]
        })
    }
    render(){
        return(
            <div>
        <Head>
            <title>My App</title>
            <meta name="viewport" content="initial-scale=1.0,width=device-width"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/css/materialize.min.css"/>
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
                <div className="col s6">
                    <table className="z-depth-2 hoverable">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Peso (Lbs)</th>
                            </tr>
                        </thead>
                        <tbody>
               
                                {this.props.registros.map(registro=>(
                                    <tr>
                                        <td>{moment(registro[0]).format('LLLL')}</td>
                                        <td>{registro[1]} lbs</td>
                                    </tr>
                                    
                                ))}
                        
                        </tbody>
                        
                    </table>
                </div>
                <div className="col s6">
                    <div id="grafica" className="z-depth-2 hoverable">
                    </div>
                </div>
            </div>
        </meain>
    </div>
        );
    }
}
Index.getInitialProps = function (params) {
    const registros = [1,2,3,4,5,6,7].map(day=>[+moment().add(day,'days'),Math.random()*200])
    return {
        registros
    }
}
export default Index