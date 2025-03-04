import './Loader.scss'

const Loader = ({ loading }) => {
   // console.log(loading)
   return (
      <>
         {loading && (
            <>
               <div className="overlay"></div>
               <div className="spinner">
                  <div className="loader"></div>
               </div>
            </>
         )}
      </>
   )
}

export default Loader
