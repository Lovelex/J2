import { Grid2 } from "@mui/material";
import Dessert from "@/components/junior/q2/Dessert";
import { useQ2Context } from "@/contexts/junior/q2/Q2Context";
import Heading1 from "@/components/junior/q2/Heading1";

function Desserts() {
  const { desserts } = useQ2Context()
  return (
    <>
      <Heading1>
        Desserts
      </Heading1>

      <Grid2 container>
        {
          desserts.map(dessert => (
            <Grid2 key={dessert.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Dessert data={dessert} />
            </Grid2>
          ))
        }
      </Grid2>
    </>
  )
}

export default Desserts
