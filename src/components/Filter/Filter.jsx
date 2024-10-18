import Select from "react-select";
import departments from "../../data/departments.json";
import countries from "../../data/countries.json";
import statuses from "../../data/statuses.json";
import UserModal from "../UserModal/UserModal";

const Filter = ({
  selectedDepartment,
  setSelectedDepartment,
  selectedCountry,
  setSelectedCountry,
  selectedStatus,
  setSelectedStatus,
}) => {
  const handleDepartmentChange = (selected) => {
    setSelectedDepartment(selected);
  };

  const handleCountryChange = (selected) => {
    setSelectedCountry(selected);
  };

  const handleStatusChange = (selected) => {
    setSelectedStatus(selected);
  };

  const customStyle = {
    width: "350px",
  };

  const customStyles = {
    container: (provided) => ({ ...provided, ...customStyle }),
    menu: (provided) => ({
      ...provided,
      maxHeight: 150, // Максимальна висота меню
      overflowY: "auto", // Дозволяє прокрутку
    }),
    multiValue: (provided) => ({
      ...provided,
      maxWidth: "100%", // Максимальна ширина для значень
      overflow: "hidden", // Сховати переповнені значення
      textOverflow: "ellipsis", // Додати еліпсис, якщо переповнені
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      whiteSpace: "nowrap", // Зберігає текст в одному рядку
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      cursor: "pointer",
    }),
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {/* Фільтр за департаментами */}
      <Select
        isMulti
        name="departments"
        options={departments.map((dep) => ({
          value: dep.value,
          label: dep.name,
        }))}
        value={selectedDepartment}
        onChange={handleDepartmentChange}
        styles={customStyles}
      />
      {/* Фільтр за країнами */}
      <Select
        isMulti
        name="countries"
        options={countries.map((country) => ({
          value: country.value,
          label: country.name,
        }))}
        value={selectedCountry}
        onChange={handleCountryChange}
        styles={customStyles}
      />
      {/* Фільтр за статусами */}
      <Select
        isMulti
        name="statuses"
        options={statuses.map((status) => ({
          value: status.value,
          label: status.name,
        }))}
        value={selectedStatus}
        onChange={handleStatusChange}
        styles={customStyles}
      />
      <UserModal />
    </div>
  );
};

export default Filter;
