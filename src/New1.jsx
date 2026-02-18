import React, { useEffect, useState } from 'react'

function New1() {
    const [users, setusers] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/users')
                const json_data = await data.json()
                console.log(json_data)
                setusers(json_data)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        fetchData()
        // .then(response => response.json()) // Parse the response body as JSON
        // .then(data => console.log(data)) // Work with the JSON data
        // .catch(error => console.error('Error fetching data:', error));

    }, [])
    return (
        <div>
            <div className='font-bold font-serif text-5xl underline text-amber-950 text-center m-8'>Display Data using Fetch API</div>
            <div className='grid grid-cols-5 justify-center m-5 p-2 border-2 font-serif border-gray-200 text-2xl font-bold'>
                <div>No</div>
                <div>Name</div>
                <div>Email</div> 
                <div>Contact</div>
                <div>Website</div>
            </div>
            {users.map((user) => {
                return (
                    <>
                    <div className='grid grid-cols-5 font-serif justify-center m-5 p-2 border-2 border-gray-200 text-xl'>
                        <div >{user.id}</div>
                        <div >{user.name}</div>
                        <div>{user.email}</div>
                        <div>{user.phone}</div>
                        <div>{user.website}</div>
                    </div>          
                    </>
                )
            })}
        </div>
    )
}

export default New1
