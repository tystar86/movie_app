const { parse } = require('url');
const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { response } = require('express');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const filePath = './data.json'
const moviesData = require(filePath)

app.prepare().then(() => {

  const server = express();
  server.use(bodyParser.json())

  server.get('/api/movies', (req, res) => {
    return res.json(moviesData)
  })

  server.get('/api/movies/:id', (req, res) => {
    const movieID = req.params.id
    const movie = moviesData.find(movie => movie.id == movieID)
    return res.json(movie)
  })

  server.post('/api/movies', (req, res) => {
    const movie = req.body
    moviesData.push(movie)
    const pathToFile = path.join(__dirname, filePath)
    const stringyfiedData = JSON.stringify(moviesData, null, 2)

    fs.writeFile(pathToFile, stringyfiedData, (error) => {
      if (error) {
        return res.status(422).send(error)
      }
      return res.json('Movie has been successfully added.')
    })
  })

  server.patch('/api/movies/:id', (req, res) => {
    const movie = req.body
    const movieID = req.params.id
    const movieIndex = moviesData.findIndex(movie => movie.id == movieID)
    
    moviesData[movieIndex] = movie

    const pathToFile = path.join(__dirname, filePath)
    const stringyfiedData = JSON.stringify(moviesData, null, 2)

    fs.writeFile(pathToFile, stringyfiedData, (error) => {
      if (error) {
        return res.status(422).send(error)
      }
      return res.json(movie)
    })
  })

  server.delete('/api/movies/:id', (req, res) => {
    const movieID = req.params.id
    const movieIndex = moviesData.findIndex(movie => movie.id == movieID)
    moviesData.splice(movieIndex, 1)

    const pathToFile = path.join(__dirname, filePath)
    const stringyfiedData = JSON.stringify(moviesData, null, 2)

    fs.writeFile(pathToFile, stringyfiedData, (error) => {
      if (error) {
        return res.status(422).send(error)
      }
      return res.json('Movie has been successfully deleted.')
    })
  })

  const PORT = process.env.PORT || 3000;

  server.use(handle).listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
  })
})