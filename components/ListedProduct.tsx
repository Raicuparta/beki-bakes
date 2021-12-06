import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  name: string;
  image: StaticImageData;
  price: number;
};

export const ListedProduct = ({ href, name, image }: Props) => {
  return (
    <Grid item xs={12} sm={6}>
      <Card>
        <Link href={href} passHref>
          <CardActionArea component="a">
            <Image
              title={name}
              alt={name}
              src={image}
              layout="responsive"
              width={4}
              height={3}
              objectFit="cover"
              sizes="200px"
              priority
            />
            <CardContent sx={{ py: 1 }}>
              <Typography variant="h6" textAlign="center">
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
};
