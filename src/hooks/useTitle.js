const { useEffect } = require("react")

const useTitle = title =>{
    useEffect(() =>{
        document.title =`${title} - Tripify Travel Agency`;
    },[title])
}

export default useTitle;