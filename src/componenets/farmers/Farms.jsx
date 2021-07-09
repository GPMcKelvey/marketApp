import Farm from "./Farm"

const Farms = ({ farms }) => {
    return (
        <div>
           {farms.map((farm) => (
           <Farm 
            key={farm.id}
            farm={farm}
            />
           ))} 
        </div>
    )
}

export default Farms
