import { getTopTen, getById } from '../database/querys'
import { postItemModel} from '../database/models'
import { hasProp } from '../validate'

async function handleGet(req, res) {
  if(hasProp(req.query, "type")) {
    try {
      let data = await getTopTen(postItemModel, req.query.type)
      res.json(data)
    } catch(msg) {
      console.log(msg)
      res.status(500).send(msg)
    }
  } else {
    res.status(500).send({msg: "Bad params"});
  }
}

export default handleGet
