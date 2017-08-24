import moment from 'moment'
export default class Form extends React.Component{
    state = {
        fecha:new Date().getTime(),
        peso:""
    }
    componentDidMount() {
      
    }
    onChange = (e)=>{
        switch (e.target.name){
            case "fecha":
            this.setState({fecha:+moment(e.target.value)})
            break
            case "peso":
            this.setState({peso:e.target.value})
            break
           
        }
    }
    render(){
        return(
            <div className="row">
            <div className={`form-container ${this.props.visible ? "form-container-visible":""} col s4 offset-s4 z-depth-2 light-green lighten-2`}>
                <form>
                    <div className="input-field">
                        <input id="fecha" name="fecha" type="date"  onChange={this.onChange}/>
                        
                    </div>
                    <div className="input-field">
                        <input id="peso" name="peso" type="text" onChange={this.onChange} value={this.state.peso}/>
                        <label htmlFor="peso" className="teal-text">Peso</label>
                    </div>
                    <div className="action">
                        <a className="waves-effect-waves light btn" onClick={()=>this.props.onAceptar(this.state)}>Aceptar</a>
                        <a className="waves-effect-waves light btn" onClick={this.props.onCerrar}>Cerrar</a>

                    </div>
                    
                    
                </form>   
                
          
            </div>
             <style jsx>{
                    `
                        .form-container{
                            position: absolute;
                            top:-500px;
                            z-index:20;
                            padding:20px;
                            font-weight:bold;
                            transition:all 0.3s ease-in-out;
                        }
                        .form-container-visible{
                            top:30%;
                        }
                    `
                }
            </style>  
            </div>
            
          
        );
    }
}