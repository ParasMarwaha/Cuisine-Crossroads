import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function Category(){
    
    const {register, handleSubmit } = useForm()
    async function onSubmit(data){
        console.log(data)
        
        let response= await fetch("http://localhost:3000/category",{
            method:'POST',
            headers:{"Content-Type":'application/json'},
            body : JSON.stringify(data)
        })
        response = await response.json()
        console.log(response)
        ReadCategory()
    }
    
    const [category,setCategory]= useState([])
    async function ReadCategory(){
        let url = "http://localhost:3000/category"
        let response = await fetch(url)
        response = await response.json()
        console.log(response)
    
        if(response.error!=""){
            console.log(response.error)
        }else{
            setCategory(response.records)
        }
    }

    useEffect(()=>{
        ReadCategory()
    },[])

    async function DeleteCategory(id){
        let url = `http://localhost:3000/category/${id}`
        let response= await fetch(url,{method:'DELETE'})

        response = await response.json()
        console.log(response)
    }
    return(
        <div>
        
        <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className='form-control' type="text" {...register("CategoryName",{required:"This field is required"})} />
            <button className='btn btn-danger'>Add Category</button>
        </form>
        </div>
        <br />
        
        <div className='container'>
        <table>
            <thead>
                <tr>
                    <th>Sr. No</th>
                    <th>CategorName</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {category.map((value,index)=>(<tr key={index}>
                    <td>{index+1}</td>
                    <td>{value.CategoryName}</td>
                    <td><button type='button' className='btn btn-danger ' onClick={()=>DeleteCategory(value.id)}>Delete</button></td>
                </tr>)
                
                )}
            </tbody>
        </table>
        </div>
        </div>
    )
 } export default Category