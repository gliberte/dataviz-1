import Button from 'material-ui/Button'
import axios from 'axios'
import Barras from '../componentes/Barras'

class Index2 extends React.Component{
    state={
        series:[]
    }
    onClick = async ()=>{
        try {
        const result = await axios.get("https://api.census.gov/data/2014/pep/natstprc?get=STNAME,POP&DATE=7&for=state:*")
        console.log(result.data)
        const series = result.data.map((item,index)=>{
        
            return [item[0],+item[1]]
        
        })
        series.splice(0,1)
        
        this.setState({
            series
        })
        } catch (error) {
            console.log(error.message)
        }
    }
    render(){
        return(
            <div>
                <Button onClick={this.onClick}>
                Aceptar
                </Button>
                <Barras registros={this.state.series}/>
            </div>
            

        );
    }
}



export default Index2