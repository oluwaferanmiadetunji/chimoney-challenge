import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Loader = () => {
  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <Skeleton variant="rectangular" width={250} height={250} />
        </Grid>
        <Grid item xs={3}>
          <Skeleton variant="rectangular" width={250} height={250} />
        </Grid>
        <Grid item xs={3}>
          <Skeleton variant="rectangular" width={250} height={250} />
        </Grid>
        <Grid item xs={3}>
          <Skeleton variant="rectangular" width={250} height={250} />
        </Grid>
        <Grid item xs={3}>
          <Skeleton variant="rectangular" width={250} height={250} />
        </Grid>
        <Grid item xs={3}>
          <Skeleton variant="rectangular" width={250} height={250} />
        </Grid>
        <Grid item xs={3}>
          <Skeleton variant="rectangular" width={250} height={250} />
        </Grid>
        <Grid item xs={3}>
          <Skeleton variant="rectangular" width={250} height={250} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Loader;
