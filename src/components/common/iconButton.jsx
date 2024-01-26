import { Play, Plus } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NavContext from "../../context/navContext";

const IconButton = ({
  className,
  label,
  color,
  iconName,
  jump,
  state: data,
}) => {
  const userID = useContext(NavContext);

  const [icons, setIcons] = useState([
    {
      name: "Play",
      content: <Play color={color} className="btn-icon--mg icon--small" />,
    },
    {
      name: "Plus",
      content: <Plus color={color} className="btn-icon--mg icon--small" />,
    },
  ]);
  return (
    <Link to={jump} className="link--item" state={{ movies: data, userID }}>
      <div className={className}>
        {icons.filter((icon) => icon.name === iconName)[0].content}
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default IconButton;
