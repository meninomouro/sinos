import React, { Component } from 'react';
import './Cadastro.css';

export default function Cadastro() {
    
    function handleProjectNo(){
        var projeto = window.document.querySelector("div.projeto-social")
        projeto.style.display = "none"
    }
    function handleProjectYes(){
        var projeto = window.document.querySelector("div.projeto-social")
        projeto.style.display = "grid"
    }
    function handleUniversitaryNo(){
        var universitary = window.document.querySelector("div.universitario")
        universitary.style.display = "none"
    }
    function handleUniversitaryYes(){
        var universitary = window.document.querySelector("div.universitario")
        universitary.style.display = "grid"
    }
    function handleOrchestraNo(){
        var orchestra = window.document.querySelector("div.orquestra")
        orchestra.style.display = "none"
    }
    function handleOrchestraYes(){
        var orchestra = window.document.querySelector("div.orquestra")
        orchestra.style.display = "grid"
    }
    function handleTeacherNo(){
        var teacher = window.document.querySelector("div.professor")
        teacher.style.display = "none"
    }
    function handleTeacherYes(){
        var teacher = window.document.querySelector("div.professor")
        teacher.style.display = "grid"
    }
  
        return (
            <div className="register-container">
                <div className="container">
                    <form>
                        <h2>Cadastre-se</h2>
                        <div className="main-content">
                            <input type="text" placeholder="Nome"/>
                            <input type="text" placeholder="E-mail"/>
                            <input type="text" placeholder="Idade"/>
                            <input type="text" placeholder="Telefone"/>
                            <input type="text" placeholder="Cidade"/>
                            <input type="text" placeholder="Estado"/>  
                        </div>
                        
                        <div className="radio-group">
                            <h4>É estudante de música? *</h4>
                            <label forHtml="yes">Sim</label>
                            <input type="radio" name="estudante" id="yes" defaultChecked/>
                            <label forHtml="no">Não</label>
                            <input type="radio" name="estudante" id="no"/>
                         </div>
                         <div className="radio-group">
                            <h4>Toca/estuda em projeto social? *</h4>
                            <label forHtml="yes">Sim</label>
                            <input type="radio" name="projeto" id="yes" onChange={handleProjectYes} />
                            <label forHtml="no">Não</label>
                            <input type="radio" name="projeto" id="no" onChange={handleProjectNo} defaultChecked/>
                         </div>
                         <div className="projeto-social">
                             <input type="text" placeholder="Nome do projeto"/>
                             <input type="text" placeholder="Instrumento que toca"/>
                         </div>
                         <div className="radio-group">
                         <h4>Estudante universitário? *</h4>
                            <label forHtml="yes">Sim</label>
                            <input type="radio" name="universitario" id="yes" onChange={handleUniversitaryYes}/>
                            <label forHtml="no">Não</label>
                            <input type="radio" name="universitario" id="no" onChange={handleUniversitaryNo} defaultChecked/>
                         </div>
                         <div className="universitario">
                             <input type="text" placeholder="Instituição"/>
                             <input type="text" placeholder="Curso"/>
                              Nível acadêmico <select name="nivel" id="nivel">
                                 <option value="Graduação">Graduação</option>
                                 <option value="Pós=graduação">Pós-graduação</option>
                                 <option value="Mestrado">Mestrado</option>
                                 <option value="Doutorado">Doutorado</option>
                             </select>
                         </div>
                         <div className="radio-group">
                            <h4>Músico profissional? *</h4>
                            <label forHtml="yes">Sim</label>
                            <input type="radio" name="musico" id="yes"/>
                            <label forHtml="no">Não</label>
                            <input type="radio" name="musico" id="no"  defaultChecked/>
                         </div>
                         <div className="radio-group">
                            <h4>Toca em orquestra? *</h4>
                            <label forHtml="yes">Sim</label>
                            <input type="radio" name="orquestra" id="yes" onChange={handleOrchestraYes} />
                            <label forHtml="no">Não</label>
                            <input type="radio" name="orquestra" id="no"  onChange={handleOrchestraNo} defaultChecked/>
                         </div>
                         <div className="orquestra">
                             <input type="text" placeholder="Nome da orquestra"/>
                             <input type="text" placeholder="Instrumento que toca"/>
                         </div>
                         <div className="radio-group">
                            <h4>Professor de música?*</h4>
                            <label forHtml="yes">Sim</label>
                            <input type="radio" name="professor" id="yes" onChange={handleTeacherYes} />
                            <label forHtml="no">Não</label>
                            <input type="radio" name="professor" id="no" onChange={handleTeacherNo} defaultChecked/>
                         </div>
                         <div className="professor">
                             <input type="text" placeholder="Instituição ou projeto social"/>
                             <input type="text" placeholder="Disciplina e/ou instrumento"/>
                         </div>
                         <div className="how">
                             <h4>Como conheceu o projeto?</h4>
                            <select id="como">
                             <option disabled selected>Opções:</option>
                             <option value="Redes sociais">Redes sociais</option>
                             <option value="Sites de busca">Sites de busca</option>
                             <option value="Amigos">Amigos</option>
                             <option value="E-mail">E-mail</option>
                         </select>
                         Outros:<input type="text"/>
                         </div>
                         <h4>Qual o seu principal objetivo com o conteúdo oferecido pelo SINOS?*</h4>
                         <textarea id="about" rows="4" cols="10">   
                         </textarea>
                         <button type="submit">
                             Efetuar cadastro
                         </button>

                    </form>
                </div>
            </div>
        )
    }
  