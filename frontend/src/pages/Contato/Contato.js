import React from 'react';
import '../../global.css';
import './Contato.css';
import { useForm } from 'react-hook-form';
import { Button } from "react-bootstrap";

export default function Contato() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    
    return (
        <div className="contato-container">
            <div className="row">
                <h3>Contato</h3>
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h6 className="campos">Nome</h6>
                        <input type="text" placeholder="Nome" name="Nome" ref={register({required: true, maxLength: 200})} />
                        <h6 className="campos">Email</h6>
                        <input type="email" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                        <h6 className="campos">Telefone</h6>
                        <input type="tel" placeholder="Telefone" name="Telefone" ref={register({required: true, minLength: 8, maxLength: 14})} />
                        <h6 className="campos">Assunto</h6>
                        <input type="text" placeholder="Assunto" name="Assunto" ref={register({required: true, maxLength: 100})} />
                        <h6 className="campos">Mensagem</h6>
                        <textarea name="Mensagem" ref={register({maxLength: 1000})} />
                
                        <input name="Developer" type="radio" value="Yes" ref={register({ required: true })}/>
                        <input name="Developer" type="radio" value="No" ref={register({ required: true })}/>
                
                        <Button block bsSize="large" type="submit">
                            Enviar
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
