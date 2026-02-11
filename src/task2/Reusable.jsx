import Reusable_component from "./Reusable_component"

function Reusable() {
  return (
    <>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-8 m-10">
      <Reusable_component src="https://m.media-amazon.com/images/I/71eEO0CitrL._AC_UY327_FMwebp_QL65_.jpg" heading="Blaupunkt 139 cm(55 inch)QLED Ultra" sellprice="Just ₹34,499*" price="₹39,999 "mrp="₹59,999" />
      <Reusable_component src="https://m.media-amazon.com/images/I/81GOW1BDnaL._AC_UY327_FMwebp_QL65_.jpg" heading="Samsung Crystal 4k 163 cm(65 inch)" sellprice="Just₹72,499*" price="₹72,990 "mrp="₹1,16,900" />
      <Reusable_component src="https://m.media-amazon.com/images/I/81WVbkYiKVL._AC_UY327_FMwebp_QL65_.jpg" heading="Vu 139 cm (55 inch) QLED Ultra HD (4K)" sellprice="Just ₹38,499*" price="₹40,999"mrp="₹65,000" />
      <Reusable_component src="https://m.media-amazon.com/images/I/81d2WyGlYUL._AC_UY327_FMwebp_QL65_.jpg" heading="LG UQ7500 164 cm (65 inch) Ultra HD (4K)" sellprice="Just ₹75,490*" price="₹77,990 "mrp="₹1,14,990" />
      <Reusable_component src="https://m.media-amazon.com/images/I/81WsLknTaCL._AC_UY327_FMwebp_QL65_.jpg" heading="Mi Q1 189.34 cm (75 inch) QLED Ultra HDg" sellprice="Just ₹1,37,499*" price="₹1,44,999"mrp="₹1,99,999" />
      <Reusable_component src="https://m.media-amazon.com/images/I/71CvBMEJW0L._AC_UY327_FMwebp_QL65_.jpg" heading="OnePlus U1S 164 cm (65 inch) Ultra HD (4K)" sellprice="Just ₹57,499*" price="₹59,999"mrp="₹69,999" />
    
    </div>
    </>
  )
}

export default Reusable
