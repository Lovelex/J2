import { Grid2 } from "@mui/material";
import Dessert from "@/components/junior/q2/Dessert";
import { useQ2Context } from "@/contexts/junior/q2/Q2Context";

function Desserts() {
  const { desserts } = useQ2Context()
  console.log(desserts)

  return (
    <>
      Desserts

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
