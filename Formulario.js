import React from 'react';
import { Formik, Form , Field, ErrorMessage } from 'formik';
const Formulario = () => {
	

	return (
		<>
		<Formik

			validate={(valores)=>{
				let errores ={}
				if(!valores.correo){
				errores.correo = 'introduzca un correo'
				}else if(! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
					errores.correo = 'El formato del correo es invalido. Ej: correo@correo.com'
				}

				if(!valores.nombre){
					errores.nombre = 'introduzca un nombre'
				}else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
					errores.nombre = 'El nombre solo puede contener letras y espacios'
				}

				return errores
			}}
			onSubmit={(valores,{resetForm})=>{
				console.log('enviado!!')
				resetForm()
			}}
			initialValues={{
				nombre: '',
				correo: ''
			}}
		>
			{({errors})=>(
			<Form className='formulario'>
				
				<div> 
					<label htmlFor='nombre'>nombre</label>
					<Field 
					type='text' 					
					id='nombre' 					
					name='nombre' 
					placeholder='your name' 					
					
					/>
					<ErrorMessage 
					name='nombre' 
					component={()=><div className='error'>{errors.nombre}</div>}
					/>
					
				</div>
				<div> 
					<label htmlFor='correo'>correo</label>
					<Field 
					type='text' 
					id='correo' 
					name='correo' 
					placeholder='ejemplo@gmail.com' 
					
					/>
					<ErrorMessage 
					name='correo' 
					component={()=><div className='error'>{errors.correo}</div>}
					/>
				</div>
				<button type='submit'>enviar</button>
			</Form>
			)}
			{/*{({handleChange,values,errors,touched , handleSubmit, handleBlur})=>(
			<form className='formulario' onSubmit={handleSubmit}>
				
				<div> 
					<label htmlFor='nombre'>nombre</label>
					<input 
					type='text' 					
					id='nombre' 					
					name='nombre' 
					placeholder='your name' 					
					value={values.nombre}
					onChange={handleChange}
					onBlur={handleBlur}
					/>
					{touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}
				</div>
				<div> 
					<label htmlFor='correo'>correo</label>
					<input 
					type='text' 
					id='correo' 
					name='correo' 
					placeholder='ejemplo@gmail.com' 
					value={values.correo}
					onChange={handleChange}
					onBlur={handleBlur}
					/>
					{touched.correo && errors.correo && <div className='error'>{errors.correo}</div>}
				</div>
				<button type='submit'>enviar</button>
			</form>
			)}*/}
			</Formik>
		</>
	);
}
 
export default Formulario;