import { useState } from 'react'

const AddFarm = ({ onAdd }) => {
  const [farmName, setfarmName] = useState('')
  const [description, setDescription] = useState('')
  const [socialMedia, setsocialMedia] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!farmName) {
      alert('Please add a Farm Name')
      return
    }

    onAdd({ farmName, description, socialMedia })

    setfarmName('')
    setDescription('')
    setsocialMedia('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Farm</label>
        <input
          type='text'
          placeholder='Add Farm'
          value={farmName}
          onChange={(e) => setfarmName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Farm Description</label>
        <input
          type='text'
          placeholder='Add Farm Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set socialMedia</label>
        <input
          type='text'
          placeholder='Add Social Media Links'
          value={socialMedia}
          onChange={(e) => setsocialMedia(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Farm' className='btn btn-block' />
    </form>
  )
}

export default AddFarm