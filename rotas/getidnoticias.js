module.exports = (app) => {
  app.get('/noticias/id/:id', async (req, res) => {
    const id = ObjectId.createFromHexString(req.body.id)
    await app.DBClient.connect();
    const noticias = await app.DBClient.db('portalnoticias')
      .collection('noticias').find().toArray();
    console.log(noticias);
    res.json(noticias)
  })
}