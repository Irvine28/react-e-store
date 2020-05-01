import React,{Component} from 'react'

function Title({name,title}) {
        return(
        <div className='row'>
            <div className='col-10 mx-auto my-2 text-center text-title'>
                <h1 className='text-capitaliz font-weight-bold'>
                    {name} 
                    <strong className='text-blue'>
                        <span className='ml-4'>
                            {title}
                        </span>
                    </strong>
                </h1>
            </div>    
        </div>
        )
    
}

export default Title