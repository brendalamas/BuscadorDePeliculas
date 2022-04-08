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
        <Box sx={{bgcolor:"#000000", pl:40,pr:40}}>
            <CardContent sx={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                <Box sx={{textAlign:"center"}}>
                    <Typography variant="subtitle1" color="#1976D2" fontWeight="bold"> 
                        🎥 Movie App 
                    </Typography>
                    <Typography  variant="subtitle1" color="#1976D2" fontWeight="bold"> 
                        Hecho con ♡ por Brenda Lamas
                    </Typography>
                </Box>
                <Box>
                    <Link href="https://github.com/brendalamas" underline="none" sx={{p:2}}>
                        <GitHubIcon sx={{fontSize:35, color:"#1976D2"}}/>
                    </Link>

                    <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl" underline="none" sx={{p:2}}>
                        <MailIcon sx={{fontSize:35, color:"#1976D2"}}/>
                    </Link>

                    <Link href="https://www.linkedin.com/in/brenda-lamas-597b79145/" underline="none" sx={{p:2}}>
                        <LinkedInIcon sx={{fontSize:35, color:"#1976D2"}}/>
                    </Link>
                </Box>

            </CardContent>
        </Box>
    )
}

export default Footer;