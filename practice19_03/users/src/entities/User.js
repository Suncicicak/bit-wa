class User {
    constructor (user) {
        this.photo = user.picture.medium
        this.firstName = user.name.first 
        this.email = user.email
        this.birthday = new Date(user.dob).toDateString()

    }
}

export default User;