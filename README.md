# express-app-netlify

### Netlify settings:
To fix "error:0308010C:digital envelope routines::unsupported" problem.

Please add an Environment variables
```
key: NODE_OPTIONS
value: --openssl-legacy-provider
```

Deploy demo: https://davidliu-express.netlify.app/
