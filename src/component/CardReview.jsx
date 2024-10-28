import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

// eslint-disable-next-line react/prop-types
export default function CardReview({ title, description, name }) {
  return (
    <Card
      sx={{
        maxWidth: { xs: 250, md: 350, lg: 351 },
        borderTopRightRadius: { xs: 3, md: 3, lg: 15 },
        borderTopLeftRadius: { xs: 3, md: 3, lg: 15 },
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingBottom: 0,
        gap: 0,
      }}
    >
      <CardActionArea>
        <CardContent
          sx={{
            maxHeight: { xs: 200, sm: 300, md: 300, lg: 300 },
            paddingBottom: 0,
            paddingRight: 0,
            paddingLeft: 0,
            backgroundColor: "rgba(255, 255, 255, 0.4)",
          }}
        >
          <Typography
            gutterBottom
            variant="h4"
            fontFamily="Poppins"
            component="div"
            sx={{
              fontSize: { xs: "0.5rem", sm: "0.9rem", md: "1rem" },
              fontWeight: "medium",
              margin: { xs: 1, md: 0.5, lg: 3 },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant=""
            sx={{
              fontFamily: "Poppins",
              fontSize: { xs: "0.5rem", md: "0.7rem", lg: "0.8rem" },
              margin: { xs: 1, md: 0.5, lg: 3 },
              display: "block",
            }}
          >
            {description}
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#445D48",
              width: "100%",
              margin: 0,
              paddingX: { xs: 1, md: 0.5, lg: 3 },
              paddingY: { xs: 1, md: 0.5, lg: 2 },
              fontSize: { xs: "0.5rem", md: "0.7rem", lg: "0.8rem" },
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
