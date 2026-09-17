import React, { useState } from 'react'

const ManualForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        role: "Frontend",
        experience: "",
        cover: ""
    })
    
    const[error, setError] = useState({});
    const[submitted, setSubmitted] = useState(false);

    function setField(field){
        return (ev) => setValues((v) => ({...v, [field]: ev.target.value}))
    }

    function validate(v){
        const err = {}
        if(!v.name.trim()){
            err.name = "Name is required"
        }
        return err;
    }

    function submit(event){
        event.preventDefault()
        const e = validate(values)
        setError(e)
        if(Object.keys(e).length === 0){
            setSubmitted(true)
        }
    }

    if(submitted){
            return (
                <div>
                    <h2>Form Submitted Successfully</h2>
                    </div>
            )
    }

  return (
    <div>
        <form onSubmit={submit} noValidate>
            <label>Full Name
                <input type="text" value={values.name} onChange={setField("name")} />
                {error.name && <p className='error'>{error.name}</p>}
            </label>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ManualForm