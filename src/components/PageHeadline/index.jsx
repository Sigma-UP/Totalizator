import { Box } from '@mui/material';
import { Container } from '@mui/system';
import styles from './style.module.css';

const PageHeadline = (props) => {
    return(
        <Container item className={styles.header}>
            <Box className={styles.centeredText}>
                {props.text}
            </Box>
        </Container>
    )
}
export default PageHeadline;