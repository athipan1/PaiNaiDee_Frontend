import { useTranslation } from "react-i18next";

type Props = {
  message: string;
  onRetry: () => void;
};

function ErrorMessage({ message, onRetry }: Props) {
  const { t } = useTranslation();
  return (
    <div className="error-message">
      <p>{message}</p>
      <button onClick={onRetry}>{t("retry")}</button>
    </div>
  );
}

export default ErrorMessage;
