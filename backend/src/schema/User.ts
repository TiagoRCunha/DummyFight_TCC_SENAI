import { Schema, model, Document } from 'mongoose'

export interface UserInterface extends Document {
  email?: string
  firstName?: string
  lastName?: string
  fullName(): string
  deleted: boolean
}
const UserSchema = new Schema(
  {
    email: String,
    firstName: String,
    lastName: String,
    deleted: Boolean,
  },
  {
    timestamps: true,
  }
)

UserSchema.methods.fullName = function(): string {
  return this.firstName + ' ' + this.lastName
}
export default model<UserInterface>('User', UserSchema)
