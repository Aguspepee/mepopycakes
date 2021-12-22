import Banner from '../Components/Banner';
import Productos from '../Components/Productos';
import Featured from '../Components/Featured';
import BasicBreadcrumbs from '../Components/BasicBreadcrumbs';



function HomePage() {

    return (
        <>       
            <Banner />
            <BasicBreadcrumbs  />
            <Productos type={"Tortas"} />
            <Productos type={"Tartas"} />
            <Featured />
            <Productos type={"Tarteletas"} />
            <Productos type={"Minitortas"} />
        </>
    );
};

export default HomePage