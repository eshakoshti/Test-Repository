const price=[1,2,3,4,5,6,7]
function Task3(){
    return(
        <div>
            {price.map((index) =><h1 key={index}>{index}</h1>)}
        </div>
    )
}

export default Task3