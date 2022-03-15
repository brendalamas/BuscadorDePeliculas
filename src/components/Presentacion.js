import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const Presentacion = ({imagen, titulo}) => {
    return (
        <Card>
            {/* <img src={imagen} alt="portada de pelicula"/> */}
            <Typography>{titulo}</Typography>
        </Card>
    )
}

export default Presentacion;