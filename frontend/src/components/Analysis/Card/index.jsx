import './style.scss';
import { useTranslation } from 'react-i18next';

const Card = (props) => {
  const { t } = useTranslation();
  return (
    <div className="card fade-up">
      <h3>{t(props.title)}</h3>
      {props.children}
    </div>
  );
}

export default Card;