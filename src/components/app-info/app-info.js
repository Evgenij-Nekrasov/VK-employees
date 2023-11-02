import "./app-info.css";

const AppInfo = ({ emploees, increase }) => {
   return (
      <div className="app-info">
         <h1>Учет сотрудников в компании ВК</h1>
         <h2>Общее число сотрудников: {emploees} </h2>
         <h2>Премию получат: {increase} </h2>
      </div>
   );
};

export default AppInfo;
