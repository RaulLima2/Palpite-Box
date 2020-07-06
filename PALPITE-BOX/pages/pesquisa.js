import React, {useState} from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 0
    })
    const [sucess, setSucess] = useState(false)
    const [retorno, setRetorno] = useState({})
    const notas = [0, 1, 2, 3, 4, 5]

    const save = async() => {
        try{
            const response = await fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
        })
            const data = await response.json()
            setSucess(true)
            setRetorno(data)

        } catch(err) {
            console.log(err)
        }
    }

    const onChange = event => {
        const value = event.target.value
        const key = event.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    return (
        <div className='pt-6'>
            <PageTitle title='Pesquisa' />
            <h1 className='text-center font-bold my-6 text-2xl'>Criticas e sugestões</h1>
            <p className='text-center mb-6'>
                O restaurante X sempre busca por atender melhor seus clientes. <br />
                Por isso, estamos sempre abertos a ouvir a sua opinião
            </p>
            { !sucess &&  <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Seu nome:</label>
                <input type='text' className='p-4 block shadow bg-blue-300 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} required='required'/>
                <label className='font-bold'>Email:</label>
                <input type='text' className='p-4 block shadow bg-blue-300 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email} required='required'/>
                <label className='font-bold'>Whatsapp:</label>
                <input type='text' className='p-4 block shadow bg-blue-300 my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} required='required'/>
                <label className='font-bold'>Sua crítica ou sugestão:</label>
                <input type='text' className='p-4 block shadow bg-blue-300 my-2 rounded'/>
                <label className='font-bold'>Que nota você daria para o estabelecimento:</label>
                <div className='flex py-6'>
                    { notas.map(nota => {
                        return (<label className='block w-1/6 text-center'>
                            {nota} <br />
                                <input type='radio' name='Nota' value='{nota}' onChange={ onChange }/>
                            </label>)
                        })
                    }
                </div>

                <button className='bg-blue-500 p-5 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Enviar crítica ou sugestão</button>
            </div> }
            { sucess && <div className='w-1/5 mx-auto'> 
                <p className='p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex text-center mb-6' role="alert">Obrigado por contribuir com sua sugestão ou sua crítica.</p>
                {
                    retorno.showCupom && <div className='text-3xl text-center font-bold border p-4 mb-6'>
                        Seu cupom: <br />
                        <span>{retorno.Cupom}</span>
                    </div>
                }
                {
                    retorno.showCupom && <div className='text-center border p-4 mb-6'>
                        <span className='font-bold block mb-2'>{retorno.Promo}</span>
                        <br/>
                        <span className='italic'>Tire o print ou foto desta tela e apresente ao gerente.</span>
                    </div>
                }
                </div>}
        </div>
    )
}

export default Pesquisa