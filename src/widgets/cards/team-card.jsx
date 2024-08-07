import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCard({ img, name, major, position, href, socials }) {
  return (
    <Card color="transparent" shadow={false} className="text-center">
      <Avatar
        src={img}
        alt={name}
        size="xxl"
        variant="rounded"
        className="h-full w-full shadow-lg shadow-gray-500/25"
      />
      <Typography variant="h5" color="white" className="mt-6 mb-1">
        {name}
      </Typography>
      {major && (
        <Typography className="font-bold text-blue-gray-500">
          {major}
        </Typography>
      )}
      {position && (
        <Typography className="font-bold text-blue-gray-500">
          {position}
        </Typography>
      )}
      
      
      {socials && 
        <div className="mx-auto mt-1">{socials}
        
        </div>
      }
    </Card>
  );
}

TeamCard.defaultProps = {
  major: "",
  position: "",
  href: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  major: PropTypes.string,
  position: PropTypes.string,
  href: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
