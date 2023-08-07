import Image from "next/image";

export const metadata = {
    title: 'SAFE LIFE',
}


const Loading = () => {
    return (
        <div style={{zIndex:1000000,overflow:"hidden",position:"fixed", top:0, left:0, width:'100vw', height:'100vh', background:"white", display:'flex', justifyContent:"center", alignItems:"center"}}>
            <Image src={'/loading.gif'} alt={'loading'} width={200} height={200}/>
        </div>
    );
};

export default Loading;