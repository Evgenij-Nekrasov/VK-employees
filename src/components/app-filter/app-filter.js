import "./app-filter.css";

const AppFilt = ({ nameButton, onUpdateFilter }) => {
   const buttonsData = [
      { name: "all", label: "Все сотрудники" },
      { name: "rise", label: "На повышение" },
      { name: "moreThen1000", label: "З/П больше чем 1000$" },
   ];

   const buttons = buttonsData.map(({ name, label }) => {
      const active = nameButton === name;
      const clazz = active ? "btn-light" : "btn-outline-light";
      return (
         <button
            className={`btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => onUpdateFilter(name)}
         >
            {label}
         </button>
      );
   });

   return <div className="btn-group">{buttons}</div>;
};

export default AppFilt;
