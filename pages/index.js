import Head from 'next/head'
import Highcharts from 'highcharts'
import moment from 'moment'

class Index extends React.Component{
    componentDidMount() {
        console.log(+moment().add(1,'days'))
        const fechas = [1,2,3,4,5,6,7].map(day=>[+moment().add(day,'days'),Math.random()*200])
        console.log(fechas)
        Highcharts.chart('grafica',{
            xAxis:{
                type:'datetime'
            },
            series:[
                {
                    name:"peso",
                    data:fechas
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
                            <tr>
                                <td>{new Date().toLocaleDateString()}</td>
                                <td>205 lb</td>
                            </tr>
                           
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

export default Index