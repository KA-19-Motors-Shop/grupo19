import Img404 from '../../assets/404.svg'


const PageNotFound = ()=>{

    return(
        <figure style={{
            margin: '0px auto',
            width:'80%', 
            display: 'flex',
            height:'100%',
            alignItems:"center",
            maxWidth:"400px"
        }}>
        <img src={Img404} alt="Page not found" 
        style={{
            margin: '0px auto',
            minHeight:'calc(100vh - 210px)',
            height:'100%',
            width:'100%' 
        }}
        />
        <figcaption>Not found</figcaption>
        </figure>
    )

}

export default PageNotFound
