import { Box, Card, CardContent, Container, Divider, Stack, Typography } from '@mui/material'

const History = () => {
  return (
    <Container disableGutters sx={{ marginBlock: '10px' }}>
      <Typography variant="h5" component="h1">
        History
      </Typography>
      <Divider sx={{ marginBottom: '7px' }} />
      <Container>
        <Stack spacing={.25}>
          <Box p={.5}>
            <Card>
              <CardContent style={{paddingBlock: "5px"}}>
                <Typography component="div" variant="subtitle1">
                  <Stack direction={"row"} gap={1}>
                    <div style={{minWidth: "60px"}}>
                      2020/4
                    </div>
                    <div style={{minWidth: "10px"}}>
                      ~
                    </div>
                    <div style={{minWidth: "60px"}}>
                      2023/3
                    </div>
                    <div style={{marginLeft: "10px"}}>
                      {["早", "稲", "田", "高", "等", "学", "校"].map((v, i) => (
                        <span key={i} style={{marginLeft: "-10px"}}>{"\u2004"+v+"\u2004"}</span>
                      ))}
                    </div>
                  </Stack>
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box p={.5}>
            <Card>
              <CardContent style={{paddingBlock: "5px"}}>
                <Typography component="div" variant="subtitle1">
                  <Stack direction={"row"} gap={1}>
                    <div style={{minWidth: "60px"}}>
                      2023/4
                    </div>
                    <div style={{minWidth: "10px"}}>
                      ~
                    </div>
                    <div style={{minWidth: "60px"}}>
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      {["信","州","大","学","工","学","部","電","子","情","報","シ","ス","テ","ム","工","学","科"].map((v, i) => (
                        <span key={i} style={{marginLeft: "-10px"}}>{"\u2004"+v+"\u2004"}</span>
                      ))}
                    </div>
                  </Stack>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </Container>
    </Container>
  )
}

export default History
