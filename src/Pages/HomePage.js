import Banner from '../Components/Banner';
import Productos from '../Components/Productos';
import Featured from '../Components/Featured';

function HomePage() {

    return (
        <>       
            <Banner />
            <Productos type={"Tortas"} />
            <Productos type={"Tortas"} />
            
            {/* <Productos type={"Tartas"} /> */}
            <Featured />
            <Productos type={"Tortas"} />
            <Productos type={"Tortas"} />
            {/* <Productos type={"Tarteletas"} /> */}
            {/* <Productos type={"Minitortas"} /> */}
        </>
    );
};

export default HomePage