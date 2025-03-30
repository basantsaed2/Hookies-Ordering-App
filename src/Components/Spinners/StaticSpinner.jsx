import React from 'react'
import { PulseLoader } from 'react-spinners'

const StaticSpinner = () => {
       return (
              <>
                     <div className='w-full h-full flex justify-center items-center'>
                            <PulseLoader color='#000000' size={20} />
                     </div>
              </>
       )
}

export default StaticSpinner