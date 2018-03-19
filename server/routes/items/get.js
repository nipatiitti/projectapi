import { getById } from '../../database/querys'
import { postItemModel} from '../../database/models'
import { hasProp } from '../../validate'

async function handleGet(req, res) {
  if(hasProp(req.params, 'id')) {
    try {
      let data = await getById(postItemModel, req.params.id)
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
