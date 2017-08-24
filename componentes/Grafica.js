import Highcharts from 'highcharts'


export default class Class extends React.Component {
    componentDidMount() {
        this.iniciarGrafica(this.props.registros)
    }
    componentWillReceiveProps(nextProps) {
        this.iniciarGrafica(nextProps)
    }
    iniciarGrafica = (nextProps)=>{
        Highcharts.chart('grafica',{
            title:{
                text:"Registro de Peso"
            },
            yAxis:{
                text:"Libras"
            },
            xAxis:{
                title:{
                    text:"Fechas"
                },
                type:'datetime',
                startOnTick:true
            },
            series:[
                {
                    name:"peso",
                    data:nextProps.registros
                }
            ]
        })
    }

    render() {
        return (
            <div id="grafica" className="z-depth-2 hoverable">
            </div>
        );
    }
}