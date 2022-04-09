const Loader = ({isLoading}) => {
    return (
    
        isLoading && <div className="lds-hourglass"></div>
    )
}

export default Loader;