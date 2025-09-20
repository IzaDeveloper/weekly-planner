import { useTranslation } from "react-i18next";

function AddTask({ onClickProps }) {
  const { t } = useTranslation();

  return (
    <button
      onClick={onClickProps}
      className="py-2 px-4 text-sm font-medium text-white focus:outline-none bg-blue-500 rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 cursor-pointer"
    >
      {t("add_task")}
    </button>
  );
}

export default AddTask;
