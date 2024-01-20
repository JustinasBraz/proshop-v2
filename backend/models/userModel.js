import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const userSchema = new mongoose.Schema({
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
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
},{
    timestamps: true,
});


userSchema.methods.matchPassword = async function(enteredPasssword) {
    return await bcrypt.compare(enteredPasssword, this.password);
};

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
});

const User = new mongoose.model("User", userSchema);

export default User;



