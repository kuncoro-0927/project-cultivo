/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Rating from "@mui/material/Rating";

export default function CardReview({ content, name, wisata }) {
  return (
    <Card
      sx={{
        width: { xs: 200, sm: 260, md: 280, lg: 350 },
        borderTopRightRadius: { xs: 3, md: 3, lg: 15 },
        borderTopLeftRadius: { xs: 3, md: 3, lg: 15 },
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingBottom: 0,
        marginBottom: 7,
      }}
    >
      <CardActionArea>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // Memastikan ada ruang antara elemen
            height: { xs: 240, sm: 240, md: 240, lg: 300 }, // Mengatur tinggi minimum agar konsisten
            paddingBottom: 0,
            paddingRight: 0,
            paddingLeft: 0,
            backgroundColor: "rgba(255, 255, 255, 0.6)",
          }}
        >
          <div className="px-5 sm:px-5 py-1.5 md:px-5 lg:px-6">
            <Typography
              gutterBottom
              variant="h4"
              fontFamily="Poppins"
              component="div"
              sx={{
                fontSize: { xs: "0.5rem", sm: "0.9rem", md: "1rem" },
                fontWeight: "medium",
              }}
            >
              <Rating
                sx={{
                  fontSize: {
                    xs: "1.2rem",
                    sm: "1.2rem",
                    md: "1.3rem",
                    lg: "1.3rem",
                  },
                  marginBottom: {
                    xs: "10px",
                    sm: "15px",
                    md: "18px",
                    lg: "20px",
                  },
                }}
                name="read-only"
                value={5}
                readOnly
              />
            </Typography>
            <Typography
              variant=""
              sx={{
                fontFamily: "Poppins",
                fontSize: {
                  xs: "0.5rem",
                  sm: "0.6rem",
                  md: "0.7rem",
                  lg: "0.8rem",
                },

                display: "block",
              }}
            >
              {content}
            </Typography>
          </div>

          <div className="bg-hijau-tua px-5 py-1.5 md:px-5 lg:px-6">
            <Typography
              sx={{
                width: "100%",
                margin: 0,
                color: "white",
                marginTop: "auto", // Menjaga nama tetap di bawah
                fontSize: {
                  xs: "0.5rem",
                  sm: "0.6rem",
                  md: "0.7rem",
                  lg: "0.8rem",
                },
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                width: "100%",
                color: "white",

                fontSize: {
                  xs: "0.5rem",
                  sm: "0.6rem",
                  md: "0.7rem",
                  lg: "0.8rem",
                },
              }}
            >
              {wisata}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
