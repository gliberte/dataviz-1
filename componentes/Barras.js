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
                text:"Poblacion"
            },
            chart:{
                type:'column'
            },
            yAxis:{
                title:{
                    text:"Hab."
                }
            },
            xAxis:{
                title:{
                    text:"Estado"
                },
                type:'category',
                startOnTick:true
            },
            series:[
                {
                    name:"Poblacion",
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