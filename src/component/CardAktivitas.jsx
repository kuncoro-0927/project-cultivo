import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { LuArrowUpRight } from "react-icons/lu";
// eslint-disable-next-line react/prop-types
export default function CardAktivitas({ title, description, image, price }) {
  return (
    <Card
      sx={{
        width: { xs: 270, md: 350, lg: 371 },
        borderRadius: { xs: 3, md: 3, lg: 5 },
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="" image={image} alt={title} />
        <CardContent sx={{ height: { xs: 140, sm: 150, md: 160, lg: 180 } }}>
          <Typography
            gutterBottom
            variant="h4"
            fontFamily="Poppins"
            component="div"
            sx={{
              fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1rem" },
              fontWeight: "medium",
              marginTop: { xs: 1, md: 0.5, lg: 1 },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant=""
            sx={{
              color: "text.secondary",
              fontFamily: "Poppins",
              fontSize: { xs: "0.5rem", md: "0.7rem" },
              display: "block",
              marginTop: { xs: 1, md: 0.5, lg: 1 },
            }}
          >
            {description}
          </Typography>

          <div className="flex items-center mt-4 md:mb-4">
            <div className="mt-auto">
              <p className="text-[0.5rem] md:text-[0.7rem] md:font-normal">
                Dari
              </p>
              <p className="text-[0.9rem] sm:text-base font-semibold md:text-sm lg:text-base">
                IDR {price}
              </p>
            </div>
            <div className="flex items-center ml-auto mt-2">
              <div className="text-[0.7rem] sm:text-[0.7rem] md:text-[0.6rem] lg:text-xs sm:px-3 px-3 py-1.5 lg:px-4 md:py-2.5 md:px-4 lg:pr-1 lg:py-1 rounded-full bg-hijau-opa bg-opacity-80 hover:bg-hijau-opa hover:opacity-900 duration-300 text-white flex items-center">
                Selengkapnya
                <div className="hidden lg:inline-block md:px-3 md:py-2 bg-hijau-tua text-white md:rounded-full md:ml-2 lg:ml-2 lg:py-3 items-center">
                  <LuArrowUpRight className="lg:text-base" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
