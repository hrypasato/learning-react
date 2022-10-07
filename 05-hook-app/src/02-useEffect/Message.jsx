import { useEffect } from "react"

export const Message = () => {
    useEffect(()=>{
        const onMouseMove = ({ x, y }) =>{
            const coords = { x, y };
            console.log(coords);
        }

        window.addEventListener('mousemove', onMouseMove);

        return () => { //ejecuta cuando se elimina el componente 
            window.removeEventListener('mousemove', onMouseMove);
        }

    }, []);

  return (
    <>
        <h3>Usuario ya existe</h3>
    </>
  )
}
