import { UseStore } from "../hooks/useStore";
import { Cube } from "./Cube.jsx";

const Cubes = () => {
    const [cubes] = UseStore(state => [state.cubes])

    return cubes.map(({id,pos,texture})=>{
        return (
            <Cube 
                key={id}
                id={id} 
                position={pos} 
                texture={texture} 
            />
        )
    })
}
export default Cubes
