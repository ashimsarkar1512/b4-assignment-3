import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    role: {
        type: String,
        enum: [ "user"],
        default: "user",
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isDeleted: {
        type: Boolean,
        defult: false
    }
}, { versionKey: false, timestamps: true });




// create a model
export const UserModel = model("user", userSchema);