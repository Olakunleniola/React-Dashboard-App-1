import TopBox from "../../component/topbox/TopBox";
import "./home.scss";
import LineChartBox from "../../component/lineChartBox/LineChartBox";
import { chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion,  } from "../../data";
import BarChartBox from "../../component/barChartBox/BarChartBox";
import { barChartBoxRevenue, barChartBoxVisit } from "../../data";
import PieChartBox from "../../component/pieChartBox/PieChartBox";
import BigChartBox from "../../component/bigChartBox/BigChartBox";


function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <LineChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <LineChartBox {...chartBoxProduct} />
      </div> 
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <LineChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <LineChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue} /></div>
    </div>
  );
}

export default Home;
