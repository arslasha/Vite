import Style from "./stateindex.modul.css"
interface Props {
    index: number;
    setIndex: (value: number) => void;
}

export default function StateIndex({index, setIndex}:Props) {


    function handleClick()
    {
        setIndex(index + 1);
    }

    return (
        <div className={style.handleClick}>
            <h4>{index}</h4>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}