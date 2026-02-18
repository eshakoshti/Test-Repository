import { useState } from "react";
import img1 from './t4.png'
import img2 from './tv1.png'


function Usestate() {
    const [image, setimage] = useState(img1);
    function change() {
        setimage(img2);
    }
    const [b, setb] = useState('black');
    function changebg() {
        setb('gray');
    }


    return (
        <>
            <div className="justify-items-center">
                <img src={image} className="border-2 p-5 border-gray-300" style={{background:b}} />
                <button type="button" className="text-3xl p-2 border-2 text-white bg-amber-900 mx-150 my-10" onClick={change}>Change Image</button>
                <button type="button" className="text-3xl p-2 border-2 text-white bg-amber-900 mx-150 my-10" onClick={changebg}>Change Color</button>

                </div >
        </>

            );
}
            export default Usestate