import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const CreateUser = () => {
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({email: '', pwd: ''})

    const onChange = campo => evt => {
        setForm({
            ...form,
            [campo]: evt.target.value
        })
    }

    if (auth.user !== null) {
        return null
    }

    return(
        <div>        
        <h1>Criar sua conta</h1>
        {
            auth.createUser.createUserState.error != '' && <p>{auth.createUser.createUserState.error}</p>
        }
        <input type="text" placeholder="Seu e-mail" value={form.email} onChange={onChange('email')} />
        <input type="password" placeholder="Sua senha" value={form.pwd} onChange={onChange('pwd')} />
        <button onClick={() => auth.createUser.createUser(form.email, form.pwd)}>Criar</button>
        </div>
    )
}

export default CreateUser