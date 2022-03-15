import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Container sx={{bgcolor:"#111111", mt:75, color:"#ffffff"}}>
            <CardContent sx={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>

                <Box sx={{textAlign:"center", color:"#1976D2"}}>
                    <Typography variant="subtitle1"> 🎥 Movie App </Typography>
                    <Typography  variant="subtitle1"> Hecho con ♡ por Brenda Lamas</Typography>
                </Box>
                <Box>
                    <Link href="https://github.com/brendalamas" underline="none" sx={{p:2}}>
                        <GitHubIcon sx={{fontSize:35}}/>
                    </Link>

                    <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl" underline="none" sx={{p:2}}>
                        <MailIcon sx={{fontSize:35}}/>
                    </Link>

                    <Link href="https://www.linkedin.com/in/brenda-lamas-597b79145/" underline="none" sx={{p:2}}>
                        <LinkedInIcon sx={{fontSize:35}}/>
                    </Link>
                </Box>

            </CardContent>
        </Container>
    )
}

export default Footer;