import React, {useEffect,useState} from "react";


export const Pagina1 = (props) => {

    const [page, setPage] = useState(
        {
            event1:'',
            event2:'',
            clickCounter:0,
        }
    );

    useEffect(() => {
        console.log("Hola, de esta forma me gatillo sólo al inicio");
    }, []);

    useEffect(() => {
        console.log("Hola, de esta forma me gatillo cada vez que cambie el estado el contador");
    }, [page.clickCounter]);

    useEffect(() => {
        console.log("Cuidado!, me gatillo siempre ante cualquier cambio.");
    });

    const clickEvent1 = () => {
        setPage({
            ...page,
            event1:'Cambie de valor desde mi state [event1]',
            clickCounter: clickCounter+1,
        });
    };

    const clickEvent2 = () => {
        setPage({
            ...page,
            event2:'Cambie de valor desde mi state [event2]',
            clickCounter: clickCounter+1,
        });
    };

    const clickEvent3 = () => {
        setPage({
            ...page,
            event2:'Otro valor para event 2, pero no incremento contador',
        });
    }

    const {event1,event2,clickCounter} = page;
    return(
        
        <>
            <h1>Soy el componente 1</h1>
            <br/>
            <h3>{ props.propiedad }</h3>
            <br/>
            <button className="btn btn-primary" onClick={clickEvent1} >
                Event1
            </button>
            <hr/>
            <button className="btn btn-primary" onClick={clickEvent2} >
                Event2
            </button>
            <hr/>
            <button className="btn btn-primary" onClick={clickEvent3} >
                Prueba Extra
            </button>

            
            <p>Valor Event 1: {event1}</p>
            <p>Valor Event 2: {event2}</p>
            <p>Contador de click {clickCounter}</p>

        </>
    )

}