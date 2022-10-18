const express = require('express')
const app = express()


try {
    const port = process.env.PORT || 3001
    app.listen(port, () => {
        console.log(`Server listening on ${port} port`);
    })
} catch (error) {
    throw new Error('App crashed')
}