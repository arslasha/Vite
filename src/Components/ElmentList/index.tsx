interface Props {
    name: string;
    isPacked: boolean;
}

export default function ElementList({name, isPacked}:Props) {
    let nameElement = name;
    if (isPacked)
    {
        nameElement = name + " ✅";
    }

    return <li>{nameElement}</li>
}