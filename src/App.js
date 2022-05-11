import "./index.css"
import { useState } from "react"
import React from "react"
import { Formik,Form,Field } from "formik"

const Preview=({valor})=>{
  if(valor==='text') return <div><input type='text'/></div>
}

const App=()=> {
  const[preview,setPreview]=useState('')
return(
  <>
      <Formik
        onSubmit={(valores,{resetForm})=>{
          console.log('Enviado!!')
          resetForm()
        }}

        validate={(valores)=>{
          
          setPreview(valores.elect)
          console.log(valores.elect)
        }}

        initialValues={{
          elect:''
        }}
      >
        {({errors})=>(

          <Form className="formulario">
            <h2 className="form-tittle">creacion de nuevos campos</h2>

            <div>
              <label htmlFor="elect">elija un elemento:  </label>
                <Field as='select' name='elect'>
                  <option value=''>elija una</option>
                  <option value='text'>texto</option>
                  <option value='radio'>radio</option>
                  <option value='check'>check box</option>
                </Field>
              
            </div>
            {preview!=='' && <Preview valor={preview}/>}

            
            <button type='submit'>Agregar</button>
          </Form>
        )}
      </Formik>
      
      
  </>
)
}

export default App;
