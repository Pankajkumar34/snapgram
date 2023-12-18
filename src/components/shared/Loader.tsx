
import LoaderImg from '/assets/icons/loader.svg'
const Loader = () => {
  return (
    <div className="flex-center w-full">
        <img src={LoaderImg} alt="Loader" width={20} height={24} />
    </div>
  )
}

export default Loader