import React, { useEffect, useState } from 'react'

function OutputScreen({ input }) {

    const [output, setOutput] = useState('');

    useEffect(() => {
        setOutput(input);
    }, [input])


    console.log(typeof(output));
  return (
    <div className='outputScreen'>{output || '0'}</div>
  )
}

export default OutputScreen