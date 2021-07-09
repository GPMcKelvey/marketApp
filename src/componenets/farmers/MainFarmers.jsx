import { useState } from 'react'
import FarmersHeader from './FarmersHeader';
import Farms from './Farms';
import AddFarm from './AddFarm';


export const MainFarmers = () => {
    const [showAddFarm, setShowAddFarm] = useState(false)
    const [farms, setFarms] = useState([
        {
          id: 1,
          farmName: 'Green Farms',
          description: 'Here at Green Farms we specialize in farming responsibly.',
          socialMedia: 'www.greenfarms.com',
        },
        {
          id: 2,
          farmName: 'Smith Farms',
          description: 'Smith Farms produces the best beets in the state.',
          socialMedia: 'www.smithfarms.com',
        },
        {
          id: 3,
          farmName: 'Happy Farms',
          description: 'We specialize in co-op sourced farming where anyone can volunteer.',
          socialMedia: 'www.happyfarms.com',
        },
      ])

    // Add Farm
    const addFarm = (farm) => {
        const id = Math.floor(Math.random() * 100) + 1
        const newFarm = { id, ...farm }
        setFarms([...farms, newFarm])
    }

    return (
        <div className="container">
            <FarmersHeader 
                onAdd={() => setShowAddFarm(!showAddFarm)}
                showAdd={showAddFarm} />
                {showAddFarm && <AddFarm onAdd={addFarm} />}
                {farms.length > 0 ? <Farms 
                farms={farms} 
            /> : ('No Farms to Show')}
        </div>
    )
}

export default MainFarmers;