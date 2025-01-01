export const handleScroll = (id: string, setIsMenuActive?: any) => {
    if(id === "home") {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Efek scroll yang halus
        });
    }else{
        setIsMenuActive(id)
    }
};