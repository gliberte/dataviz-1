import moment from 'moment'
export default (props)=>(
    <table className="z-depth-2 hoverable">
        <thead>
            <tr>
                <th>Fecha</th>
                <th>Peso (Lbs)</th>
                    </tr>
        </thead>
        <tbody>
                    
            {props.registros.map((registro,index)=>(
                <tr key={index}>
                    <td>{moment(registro[0]).format('LLLL')}</td>
                    <td>{registro[1]} lbs</td>
                </tr>
                                            
            ))}
                                
        </tbody>
                                
    </table>
)