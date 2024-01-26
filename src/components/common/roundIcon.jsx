import { ArrowLeft, Play, Plus, ThumbsUp } from "lucide-react";
import { useState } from "react";

const RoundIcon = ({ className, color = "white", iconName, onClick }) => {
  const [icons, setIcons] = useState([
    {
      name: "Play",
      content: <Play color={color} className="" />,
    },
    {
      name: "Plus",
      content: <Plus color={color} className="" />,
    },
    {
      name: "ThumbsUp",
      content: <ThumbsUp color={color} className="" />,
    },
    {
      name: "ArrowLeft",
      content: (
        <ArrowLeft color={color} className={className} onClick={onClick} />
      ),
    },
  ]);
  return (
    <div className="icon-round">
      {icons.filter((icon) => icon.name === iconName)[0].content}
      {/* <RoundIcon iconName="ThumbsUp" color="#111" className="" /> */}
    </div>
  );
};

export default RoundIcon;
