import { Box } from '@mui/material';
import { Container } from '@mui/system';
import styles from './style.module.css';
const TaskHeader = () => {
    return(
        <Container item className={styles.header} sx={{maxWidth:'lg'}}>
            <Box className={styles.centeredText}>
                ALL TASKS
            </Box>
        </Container>
    )
}
export default TaskHeader;