import { SiGithub, SiKaggle, SiTwitter } from 'react-icons/si'
import {
  Avatar,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material'
import { SiAtCoder, SiSignate } from '../../extend-icons'
import styled from './Name.module.scss'

const Name = () => {
  const isWideScreen = useMediaQuery('(min-width: 950px)')
  return (
    <Grid
      container
      alignItems={'center'}
      justifyContent={'center'}
      direction={'column'}
      style={{ height: '100%' }}
      marginTop={1}
      marginBottom={1}
    >
      <Grid item sx={{ width: '100%' }}>
        <Stack
          direction={isWideScreen ? 'column' : 'row'}
          justifyContent={isWideScreen ? 'center' : 'flex-start'}
          alignItems={'center'}
          gap={3}
          ml={isWideScreen ? 'inherit' : 2}
          mr={isWideScreen ? 'inherit' : 2}
        >
          <Avatar
            className={styled.icon}
            sx={
              isWideScreen
                ? { display: 'block'}
                : { display: 'none' }
            }
            alt='ProfileIcon'
            src="profile.webp"
          />
          <Typography
            variant={isWideScreen ? 'h3' : 'h5'}
            component="h1"
            sx={{ fontWeight: isWideScreen ? 400 : 700 }}
          >
            {isWideScreen ? 'tksnn' : (
              <Stack direction={'row'} alignItems={'center'} gap={2}>
                <Avatar className={styled.miniicon} alt='ProfileIcon' src="profile.webp" />
                tksnn's Portfolio
              </Stack>
            )}
          </Typography>
          <Stack
            direction={'row'}
            gap={1}
            ml={isWideScreen ? undefined : 'auto'}
          >
            <IconButton
              href="https://twitter.com/tksnnnnnnnnn"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SiTwitter size={25} />
            </IconButton>
            <IconButton
              href="https://github.com/tkser"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SiGithub size={25} />
            </IconButton>
            <IconButton
              href="https://www.kaggle.com/tksnnn"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SiKaggle size={25} />
            </IconButton>
            <IconButton
              href="https://signate.jp/users/114309"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SiSignate size={25} />
            </IconButton>
            <IconButton
              href="https://atcoder.jp/users/tksnn"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SiAtCoder size={25} />
            </IconButton>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Name
