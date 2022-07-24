export const Loader = ({ loadingText }: any) => {
  return (
    <>
      <span>
        <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full mr-2" role="status">
          <span className="visually-hidden"></span>
        </div> {loadingText} ...
      </span></>
  )
}
export const Button = ({ loadingText, loading, setLoading, text, active, secondary, rest, onClick, btnType, disabled, btnImage, btnSize }: any) => {
  return (
    <>
      <button onClick={onClick}
        disabled={loading || disabled}
        type="submit"
        className={`${(btnType === "primary") ? `mt-6 w-full bg-blue-900 rounded-md border border-transparent py-3 px-8 flex items-center justify-center  font-semibold text-white transform transition duration-300  hover:bg-white hover:text-blue-900 hover:border-1 hover:border-blue-900` : ""} ${(btnType === "secondary") ? `mt-6 w-full bg-white rounded-md border border-transparent py-3 px-8 flex items-center justify-center font-semibold text-blue-900 transform transition duration-300  hover:bg-white hover:text-blue-900 hover:border-1 hover:border-blue-900` : ""} ${(btnSize === "sm") ? `text-sm` : ""} `} >
        {loading ?
          <Loader loadingText={loadingText} /> :
          <span> {btnImage ? <img
            className=" h-auto w-auto ml-2 mr-2 inline "
            src={`${btnImage}`}
            alt="Workflow"
          /> : ""}
            {text}</span>}
      </button>
    </>
  )
}
