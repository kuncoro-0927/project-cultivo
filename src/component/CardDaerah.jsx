// src/components/CardDaerah.jsx

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
export default function CardDaerah({ title, description, image }) {
  return (
    <>
      <Card
        sx={{
          width: { xs: 150, sm: 195, md: 210, lg: 250 },
          borderRadius: { xs: 3, lg: 5 },
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{
              height: { xs: 130, sm: 180, md: 185, lg: 250 },
              objectFit: "cover",
            }}
            component="img"
            image={image} // Menggunakan image dari props
            alt={title}
          />
          <CardContent sx={{ maxHeight: { xs: 100, md: 300 } }}>
            <Typography
              gutterBottom
              variant="h4"
              fontFamily="Poppins"
              component="div"
              sx={{
                fontSize: { xs: "0.7rem", md: "1rem" },
                fontWeight: "medium",
                display: "flex",
                alignItems: "center",
              }}
              marginTop={"1rem"}
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ marginRight: "0.7rem" }}
              />
              {title}
            </Typography>

            <Typography
              variant=""
              sx={{
                color: "text.secondary",
                fontFamily: "Poppins",
                fontSize: { xs: "0.8rem", md: "0.7rem" },
                display: { xs: "none", md: "block" },
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
