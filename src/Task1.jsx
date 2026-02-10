import Task_component from "./Task _component"  
function Task1() {
    return(
        <>
        <div className="border border-black h-120  m-20 rounded-4xl bg-gray-300" >
            <div className="text-4xl text-blue-800 text-center m-10 font-bold">
                Departments
            </div >
            <div className=" grid grid-cols-3 gap-6 m-3 rounded-4xl">
                    <Task_component heading="Computer Engineering" content="Computer Engineering is a four-year undergraduate program introducing its student to realms of computer, including the theory and design of data storage,software,operating systems." />
                    <Task_component heading="IT Engineering" content="Infornation Technology is an undergraduat engineering course which focuses on expanding and growing in terms of dissemination of knowledge within and outside curriculm and skill devlopment activites" />
                    <Task_component heading="Computer Science" content="Computer Engineering with ML & AI at silver oak Univercity is a 4-year undeergraduat specialization program that presents a solid foundation in the principles and technologies to get on the path of an exciting,sprouting career." />
            </div>
        </div>
        </>
        
    )
}

export default Task1