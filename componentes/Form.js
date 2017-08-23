export default class Form extends React.Component{
    
    componentDidMount() {
        $('.datepicker').pickadate({
            selectMonths:true,
            selectYears:15,
            today:"Hoy",
            clear:"Limpiar",
            close:"Ok",
            closeOnSelect:false
        })
    }
    render(){
        return(
            <div className="row">
            <div className={`form-container ${this.props.visible ? "form-container-visible":""} col s4 offset-s4 z-depth-2 light-green lighten-2`}>
                <form>
                    <div className="input-field">
                        <input id="fecha" name="fecha" type="text" className="datepicker"/>
                        <label htmlFor="fecha">Fecha del Registro</label>
                    </div>
                    <div className="input-field">
                        <input id="peso" name="peso" type="text"/>
                        <label htmlFor="peso">Peso</label>
                    </div>
                    <div className="action">
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