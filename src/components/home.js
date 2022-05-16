
import { Button } from "@mui/material";



const Home = ({ Username })=> {

    const getSum = (a,b) => {
        return a + b ;
    }

    const myCard = (link,tite,caregory)=> {
        return(
            <div className="card">
                <img src={link} alt="" className="card-img-top" />
                <div className="card-body">
                    <h1>{tite}</h1>
                    <p>{caregory}</p>
                </div>
                <Button varient="Contained">View More</Button>
            </div>
        )
    } 


    return(
        <div>
            <h3 className="text-center bg-dark text-white">{Username}</h3>
            <h1>Home Components</h1>
            <h2>{getSum(23,53)}</h2>
            
            
           

            <div className="row">
                <div className="col-md-4">{myCard("https://bgr.com/wp-content/uploads/2022/02/doctor-strange-2-trailer-2-super-bowl-10.jpg?quality=82&strip=all&w=1440&h=810&crop=1", "The Doctor","Yeh doctor strange hai")}</div>
                <div className="col-md-4">{myCard("https://m.media-amazon.com/images/M/MV5BZDg5ZDg2MWQtM2ExNi00ZjEzLTgzMDQtZmJlYWEwYmM4ODUxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg","The New Doctor","It was second")}</div>
                <div className="col-md-4">{myCard("https://cdn.vox-cdn.com/thumbor/8w6m6Sdl8fkNt7UWPJr5hhNasqA=/0x0:1500x750/1400x1400/filters:focal(762x94:1002x334):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/51717777/strange.0.jpg","Yeh Jaddu karega","Yeh jadu wala hai")}</div>
            </div>
        </div>
    );
};


export default Home;