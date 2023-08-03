import Image from "next/image";

const Loading = () => {
    return (
        <div style={{zIndex:1000000,position:"absolute", top:0, left:0, width:'100vw', height:'100vh', background:"white", display:'flex', justifyContent:"center", alignItems:"center"}}>
            <Image src={'/loading.gif'} alt={'loading'} width={200} height={200}/>
        </div>
    );
};

export default Loading;