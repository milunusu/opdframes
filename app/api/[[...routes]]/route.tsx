/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  title: 'framesimg', 
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/start', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    action:'/second',
    image: ('https://indigo-advisory-gorilla-502.mypinata.cloud/ipfs/QmVuJU2YPvTqo1AdpZEF62s1ej5JGTTVtmBhUwThYf76F3'),
    
           
    intents: [
      
      <Button value="stats">see delegate's stats</Button>,
      
    ],
  })
})

app.frame('/second', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    action:'/third',
    image: ('https://indigo-advisory-gorilla-502.mypinata.cloud/ipfs/QmfBEXaiyfknq8sxsqbmRkPzHMKGZTjnFaBmo7Jdsd9xVv'),
    
           
    intents: [
      
      <Button value="delegates rec">see degelatestes rec</Button>,
      
    ],
  })
})


app.frame('/third', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    action:'/start',
    image: ('https://indigo-advisory-gorilla-502.mypinata.cloud/ipfs/QmP5moAXx8RthGUbxgnbhHV4Y4GvkdgCq9XVGTcgndi6Rx'),
    
           
    intents: [
      <Button.Link href="https://vote.optimism.io/delegates">Agora</Button.Link>,
      <Button.Link href="https://www.opdelegate.com/">opdelegate</Button.Link>,
      <Button value="apples">back to start</Button>,
      
      
      
    ],
  })
})





devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
