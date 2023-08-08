import { Schema, Model, connection, SchemaTypeOptions } from 'mongoose'
import { mongoConnect } from '../database/mongodb'
mongoConnect();

type Usertype = {
  name: string
  email: string
  password: string
}

const userSchema = new Schema<Usertype>(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String }
  },
  { collection: 'users' }
)
const modelName = 'User' as any
export default connection && connection.models[modelName]
  ? (connection.models[modelName] as Model<Usertype>)
  : new Model<Usertype>(modelName, userSchema)
