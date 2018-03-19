import { postItemModel } from '../database/models'
import { validatePostItem } from '../validate'

function handlePost(req, res) {

  if(validatePostItem(req.body)) {

    // Create instance of the data
    const data = new postItemModel(Object.assign(req.body, {
      type: 'math',
      comments: [],
      createdAt: Date.now(),
      meta: {
        upvotes: 0,
        rating: 0
      }
    }))

    // Save data
    data.save(err => {
      if(err) {
        res.status(500).send({ msg: 'Error saving data!: ' + err})
        return
      }
      res.json(req.body)
    })
  } else {
    // If not valid
    res.status(500).send({ msg: 'Not valid object' });
  }

}

export default handlePost
